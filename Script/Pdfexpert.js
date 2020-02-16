
/*# PDFexpert 
^https:\/\/license\.pdfexpert\.com\/api\/.*\/(?:documents|pdfexpert6)\/subscription\/(refresh$|check$) url script-response-body Pdfexpert.js
hostname = license.pdfexpert.com
*/
var obj= {
  "originalTransactionId": "20000618444996",
  "subscriptionState": "trial",
  "isInGracePeriod": false,
  "subscriptionExpirationDate": "13:15 03/11/2099",
  "subscriptionAutoRenewStatus": "autoRenewOn",
  "isEligibleForIntroPeriod": false,
  "isPDFExpert6User": false,
  "subscriptionReceiptId": "1572178404000"
};

$done({body: JSON.stringify(obj)});

//