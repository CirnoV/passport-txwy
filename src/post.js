import querystring from 'querystring';
import request from 'request-promise-native';

export default function post(url, body) {
  return request({
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'User-Agent': 'User-Agent: Apache-HttpClient/UNAVAILABLE (java 1.4)',
    },
    uri: url,
    body: querystring.stringify(body),
  });
}
