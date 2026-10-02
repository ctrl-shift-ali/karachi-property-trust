# Karachi Property Trust

A mobile-first property discovery + verification demo app (static HTML/CSS/JS, no build step, no backend).

## Files

```
karachi-property-trust/
├── index.html      # markup + app shell
├── css/
│   └── styles.css  # all styling
├── js/
│   └── app.js       # app data, routing, rendering, interactions (logo is embedded here as base64)
└── assets/
    ├── logo-icon.png  # cropped icon mark, transparent background (reference copy)
    └── logo-full.png  # full logo with wordmark (reference copy)
```

The app itself doesn't load the PNGs from `assets/` — the icon is embedded directly in `js/app.js` as a base64 data URI (`const LOGO = ...`) so the whole app stays a single dependency-free bundle. The `assets/` copies are there for your own reference (e.g. if you want the logo elsewhere on your GitHub profile or README).

All property, verification and report data lives in `js/app.js` inside the `PROPERTIES` array — it's demo data, not a live database.

## Run locally

Install the chatbot dependencies and run its Flask server from the project root:

```bash
python -m pip install .   # or: uv sync  (dependencies live in pyproject.toml)
python Chatbot/app.py
```

Open `http://localhost:5000`. The assistant can use Gemini when `GEMINI_API_KEY` is set in `Chatbot/.env`; without a key, property-data search and offline answers remain available. Opening `index.html` directly or using a static-only host still displays the site, but cannot reach the chatbot API.

## Deploy on GitHub Pages

1. Push this folder's contents to the root of your repo (or to a `docs/` folder).
2. In your repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Pick the branch and root folder (`/` or `/docs`), save.
4. Your app will be live at `https://<username>.github.io/<repo>/`. GitHub Pages does not run the Flask chatbot API, so deploy `Chatbot/app.py` separately and configure `window.KPT_CHAT_API_URL` plus the backend's `ALLOWED_ORIGINS` for that deployment.

The frontend remains plain HTML/CSS/JS with no build step. The chatbot backend's dependencies are pinned in `pyproject.toml`.

## Deploy on Vercel (one project, one Flask app)

- `pyproject.toml` → `[tool.vercel] entrypoint = "Chatbot.app:app"` tells Vercel where the Flask app is. Do **not** enable Services mode.
- Dependencies are pinned in `pyproject.toml` (`scikit-learn==1.9.1` matches the saved `Chatbot/price_model.joblib`).
- `public/assets/` is served by Vercel's CDN at `/assets/...`; `index.html`, `css/`, `js/`, `/api/*`, `/chatbot-demo` and `/static/chatbot.*` are served by Flask.
- Add `GEMINI_API_KEY` in **Vercel → Project Settings → Environment Variables** (never commit it). Without it the chatbot answers from the offline engine.
- The price model is loaded, never retrained, at runtime. To retrain deliberately:
  `python Chatbot/price_prediction_pipeline.py Chatbot --save Chatbot/price_model.joblib` (then commit the new file and keep the scikit-learn pin in sync).
- Check after deploy: `GET /api/health` should return `status: ok`.

## Camera document capture

The `Verify Your Document` feature supports:
- Live browser camera preview with `getUserMedia` when available.
- A mobile `Take Photo` fallback using the device camera/file input.
- Capture, preview, retake, and continue into the same document-analysis workflow.

For live browser camera access, deploy over HTTPS (GitHub Pages works) or use `localhost` during local development. If live camera access is blocked, the mobile `Take Photo` fallback remains available.

# Property Assistant

**An AI chatbot for Karachi Property Trust.** Property Assistant answers questions about property records, compares areas, and estimates prices, all from the Trust's own data, through a chat widget that pops up on any web page.

> Ask: *"What would a house in DHA, block 5 cost?"*, *"Which area is cheapest for apartments?"*, or *"Show plots under 3 crore in Malir."*

---

## Features

- **Answers from your data first.** Questions about listings, prices and statistics are answered from the Trust's CSV records (apartments, commercials, houses, plots, portions). Gemini falls back to general knowledge only when the data has nothing to say, and says so.
- **Price estimates.** Uses the Trust's prediction pipeline (`price_prediction_pipeline.py`) and returns an estimate with a confidence level, a typical range and any warnings. Optional future-price scenarios use an assumed yearly appreciation rate.
- **Market statistics.** Min, median, average and max prices, grouped by area, property type or block.
- **Property search and ID lookup.** Filter by area, type, block, price and rooms, or look up a single property by ID.
- **Greeting trigger.** "Hi", "Hello", "Salam" and "Assalam o Alaikum" get an instant reply.
- **Multilingual replies.** Gemini answers in the user's language (English, Roman Urdu or Urdu).
- **Works without Gemini.** If the API key is missing or the service is down, a built-in rule-based engine still answers data questions using the same tools.
- **Privacy by design.** Owner names, previous owners and owner IDs are never loaded, so the bot cannot reveal them.
- **Pop-up widget.** Launcher icon, quick-reply chips, voice input, typing indicator, retry on errors, mobile layout. Embeds with one `<script>` tag.

