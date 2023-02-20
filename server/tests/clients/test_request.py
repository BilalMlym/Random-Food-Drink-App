import unittest
import responses
from app.clients.request import RequestClient


class RequestClientTest(unittest.TestCase):
    def setUp(self):
        self.request_client = RequestClient()

    @responses.activate
    def test_make_request(self):
        responses.add(
            **{
                'method': responses.GET,
                'url': 'http://dummy_url.com',
                'body': '{"success": true}',
                'status': 200,
                'content_type': 'application/json',
                'adding_headers': {'X-Foo': 'Bar'},
            }
        )
        res = self.request_client.make_request('http://dummy_url.com')
        print(res)
        self.assertEqual({'success': False}, res)
