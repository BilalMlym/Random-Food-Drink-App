import unittest
from unittest.mock import MagicMock
import random
from app.clients.meal import MealClient


class MealClientTest(unittest.TestCase):
    def setUp(self):
        self.meal_client = MealClient()

    def test_get_categories(self):
        mock = MagicMock(return_value='dummy_response')
        self.meal_client.make_request = mock
        res = self.meal_client.get_categories()
        self.assertEqual(res, 'dummy_response')

    def test_get_random_drink(self):
        data = {'meals': ['dummy_meal_0', 'dummy_meal_1','dummy_meal_2']}
        request_mock = MagicMock(return_value=data)
        self.meal_client.make_request = request_mock

        random_mock = MagicMock(return_value=2)
        random.randint = random_mock

        res = self.meal_client.get_random_meal('dummy_category')
        self.assertEqual(res, 'dummy_meal_2')