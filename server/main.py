import random
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app, supports_credentials=True)


@cross_origin(supports_credentials=True)
def login():
    return jsonify({'success': 'ok'})


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)


@app.route('/get_drink_categories')
def get_drink_categories():
    url = f'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    response = requests.get(url)
    return response.json()


@app.route('/get_meal_categories')
def get_meal_categories():
    url = f'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    response = requests.get(url)
    return response.json()


@app.route("/get_random_drink", methods=["POST", "GET"])
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


@app.route("/get_random_meal", methods=["POST", "GET"])
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
