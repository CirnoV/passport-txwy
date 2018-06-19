/* eslint-disable import/prefer-default-export */
import post from './post';
import getSig from './sig';

const cometVersion = 2;

export function login({username, password, appInfo, deviceInfo} = {}) {
  const {id, key, fuid, version, buildNum, adid, platform, locale} = appInfo;
  const {dev, cpu, deviceId, mac, os, fbl, imei, men} = deviceInfo;

  const requestData = {
    appid: id,
    ver: cometVersion,
    time: Math.floor(Date.now() / 1000),
    username,
    password,
    fuid,
    device_id: deviceId,
    binding: 1,
    imei,
    mac,
    l: locale,
    // post
    fbl,
    os,
    dev,
    cpu,
    men,
    appver: version,
    buildnumber: buildNum,
    sys: 'android',
    adid,
    platform,
  };

  return post('http://p-kr.playcomet.com/api2/signin', {...requestData, sig: getSig({data: requestData, appKey: key})});
}
