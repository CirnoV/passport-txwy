import crypto from 'crypto';
import querystring from 'querystring';

function md5(data) {
  const hash = crypto
    .createHash('md5')
    .update(data)
    .digest();
  
  let hex = '';
  hash.forEach((b) => {
    if ((b & 255) < 16) {
      hex += 0;
    }

    hex += (b & 255).toString(16);
  });
  return hex;
}

export default function sig({data, appKey}) {
  const key = md5(`${md5(appKey)}dGjrdfdd`);
  return crypto.createHmac('sha1', key).update(querystring.unescape(querystring.stringify(data))).digest('base64');
}
