import requests


class request_client:
    @staticmethod    
    def make_request(url):
        response = requests.get(url)
        return response.json()

    
  