## How it works

```
Browser widget (static/chatbot.js)
        |  POST /api/chat
        v
Flask API (app.py)  ->  greeting? -> instant reply
        |
        v
Gemini + 5 tools (chatbot_core.py)
   predict_price · market_stats · search_properties · get_property · dataset_overview
        |
        v
CSV records (data/)  +  price model (price_prediction_pipeline.py)
```

Gemini never sees the raw CSVs. It calls the tools, which run against the data and return verified figures, so numbers in replies come from the records and not from the model's memory. Each reply is tagged in the widget as *From property data* or *General knowledge*.

## Quick start

**Requirements:** Python 3.10+ and a Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey).

```bash
git clone <your-repo-url>
cd property-chatbot
pip install -r requirements.txt
```

Create a file named `.env` (no extension) in the project folder:

```
GEMINI_API_KEY=your-key-here
```

Start the server:

```bash
python app.py
```

Open <http://localhost:5000> and click the chat icon. To confirm Gemini is connected, visit <http://localhost:5000/api/health>; it should show `"gemini": true`.

The price model trains automatically on first start and is cached in `price_model.joblib`. It retrains whenever the CSVs or the pipeline change.

## Configuration

| Variable | Default | Purpose |
|---|---|---|
| `GEMINI_API_KEY` | none | Enables Gemini. Without it the offline engine is used. |
| `GEMINI_MODEL` | `gemini-3-flash-preview,gemini-2.5-flash` | Comma-separated models, tried in order. Set to one your key can access. |
| `PORT` | `5000` | Server port. |
| `RATE_LIMIT_PER_MIN` | `20` | Max chat messages per IP per minute. |
| `ALLOWED_ORIGINS` | empty | Domains allowed to call the API when the widget is embedded on another site (comma-separated, or `*`). |
| `DATA_DIR` | `./data` | Folder containing the CSV files. |

Never commit `.env`. Add it to `.gitignore`.

## Embedding the widget

On any page (including a React app's `index.html`):

```html
<script src="https://YOUR-HOST/static/chatbot.js" defer></script>
```

Customise text and branding before the script loads:

```html
<script>
  window.PropertyChatConfig = {
    title: "Property Assistant",
    brandText: "Karachi Property Trust",
    brandLogo: "https://YOUR-HOST/logo.png",
    poweredBy: "Gemini",
    chips: ["Estimate a house price in DHA", "Cheapest area for apartments?"]
  };
</script>
```

If the site and the API are on different domains, set `ALLOWED_ORIGINS` on the server.

## API

`POST /api/chat`

```json
{ "session_id": "any-string", "message": "Price of a flat in Gulshan?" }
```

Response:

```json
{ "reply": "...", "source": "gemini", "from_data": true }
```

`source` is `greeting`, `gemini` or `offline`. `GET /api/health` reports status, Gemini availability and record count.

## Project structure

```
property-chatbot/
├── app.py                        # Flask server, rate limiting, CORS
├── chatbot_core.py               # Data store, Gemini tools, offline engine, greetings
├── price_prediction_pipeline.py  # Price model and estimate logic
├── data/                         # apartments, commercials, houses, plots, portions (CSV)
├── static/
│   ├── chatbot.js                # Widget behaviour
│   ├── chatbot.css               # Widget styling
│   └── index.html                # Demo page
├── requirements.txt
└── .env.example
```

## Using your own data

Replace or add CSV files in `data/`. Expected columns include Property ID, House Number, Street Number, Area, Block, Rooms, Property Type, Ownership Status, Taxes Status, Legal Check, Utilities Bill and Price (PKR). Restart the server and the model retrains.

## Limitations

- Price figures are **model estimates from historical records, not valuations**. They should not replace a professional appraisal.
- The data has no prices for commercial properties, so commercial estimates are only low-confidence area averages.
- General-knowledge answers do not use live market data. Legal and financial questions need a qualified professional.
- Chat history is kept in server memory (last 20 messages per session) and is cleared when the server restarts.

## License

All rights reserved to **syedebad11ali** and **ctrl-shift-ali**
