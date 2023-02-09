import random
from ..clients.request_client import RequestClient


class MealClient(RequestClient):
    def __init__(self):
        self.url = 'https://www.themealdb.com/api/json/v1/1'

    def get_categories(self):
        return self.make_request(f'{self.url}/list.php?c=list')

    def get_random_meal(self, category):
        data = self.make_request(f'{self.url}/filter.php?c={category}')
        random_num = random.randint(0, len(data['meals']))
        return data['meals'][random_num]
