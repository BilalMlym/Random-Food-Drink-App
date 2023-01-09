from flask import Flask
import requests, json



app = Flask(__name__)




@app.route('/server/drinks')
def drink():
    
    api_url = f'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
    response = requests.get(api_url)
    data = response.json()
    
    return (data)

@app.route('/server/meals')
def hello2():
    
    api_url = f'https://www.themealdb.com/api/json/v1/1/categories.php'
    response = requests.get(api_url)
    data = response.json()
    
    
    return(data)
    
    































# from flask import Flask
# import requests
# import os

# app = Flask(__name__)

# @app.route('/server/hello')



# def hello():
#         responce = requests.get(url= "https://www.themealdb.com/")
        

#         return {
#                 responce()
#         }