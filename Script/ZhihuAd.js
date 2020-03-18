/* Collected by Delecomp
QuantumultX:
^https:\/\/api\.zhihu\.com\/appview\/api\/v4\/answers\/.*\/recommendations url reject-img
^https?:\/\/(api|www)\.zhihu\.com\/(moments(\/recommend)?\?(action|feed_type)|topstory\/recommend|.*\/questions|market\/header|people|appview\/(v2|p)\/(answer\/)?\d{1,10}\?no\_image\=false(\&article\_fixed\_bottom\=1)?\&X\-SUGER\=) url script-response-body ZhihuAd.js
[MITM]
hostname = api.zhihu.com, www.zhihu.com （加上自己屏蔽的ip后，用正则表达式屏蔽)

(因QuantumultX最新版移除empty_sni_enabled参数，改为在mitm中直接匹配相关ip，所以请自行使用抓包工具屏蔽广告ip！)

Surge:
URL-REGEX,^https:\/\/pic\d\.zhimg\.com\/70\/
URL-REGEX,https://(api|www).zhihu.com/(ab|adx|fringe|commercial|ad-style-service|.*(recommendations|extended|featured-comment-ad)|api/v4/mcn/)
AND,((USER-AGENT,osee2*), (OR,((IP-CIDR,0.0.0.0/0,no-resolve),(IP-CIDR6,::/0,no-resolve))))
[Scripts]
http-response ^https?:\/\/(api|www)\.zhihu\.com\/(moments(\/recommend)?\?(action|feed_type)|topstory\/recommend|.*\/questions|market\/header|people|appview\/(v2|p)\/(answer\/)?\d{1,10}\?no\_image\=false(\&article\_fixed\_bottom\=1)?\&X\-SUGER\=) requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/primovist/ScriptsForSurge/master/Scripts/Zhihu.js
*/
const path1 = "/moments?";
const path2 = "/topstory/recommend";
const path3 = "/questions/";
const path4 = "/market/header";
const path5 = "/people";
const path6 = "/moments/recommend?";
const path7 = "/appview"

let url = $request.url;
let body = $response.body;

if ($request.method == "GET") {
  if (url.indexOf(path7) != -1) {
    body = body.replace(/<a data-draft-node="block" data-draft-type="mcn-link-card" data-mcn-id=".*?"><\/a>/ig, '');
  } else {
    body = JSON.parse(body);

    if (url.indexOf(path1) != -1 || url.indexOf(path6) != -1) {
      body.data = body.data.filter(function(item) {
        if (item.hasOwnProperty('adjson')) {
          return false;
        }
        return true;
      });
    }

    if (url.indexOf(path2) != -1) {
      body.data = body.data.filter(function(item) {
        if (item.card_type == "slot_event_card" || item.hasOwnProperty('ad')) {
          return false;
        }
        return true;
      });
    }

    if (url.indexOf(path3) != -1) {
      delete body.ad_info;
      /*
      body.data = body.data.filter(function(item) {
        if (item.author.name == "盐选推荐") {
          return false;
        }
        return true;
      });
      */
    }

    if (url.indexOf(path4) != -1) {
      body.sub_webs.splice(0, 1);
      body.sub_webs.splice(1, 1);
    }

    if (url.indexOf(path5) != -1) {
      delete body.mcn_user_info;
    }

    body = JSON.stringify(body);
  }
}

$done({
  body
})
