from flask import Blueprint, jsonify, request, current_app

drinks = Blueprint('drinks', __name__, url_prefix='/drinks')


@drinks.route('/get_categories', methods=["GET"])
def get_drink_categories():
    categories = current_app.drink_client.get_categories()
    return jsonify(categories)


@drinks.route("/get_random", methods=["POST"])
def get_random_drink():
    content = request.get_json()
    category = content['selected']
    drink = current_app.drink_client.get_random_drink(category)
    return jsonify(drink)
