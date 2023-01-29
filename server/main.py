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
    api_url = f'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    response = requests.get(api_url)
    data1 = response.json()
    return data1


@app.route('/get_meal_categories')
def get_meal_categories():
    api_url = f'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
    response = requests.get(api_url)
    data2 = response.json()
    return data2


@app.route("/get_random_drink", methods=["POST", "GET"])
def get_random_drink():
    data = request.get_json()
    category = data['selected']
    api_url = (
        f'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c={category}'
    )
    response = requests.get(api_url)
    data2 = response.json()
    totalDrinks = len(data2['drinks'])
    randomNum = random.randint(0, int(totalDrinks))
    givenDrink = data2['drinks'][randomNum]
    return jsonify(givenDrink)


@app.route("/get_random_meal", methods=["POST", "GET"])
def get_random_meal():
    data = request.get_json()
    category = data['selected']
    api_url1 = (
        f'https://www.themealdb.com/api/json/v1/1/filter.php?c={category}'
    )
    response = requests.get(api_url1)
    data2 = response.json()
    totalMeals = len(data2['meals'])
    randomNum1 = random.randint(0, int(totalMeals))
    givenMeal = data2['meals'][randomNum1]
    return jsonify(givenMeal)
