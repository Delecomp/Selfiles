/*
QuantumultX:

[rewrite_local]
^https://mp\.weixin\.qq\.com/mp/getappmsgad url request-body WeChat.js
[mitm]
hostname = mp.weixin.qq.com

Surge:

[Script]
http-request ^https://mp\.weixin\.qq\.com/mp/getappmsgad script-path=https://raw.githubusercontent.com/Delecomp/Selfiles/Profiles/Script/WeChat.js
[MITM]
hostname = mp.weixin.qq.com
*/

var data = {
  body: "{}",
  headers: {
    "Content-Type": "application/json"
  }
};
$done({response: data});
