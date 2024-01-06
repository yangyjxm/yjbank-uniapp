(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{"21b6":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},u=[]},"25dd":function(t,e,n){"use strict";n.r(e);var i=n("21b6"),u=n("357e");for(var a in u)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("52e1");var c=n("f0c5"),o=Object(c["a"])(u["default"],i["b"],i["c"],!1,null,"22061369",null,!1,i["a"],void 0);e["default"]=o.exports},"357e":function(t,e,n){"use strict";n.r(e);var i=n("ae06"),u=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=u.a},"52e1":function(t,e,n){"use strict";var i=n("ed0d"),u=n.n(i);u.a},ae06:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=i},ed0d:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("25dd"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);
