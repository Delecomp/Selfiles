//zhihu_redirect.js https://link.zhihu.com/\?target= url script-request-header Zhihu_redirect.js
// link.zhihu.com

let srcUrl = $request.url;

let urlRegex = /^https:\/\/link\.zhihu\.com\/\?target=(.*)$/;
let encodeUrl = srcUrl.match(urlRegex)[1];
let dstUrl = decodeURIComponent(encodeUrl);

$done({
  response: {
    status: 302,
    headers: {
      Location: dstUrl,
    },
  },
});