(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0a9f":function(e,n,t){},"105b":function(e,n,t){"use strict";t.r(n);var o=t("dd7e"),a=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=a.a},"2f28":function(e,n,t){"use strict";(function(e,n){var o=t("4ea4");t("f110"),t("a9ff");o(t("66fd"));var a=o(t("5ea1"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(a.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"5ea1":function(e,n,t){"use strict";t.r(n);var o=t("67d9"),a=t("105b");for(var r in a)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(r);t("6b04");var i=t("f0c5"),u=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=u.exports},"67d9":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return o}));var o={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"dccc"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"25eb"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"49a8"))}},a=function(){var e=this.$createElement;this._self._c},r=[]},"6b04":function(e,n,t){"use strict";var o=t("0a9f"),a=t.n(o);a.a},dd7e:function(e,n,t){"use strict";(function(e,o){var a=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("9523"));function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var c={data:function(){return{valiFormData:{nickName:getApp().globalData.userInfo.nickName||"",avatarUrl:getApp().globalData.userInfo.avatarUrl,openid:getApp().globalData.userInfo.openid},rules:{nickName:{rules:[{required:!0,errorMessage:"昵称不能为空"}]}}}},methods:{submit:function(){var n=this;this.$refs["valiForm"].validate().then((function(t){console.log("success",t,n.valiFormData),e.showToast({title:"校验通过"}),getApp().globalData.userInfo=u({openid:getApp().globalData.userInfo.openid},n.valiFormData),o.callFunction({name:"addUser",data:u({openid:getApp().globalData.userInfo.openid},n.valiFormData)}).then((function(e){console.log("res",e)})).catch((function(e){console.log("err",e)})),e.navigateBack({delta:1})})).catch((function(e){console.log("error",e)}))},onChooseAvatar:function(e){this.valiFormData.avatarUrl=e.detail.avatarUrl,console.log("e.detail",e.detail.avatarUrl),this.uploadFile()},getUserInfo:function(n){console.log(n),e.login({provider:"weixin",success:function(e){console.log("成功点击登录按钮");var n=e.code;this.getOpenid(n)}})},getUserProfile:function(){e.getUserProfile({desc:"获取使用者头像、昵称",lang:"zh_CN",success:function(n){console.log(n.userInfo),e.setStorage({key:"userInfo",data:u(u({},n.userInfo),{},{signature:n.signature}),success:function(){console.log("userInfo",n),e.navigateBack({delta:1})}})},fail:function(e){console.log(e)}})},getOpenid:function(n){e.request({url:"https://api.weixin.qq.com/sns/jscode2session?appid=wxa88115e813d1c9d8&secret=a934255da1c34a19e6161f898dcf06f8&js_code="+n,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",success:function(n){console.log(n.data.openid),e.setStorageSync("openid",n.data.openid),e.reLaunch({url:"/pages/home/index"})}})}}};n.default=c}).call(this,t("543d")["default"],t("a9ff")["default"])}},[["2f28","common/runtime","common/vendor"]]]);