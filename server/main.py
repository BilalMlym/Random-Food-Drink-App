from flask import Flask, request, jsonify
import requests, json, random
from flask_cors import CORS, cross_origin
from random import choice



app = Flask(__name__)
CORS(app, supports_credentials=True)

@cross_origin(supports_credentials=True)
def login():
  return jsonify({'success': 'ok'})

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=8000, debug=True)


@app.route('/server/drinks')
def drink():
    
    api_url = f'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    response = requests.get(api_url)
    data1 = response.json()

   
    
    return (data1)

@app.route('/server/meals')
def meals():
    
    
    api_url = f'https://www.themealdb.com/api/json/v1/1/categories.php'
    response = requests.get(api_url)
    data2 = response.json()
    
    return(data2)



@app.route("/server/DrinkPosts", methods=["POST", "GET"])
def posts():
    data = request.get_json()
    print(data)
    
    category = data['selected']
    print(category)
    api_url = f'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c={category}'
    response = requests.get(api_url)
    data2 = response.json()
    
    totalDrinks = len(data2['drinks'])
    print(totalDrinks)
    randomNum = random.randint(0, int(totalDrinks))
    givenDrink = data2['drinks'][randomNum]
    print(givenDrink)
    
    return jsonify(givenDrink)

  


