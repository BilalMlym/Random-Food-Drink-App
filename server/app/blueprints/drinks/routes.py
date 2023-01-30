import random
import requests
from flask import Blueprint, jsonify, request

drinks = Blueprint('drinks', __name__, url_prefix='/drinks')


@drinks.route('/get_categories', methods=["GET"])
def get_drink_categories():
    url = (
        f'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'  # noqa
    )
    response = requests.get(url)
    return response.json()


@drinks.route("/get_random", methods=["POST", "GET"])
def get_random_drink():
    content = request.get_json()
    category = content['selected']
    url = (
        f'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c={category}'
    )
    response = requests.get(url)
    data = response.json()
    all_drinks = len(data['drinks'])
    random_num = random.randint(0, int(all_drinks))
    drink = data['drinks'][random_num]
    return jsonify(drink)
