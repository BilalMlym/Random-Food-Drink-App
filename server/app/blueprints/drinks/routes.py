from flask import Blueprint, jsonify, request

drinks = Blueprint('drinks', __name__, url_prefix='/drinks')


@drinks.route('/get_categories', methods=["GET"])
def get_drink_categories():
    pass


@drinks.route("/get_random", methods=["POST", "GET"])
def get_random_drink():
    content = request.get_json()
    category = content['selected']
    pass
    # return jsonify(drink)
