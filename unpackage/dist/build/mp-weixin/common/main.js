(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{2534:function(e,t,n){"use strict";n.r(t);var o=n("cc3e");for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);var c=n("f0c5"),r=Object(c["a"])(o["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);t["default"]=r.exports},5251:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={globalData:{userInfo:{openid:"",nickName:"",avatarUrl:"https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0"}},onLaunch:function(){},onShow:function(){e.login({provider:"weixin",success:function(e){console.log("loginRes",e);var t=e.code;n.callFunction({name:"getOpenid",data:{js_code:t}}).then((function(e){console.log("res",e),console.log("openid",e.result.data.openid),n.callFunction({name:"getUser",data:{openid:e.result.data.openid}}).then((function(t){console.log("response",t),t.result.data.length?(console.log("用户已存在读取数据",t.result.data[0]),getApp().globalData.userInfo=t.result.data[0]):(console.log("新用户"),getApp().globalData.userInfo={openid:e.data.openid,avatarUrl:"https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",nickName:""})})).catch((function(e){console.log("err",e)}))})).catch((function(e){console.log("err",e)}))}})},onHide:function(){}};t.default=o}).call(this,n("543d")["default"],n("a9ff")["default"])},"72c2":function(e,t,n){"use strict";(function(e,t){var o=n("4ea4"),a=o(n("9523"));n("03ed"),n("a9ff");var c=o(n("66fd")),r=o(n("2534")),i=o(n("3e96")),l=o(n("e5d7"));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}e.__webpack_require_UNI_MP_PLUGIN__=n,c.default.prototype.$http=new i.default({baseURL:"http://111.229.251.142/api",header:{"content-type":"application/json"}}),c.default.use(l.default),c.default.config.productionTip=!1,r.default.mpType="app";var d=new c.default(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r.default));t(d).$mount()}).call(this,n("bc2e")["default"],n("543d")["createApp"])},cc3e:function(e,t,n){"use strict";n.r(t);var o=n("5251"),a=n.n(o);for(var c in o)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t["default"]=a.a}},[["72c2","common/runtime","common/vendor"]]]);