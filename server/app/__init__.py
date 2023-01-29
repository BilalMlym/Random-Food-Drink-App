from flask import Flask
from flask_cors import CORS
from flask_talisman import Talisman


def create_app():
    app = Flask(__name__)
    origins = ['*']
    CORS(app, origins=origins)
    Talisman(app)
    return app
