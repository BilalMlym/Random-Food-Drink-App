import unittest
from unittest.mock import MagicMock
import random
from app.clients.drink import DrinkClient


class DrinkClientTest(unittest.TestCase):
    def setUp(self):
        self.drink_clent = DrinkClient()

    def test_get_categories(self):
        mock = MagicMock(return_value='dummy_response')
        self.drink_clent.make_request = mock
        res = self.drink_clent.get_categories()
        self.assertEqual(res, 'dummy_response')

    def test_get_random_drink(self):
        data = {'drinks': ['dummy_drink_0', 'dummy_drink_1']}
        request_mock = MagicMock(return_value=data)
        self.drink_clent.make_request = request_mock

        random_mock = MagicMock(return_value=1)
        random.randint = random_mock

        res = self.drink_clent.get_random_drink('dummy_category')
        self.assertEqual(res, 'dummy_drink_1')