(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{"0169":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},u=[]},"3cee":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=i},b2dd:function(t,e,n){"use strict";n.r(e);var i=n("0169"),u=n("efc5");for(var c in u)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(c);n("eed3");var a=n("f0c5"),f=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"b6799886",null,!1,i["a"],void 0);e["default"]=f.exports},c5fc:function(t,e,n){},eed3:function(t,e,n){"use strict";var i=n("c5fc"),u=n.n(i);u.a},efc5:function(t,e,n){"use strict";n.r(e);var i=n("3cee"),u=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);e["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b2dd"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);
