(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/add/addLocation"],{"3d7e":function(t,n,e){"use strict";var a=e("966d"),i=e.n(a);i.a},7405:function(t,n,e){"use strict";(function(t,n){var a=e("4ea4");e("f110"),e("a9ff");a(e("66fd"));var i=a(e("d813"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(i.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},"956f":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]},"966d":function(t,n,e){},ae24:function(t,n,e){"use strict";e.r(n);var a=e("c24b"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},c24b:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{latitude:0,longitude:0,address:"",ad_info:{},markers:[{iconPath:"/resources/others.png",id:0,latitude:23.099994,longitude:113.32452,width:50,height:80}],polyline:[{points:[{longitude:113.3245211,latitude:23.10229},{longitude:113.32452,latitude:23.21229}],color:"#f1a7c8DD",width:2,dottedLine:!0}],controls:[{id:1,iconPath:"/resources/location.png",position:{left:0,top:250,width:50,height:50},clickable:!0}]}},onLoad:function(){var n=this;t.getLocation({type:"wgs84",success:function(t){n.latitude=t.latitude,n.longitude=t.longitude,n.translateLocation()},fail:function(){console.log("加载地图失败")}})},methods:{translateLocation:function(){var t=this;this.$http.get("http://apis.map.qq.com/ws/geocoder/v1/",{params:{location:this.latitude+","+this.longitude,key:"4YLBZ-34FLR-MOGWQ-WUDXD-7ZEUV-XCFMT"}}).then((function(n){t.ad_info=n.data.result,t.address=n.data.result.address}))},addLocation:function(){var t=this;this.$http.post("/weapp/addLocation",{country:this.ad_info.address_component.nation,province:this.ad_info.address_component.province,city:this.ad_info.address_component.city,address:this.ad_info.address,date:new Date,user:""}).then((function(n){t.ad_inf=n.data.result,t.address=n.data.result.address}))}}};n.default=e}).call(this,e("543d")["default"])},d813:function(t,n,e){"use strict";e.r(n);var a=e("956f"),i=e("ae24");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("3d7e");var d=e("f0c5"),s=Object(d["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=s.exports}},[["7405","common/runtime","common/vendor"]]]);