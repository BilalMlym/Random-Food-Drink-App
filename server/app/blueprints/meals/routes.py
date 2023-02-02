from flask import Blueprint, jsonify, request, current_app

meals = Blueprint('meals', __name__, url_prefix='/meals')


@meals.route('/get_categories', methods=["GET"])
def get_meal_categories():
    categories = current_app.meal_client.get_categories()
    return jsonify(categories)


@meals.route("/get_random", methods=["POST"])
def get_random_meal():
    content = request.get_json()
    category = content['selected']
    meal = current_app.meal_client.get_random_meal(category)
    return jsonify(meal)
