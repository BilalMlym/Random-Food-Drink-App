from flask import Flask
from flask_cors import CORS
from flask_talisman import Talisman
from .blueprints.drinks.routes import drinks
from .blueprints.meals.routes import meals


def create_app():
    app = Flask(__name__)
    with app.app_context():
        # register blueprints
        app.register_blueprint(drinks)
        app.register_blueprint(meals)
    origins = ['*']
    CORS(app, origins=origins)
    Talisman(app)
    return app
