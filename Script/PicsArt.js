/*
PicsArt app unlocks pro

Surge4.0:
http-response https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Delecomp/Selfiles/Profiles/Script/PicsArt.js

QuantumultX
^https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json url script-response-body PicsArt.js

Surge & QuantumultX Mitm = api.picsart.c*, api.meiease.c*
*/

let obj = JSON.parse($response.body);
obj.subscription.granted = "true";
$done({body: JSON.stringify(obj)});
