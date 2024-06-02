(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{1067:function(n,t,e){"use strict";var i=e("e168"),a=e.n(i);a.a},"7abd":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniCollapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach((function(t,e){t.isOpen&&n.push(t.nameSync)})),this.$emit("change",n)}}};t.default=i},8483:function(n,t,e){"use strict";e.r(t);var i=e("7abd"),a=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(u);t["default"]=a.a},"8d2d":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){}));var i=function(){var n=this.$createElement;this._self._c},a=[]},"8fa6":function(n,t,e){"use strict";e.r(t);var i=e("8d2d"),a=e("8483");for(var u in a)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(u);e("1067");var c=e("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"e17e8124",null,!1,i["a"],void 0);t["default"]=o.exports},e168:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8fa6"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);
