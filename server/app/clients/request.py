import requests


class RequestClient:
    @staticmethod
    def make_request(url):
        response = requests.get(url)
        return response.json()
