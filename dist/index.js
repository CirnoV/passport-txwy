'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var login = exports.login = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        username = _ref2.username,
        password = _ref2.password,
        appInfo = _ref2.appInfo,
        deviceInfo = _ref2.deviceInfo;

    var id, key, fuid, version, buildNum, adid, platform, locale, dev, cpu, deviceId, mac, os, fbl, imei, men, requestData;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = appInfo.id, key = appInfo.key, fuid = appInfo.fuid, version = appInfo.version, buildNum = appInfo.buildNum, adid = appInfo.adid, platform = appInfo.platform, locale = appInfo.locale;
            dev = deviceInfo.dev, cpu = deviceInfo.cpu, deviceId = deviceInfo.deviceId, mac = deviceInfo.mac, os = deviceInfo.os, fbl = deviceInfo.fbl, imei = deviceInfo.imei, men = deviceInfo.men;
            requestData = {
              appid: id,
              ver: cometVersion,
              time: Math.floor(Date.now() / 1000),
              username: username,
              password: password,
              fuid: fuid,
              device_id: deviceId,
              binding: 1,
              imei: imei,
              mac: mac,
              l: locale,
              // post
              fbl: fbl,
              os: os,
              dev: dev,
              cpu: cpu,
              men: men,
              appver: version,
              buildnumber: buildNum,
              sys: 'android',
              adid: adid,
              platform: platform
            };
            _context.t0 = JSON;
            _context.next = 6;
            return (0, _post2.default)('http://p-kr.playcomet.com/api2/signin', (0, _extends3.default)({}, requestData, { sig: (0, _sig2.default)({ data: requestData, appKey: key }) }));

          case 6:
            _context.t1 = _context.sent;
            return _context.abrupt('return', _context.t0.parse.call(_context.t0, _context.t1));

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function login() {
    return _ref.apply(this, arguments);
  };
}();

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

var _sig = require('./sig');

var _sig2 = _interopRequireDefault(_sig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
var cometVersion = 2;