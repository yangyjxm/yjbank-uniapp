(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/index"],{2887:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("371a"));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return d(e)||s(e)||u(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function s(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function d(e){if(Array.isArray(e))return l(e)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var f={data:function(){return{gap:"0天0时0分0秒",list:[{iconPath:"https://cdn.uviewui.com/uview/common/min_button.png",selectedIconPath:"https://cdn.uviewui.com/uview/common/min_button.png",midButton:!0,customIcon:!1}],current:1,messageData:[],loadStatus:"loading",total:0,pageSize:5,pageNum:0,pattern:{},content:[{iconPath:"../../static/add-icon/icon (2).png",selectedIconPath:"../../static/add-icon/icon (2).png",text:"动态",url:"/pages/add/addMessage"},{iconPath:"../../static/add-icon/icon (3).png",selectedIconPath:"../../static/add-icon/icon (3).png",text:"督办",url:"/pages/add/addExcept"},{iconPath:"../../static/add-icon/icon (4).png",selectedIconPath:"../../static/add-icon/icon (4).png",text:"打赌",url:"/pages/add/addBet"},{iconPath:"../../static/add-icon/icon (1).png",selectedIconPath:"../../static/add-icon/icon (1).png",text:"足迹",url:"/pages/add/addLocation"}]}},onLoad:function(){var e=this;this.computedTime();setInterval((function(){return e.computedTime()}),1e3);this.getMessage()},onShow:function(){e.getStorage({key:"userInfo",success:function(e){getApp().globalData.userInfo=e.data,console.log("用户昵称:"+getApp().globalData.userInfo.nickName)},fail:function(){console.log("尚未获得用户授权，无法取得用户信息。"),e.navigateTo({url:"/pages/login/login"})}})},onReachBottom:function(){this.messageData.length!==this.total?(this.pageNum++,this.getMessage()):this.loadStatus="noMore"},methods:{trigger:function(t){console.log(t.item.url),e.navigateTo({url:t.item.url}),this.$refs.fab.close()},computedTime:function(){var e=(0,o.default)(),t=(0,o.default)("2020-06-04 23:49:00"),n=o.default.duration(e-t,"ms");this.gap=e.diff(t,"day")+"天"+n.get("hours")+"时"+n.get("minutes")+"分"+n.get("seconds")+"秒"},getMessage:function(){var e=this;a.callFunction({name:"getMessage",data:{pageSize:this.pageSize,pageNum:this.pageNum}}).then((function(t){e.total=t.result.count.total,e.messageData=[].concat(c(e.messageData),c(t.result.data));for(var n=function(n){t.result.data[n].fileList&&a.getTempFileURL({fileList:[t.result.data[n].fileList],success:function(t){e.messageData[e.pageNum*e.pageSize+n].imgUrl=t.fileList[0].tempFileURL}})},o=0;o<t.result.data.length;o++)n(o)}))},addMessage:function(){e.navigateTo({url:"/pages/add/addMessage"})},change:function(t){switch(t.detail.index){case 1:e.navigateTo({url:"/pages/loan/loan"});break;case 2:e.navigateTo({url:"/pages/treehole/treehole"});break;case 3:e.navigateTo({url:"/pages/calendar/calendar"});break;case 4:e.navigateTo({url:"/pages/footprint/index"});break;case 5:e.requestSubscribeMessage({tmplIds:["tTskOIT7RycCenrNcXrQQDT9HDqIhVvipgNQKBcAC5E"],success:function(e){console.log(e)},fail:function(e){console.log(e)}}),e.login({provider:"weixin",success:function(t){var n=t.code;e.request({url:"https://api.weixin.qq.com/sns/jscode2session?appid=wxa88115e813d1c9d8&secret=a934255da1c34a19e6161f898dcf06f8&js_code="+n,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",success:function(t){console.log("本用户的openid为"+t.data.openid),e.setStorageSync("openid",t.data.openid)}})}});break;case 6:e.navigateTo({url:"/pages/bet/list"});break;case 7:e.navigateTo({url:"/pages/expect/list"});break;case 8:e.navigateTo({url:"/pages/add/list"});break}}}};t.default=f}).call(this,n("543d")["default"],n("a9ff")["default"])},7141:function(e,t,n){"use strict";(function(e){n("fb5a");a(n("66fd"));var t=a(n("dbef"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"724f":function(e,t,n){},8983:function(e,t,n){"use strict";var a=n("724f"),o=n.n(a);o.a},"8a90":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={uniGrid:function(){return n.e("components/uni-grid/uni-grid").then(n.bind(null,"53ce"))},uniGridItem:function(){return n.e("components/uni-grid-item/uni-grid-item").then(n.bind(null,"956a"))},uniCard:function(){return n.e("components/uni-card/uni-card").then(n.bind(null,"e2ff"))},uniFab:function(){return n.e("components/uni-fab/uni-fab").then(n.bind(null,"5cd1"))},uniLoadMore:function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"5ab9"))}},o=function(){var e=this,t=e.$createElement;e._self._c},i=[]},dbef:function(e,t,n){"use strict";n.r(t);var a=n("8a90"),o=n("e9b3");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("8983");var c,r=n("f0c5"),u=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);t["default"]=u.exports},e9b3:function(e,t,n){"use strict";n.r(t);var a=n("2887"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a}},[["7141","common/runtime","common/vendor"]]]);