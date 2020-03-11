/*
NeteaseReading Unlock Vip

QuantumultX
^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body NeteaseReading.js

Surge4：
http-response ^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Delecomp/Selfiles/Profiles/Script/NeteaseReading.js

Surge & QuantumultX MITM = p.du.163.com
*/

var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 1679685290000;
body = JSON.stringify(obj);
$done({body});

//By yxiaocai & JO2EY
