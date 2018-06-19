'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sig;

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function md5(data) {
  var hash = _crypto2.default.createHash('md5').update(data).digest();

  var hex = '';
  hash.forEach(function (b) {
    if ((b & 255) < 16) {
      hex += 0;
    }

    hex += (b & 255).toString(16);
  });
  return hex;
}

function sig(_ref) {
  var data = _ref.data,
      appKey = _ref.appKey;

  var key = md5(md5(appKey) + 'dGjrdfdd');
  return _crypto2.default.createHmac('sha1', key).update(_querystring2.default.unescape(_querystring2.default.stringify(data))).digest('base64');
}