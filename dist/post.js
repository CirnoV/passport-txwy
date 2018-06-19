'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = post;

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _requestPromiseNative = require('request-promise-native');

var _requestPromiseNative2 = _interopRequireDefault(_requestPromiseNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function post(url, body) {
  return (0, _requestPromiseNative2.default)({
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'User-Agent': 'User-Agent: Apache-HttpClient/UNAVAILABLE (java 1.4)'
    },
    uri: url,
    body: _querystring2.default.stringify(body)
  });
}