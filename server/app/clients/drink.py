import random
import requests


class Drink:
    def __init__(self):
        self.url = 'https://www.thecocktaildb.com/api/json/v1/1'

    @staticmethod
    def make_request(url):
        response = requests.get(url)
        return response.json()

    def get_categories(self):
        return self.make_request(f'{self.url}/list.php?c=list')

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
