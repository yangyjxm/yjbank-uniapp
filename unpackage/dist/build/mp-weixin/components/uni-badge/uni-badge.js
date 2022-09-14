(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{"237a":function(t,e,n){"use strict";n.r(e);var u=n("8399"),a=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);e["default"]=a.a},6059:function(t,e,n){"use strict";n.r(e);var u=n("7be4"),a=n("237a");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("e35d");var r,c=n("f0c5"),o=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,"75e35175",null,!1,u["a"],r);e["default"]=o.exports},"7be4":function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return u}));var a=function(){var t=this,e=t.$createElement;t._self._c},i=[]},8399:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u},a93f:function(t,e,n){},e35d:function(t,e,n){"use strict";var u=n("a93f"),a=n.n(u);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6059"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);
