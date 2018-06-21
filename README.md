# passport-txwy
> Txwy authentication for node.js

## Install
```bash
$ yarn add passport-txwy
```

## Example
```javascript
import login from 'passport-txwy';

const {sid} = login({username, password, appInfo, deviceInfo});
```
 - 23시간 30분이 지나면 sid는 자동으로 만료됩니다.

### appInfo 구조
| Key | Description |
| --- | ----------- |
| id | AppID |
| key | AppKey |
| fuid | fuid |
| version | AppVersion |
| buildNum | buildNum |
| adid | ad_id |
| platform | platform (android/ios) |
| locale | locale (kr) |

### deviceInfo 구조
| Key | Description |
| --- | ----------- |
| dev | device_model |
| cpu | cpu_abi |
| deviceId | android_id |
| mac | mac |
| os | android_verison (4.3(REL)) |
| fbl | resolution (1980_1024) |
