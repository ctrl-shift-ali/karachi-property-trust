import logging
import os
import time
import uuid
from collections import defaultdict, deque
from pathlib import Path

from dotenv import load_dotenv
from flask import Flask, jsonify, request, send_from_directory

BASE = Path(__file__).resolve().parent
WEB_ROOT = BASE.parent
# Local development only: Chatbot/.env. On Vercel the variables come from Project Settings.
load_dotenv(BASE / ".env")
logging.basicConfig(level=logging.INFO, format="%(levelname)s | %(message)s")

if __package__:
    from .chatbot_core import ChatService
else:
    from chatbot_core import ChatService

import threading

# Static files that Vercel does NOT serve from its CDN: index.html, css/, js/ stay at the repo root
# and are served by this app. assets/ lives in public/assets (CDN on Vercel, same /assets/... URL);
# the /assets route below keeps local `python Chatbot/app.py` working.
ASSETS_DIR = WEB_ROOT / "public" / "assets"
app = Flask(__name__, static_folder=None)

_service = None
_service_lock = threading.Lock()


def get_service():
    """Build ChatService once per warm instance (lazy, so import never touches the model/CSVs/Gemini)."""
    global _service
    if _service is None:
        with _service_lock:
            if _service is None:
                _service = ChatService()
    return _service


@app.errorhandler(Exception)
def unhandled(e):
    from werkzeug.exceptions import HTTPException
    if isinstance(e, HTTPException):
        return e
    logging.getLogger("chatbot").exception("Unhandled error")
    return jsonify(error=f"{type(e).__name__}: {e}"), 500

ALLOWED = [o.strip() for o in os.getenv("ALLOWED_ORIGINS", "").split(",") if o.strip()]
RATE_LIMIT, hits = int(os.getenv("RATE_LIMIT_PER_MIN", "20")), defaultdict(deque)
MAX_LEN = 1000


@app.after_request
def cors(resp):
    origin = request.headers.get("Origin")
    if origin and ("*" in ALLOWED or origin in ALLOWED):
        resp.headers["Access-Control-Allow-Origin"] = origin
        resp.headers["Access-Control-Allow-Headers"] = "Content-Type"
        resp.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
        resp.headers["Vary"] = "Origin"
    return resp


@app.route("/api/chat", methods=["POST", "OPTIONS"])
def chat():
    if request.method == "OPTIONS":
        return "", 204
    now, q = time.time(), hits[request.remote_addr]
    while q and now - q[0] > 60:
        q.popleft()
    if len(q) >= RATE_LIMIT:
        return jsonify(error="Too many messages. Please wait a moment."), 429
    q.append(now)

    data = request.get_json(silent=True) or {}
    message = str(data.get("message", "")).strip()
    if not message:
        return jsonify(error="Message is empty."), 400
    if len(message) > MAX_LEN:
        return jsonify(error=f"Message is too long (max {MAX_LEN} characters)."), 400
    sid = str(data.get("session_id") or uuid.uuid4())[:64]
    return jsonify(get_service().reply(sid, message))


@app.get("/api/health")
def health():
    try:
        svc = get_service()
    except Exception as e:  # surface the real startup error (e.g. model load failure) in the response + logs
        logging.getLogger("chatbot").exception("Chat service failed to start")
        return jsonify(status="error", error=f"{type(e).__name__}: {e}"), 503
    return jsonify(status="ok", gemini=svc.gemini.enabled, models=svc.gemini.models,
                   records=len(svc.store.df), model=svc.store.bundle.model_name,
                   data_files=svc.store.files)


@app.get("/")
def index():
    return send_from_directory(WEB_ROOT, "index.html")


@app.get("/css/<path:filename>")
def app_css(filename):
    return send_from_directory(WEB_ROOT / "css", filename)


@app.get("/js/<path:filename>")
def app_js(filename):
    return send_from_directory(WEB_ROOT / "js", filename)


@app.get("/assets/<path:filename>")
def app_assets(filename):
    return send_from_directory(ASSETS_DIR, filename)


@app.get("/chatbot-demo")
def chatbot_demo():
    return send_from_directory(BASE, "index.html")


@app.get("/static/chatbot.js")
def chatbot_js():
    return send_from_directory(BASE, "chatbot.js")


@app.get("/static/chatbot.css")
def chatbot_css():
    return send_from_directory(BASE, "chatbot.css")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", "5000")), debug=False)
