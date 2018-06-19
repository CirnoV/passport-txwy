'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.login = login;

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

var _sig = require('./sig');

var _sig2 = _interopRequireDefault(_sig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
var cometVersion = 2;

function login() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      username = _ref.username,
      password = _ref.password,
      appInfo = _ref.appInfo,
      deviceInfo = _ref.deviceInfo;

  var id = appInfo.id,
      key = appInfo.key,
      fuid = appInfo.fuid,
      version = appInfo.version,
      buildNum = appInfo.buildNum,
      adid = appInfo.adid,
      platform = appInfo.platform,
      locale = appInfo.locale;
  var dev = deviceInfo.dev,
      cpu = deviceInfo.cpu,
      deviceId = deviceInfo.deviceId,
      mac = deviceInfo.mac,
      os = deviceInfo.os,
      fbl = deviceInfo.fbl,
      imei = deviceInfo.imei,
      men = deviceInfo.men;


  var requestData = {
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

  return (0, _post2.default)('http://p-kr.playcomet.com/api2/signin', (0, _extends3.default)({}, requestData, { sig: (0, _sig2.default)({ data: requestData, appKey: key }) }));
}