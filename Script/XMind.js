/*
Xmind Unlocks Pro
QuantumultX:
[rewrite_local]
https:\/\/www\.xmind\.cn\/\_res\/devices url script-response-body https://raw.githubusercontent.com/Delecomp/Selfiles/Profiles/Script/XMind.js
[mitm]
hostname = www.xmind.cn
Surge:
[MITM]
hostname = www.xmind.cn
[Script]
http-response https:\/\/www\.xmind\.cn\/\_res\/devices requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Delecomp/Selfiles/Profiles/Script/XMind.js
*/
var obj = JSON.parse($response.body);

obj = {
   "raw_data": "DBcBHgojrvPgruIJMfb4KK/76CmjxSHSp9KipRwOnQUuf+Gt2FncFUzNvxZydUeXEzDZt/XWEm91lHFYrvT0f2AFap2L4psLI/34sKU9VLGH7kFsBYlexU/nifBtosMJqQxL4TU1pjvjl+1uyWsFAeGR42aEnVhQWgvJB5Ovcd0=",
   "license": {
     "status": "sub",
     "expireTime": 3070928235000
   },
   "_code": 200
 }

$done({body: JSON.stringify(obj)});
