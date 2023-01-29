import random
import requests


class Drink:
    def __init__(self):
        url = 'https://www.thecocktaildb.com/api/json/v1/1/'

    def get_categories(self):
        #     url = (
        #     f'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'  # noqa
        # )
        # response = requests.get(url)
        # return response.json()
        pass

    def get_random_drink(self):
        #     content = request.get_json()
        # category = content['selected']
        # url = (
        #     f'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c={category}'
        # )
        # response = requests.get(url)
        # data = response.json()
        # all_drinks = len(data['drinks'])
        # random_num = random.randint(0, int(all_drinks))
        # drink = data['drinks'][random_num]
        pass
