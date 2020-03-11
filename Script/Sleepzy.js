/*
QuantumultX:

[rewrite_local]
^https:\/\/subs\.platforms\.team\/apple\/verifyTransaction$ url script-response-body Sleepzy.js
[mitm]
hostname = subs.platforms.team

Surge:

[Script]
http-request ^https:\/\/subs\.platforms\.team\/apple\/verifyTransaction$ script-path=https://raw.githubusercontent.com/Delecomp/Selfiles/Profiles/Script/Sleepzy.js
[MITM]
hostname = subs.platforms.team
*/
var body = $response.body;
var obj = JSON.parse(body);

obj = {
 "error": 0,
 "data": {
  "is_valid": true,
  "may_expire": false,
  "is_offer_eligible": true,
  "in_app": {
   "com.apalonapps.smartalarmfree.01y_07dt_SUB00004": {
    "is_valid": true,
    "cancelled": false,
    "may_expire": true,
    "is_trial": true,
    "is_intro": false,
    "transaction_id": "260000622851642",
    "purchase_date_ms": "1572445394000",
    "expired": false,
    "expires_date_ms": "2014297417000",
    "remaining_time_ms": "1898956800000"
   }
  },
  "consumable_inapp": [],
  "hash": "2f119a8992f0aca546927c607221afcc"
 }
};
body = JSON.stringify(obj);
$done(body);
