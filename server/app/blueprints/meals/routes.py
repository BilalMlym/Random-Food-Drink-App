import random
import requests
from flask import Blueprint, jsonify, request

meals = Blueprint('meals', __name__, url_prefix='/meals')


@meals.route('/get_categories', methods=["GET"])
def get_meal_categories():
    url = f'https://www.themealdb.com/api/json/v1/1/list.php?c=list'  # noqa
    response = requests.get(url)
    return response.json()


@meals.route("/get_random", methods=["POST", "GET"])
def get_random_meal():
    content = request.get_json()
    category = content['selected']
    url = f'https://www.themealdb.com/api/json/v1/1/filter.php?c={category}'
    response = requests.get(url)
    data = response.json()
    all_meals = len(data['meals'])
    random_num = random.randint(0, int(all_meals))
    meal = data['meals'][random_num]
    return jsonify(meal)
