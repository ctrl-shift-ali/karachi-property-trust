"""Import-path shim for the saved price model.

Chatbot/price_model.joblib was serialised while the pipeline module was imported as the
top-level name ``price_prediction_pipeline`` (see the CLI at the bottom of
Chatbot/price_prediction_pipeline.py), so the pickle contains references such as
``price_prediction_pipeline.ModelBundle``. The application imports the same code as
``Chatbot.price_prediction_pipeline``.

Inside the app that alias is registered by Chatbot/price_prediction_pipeline.py itself.
This shim does the same for plain scripts/notebooks started from the repository root,
so ``joblib.load("Chatbot/price_model.joblib")`` works there too. There is only one
implementation: this module simply becomes the real one.
"""
import sys

from Chatbot import price_prediction_pipeline as _impl

sys.modules[__name__] = _impl
