/*
VUE Vlog app unlocks pro

Surge4.0:
http-response https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Delecomp/Selfiles/Config/Script/VUE.js

QuantumultX 1.0.5:
^https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare) url script-response-body VUE.js

Surge & QX Mitm = api.vuevideo.net
*/

body = $response.body.replace(/\"isPremium\":false/, "\"isPremium\":true").replace(/\"valid\":false/, "\"valid\":true")
$done({body});
