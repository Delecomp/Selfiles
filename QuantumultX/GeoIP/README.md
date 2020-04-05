## QuantumultX:
- 增加自定义主页显示节点落地信息的数据获取方式（geo_location_checker）。
- 增加长按节点获取节点落地信息的功能（需有配置 geo_location_checker）。
- 范例中脚本各返回值为必须，否则显示查询失败。如不在意某个值，脚本返回任意固定值即可。
- 为提高查询效率节点信息查询接口的请求仅支持 http，范例如下：

``` [general]
geo_location_checker=http://extreme-ip-lookup.com/json/, https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-location-with-script.js

// Example:
geo_location_checker=http://ifconfig.co/json,https://raw.githubusercontent.com/Delecomp/Selfiles/Profiles/QuantumultX/GeoIP/IPConfig.js

geo_location_checker= http://extreme-ip-lookup.com/json/ ,https://raw.githubusercontent.com/Delecomp/Selfiles/Profiles/QuantumultX/GeoIP/IPCheck.js

geo_location_checker=http://ip-api.com/json/?lang=zh-CN, https://raw.githubusercontent.com/Delecomp/Selfiles/Profiles/QuantumultX/GeoIP/IP_API.js

geo_location_checker= http://api.ipstack.com/check?access_key=1c24147fb534e1a71cb35ff84de2d153&language=zh&output=json , https://raw.githubusercontent.com/Delecomp/Selfiles/Profiles/QuantumultX/GeoIP/IPInfo.js ```


Made by [KOP-XIAO](https://github.com/KOP-XIAO).(前两个为英语显示，后两个为中文显示)


// 台旗emoji无法正常显示时，在手机设置中将地区改为国区以外地区即可正常显示.
