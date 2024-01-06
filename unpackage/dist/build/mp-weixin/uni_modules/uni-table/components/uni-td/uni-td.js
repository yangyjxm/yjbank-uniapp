(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-table/components/uni-td/uni-td"],{"1c31":function(t,n,e){"use strict";e.r(n);var r=e("512f"),u=e("6b4c");for(var i in u)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("4c60");var o=e("f0c5"),a=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);n["default"]=a.exports},4915:function(t,n,e){},"4c60":function(t,n,e){"use strict";var r=e("4915"),u=e.n(r);u.a},"512f":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var r=function(){var t=this.$createElement;this._self._c},u=[]},"6b4c":function(t,n,e){"use strict";e.r(n);var r=e("bff4"),u=e.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(i);n["default"]=u.a},bff4:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"uniTd",options:{virtualHost:!0},props:{width:{type:[String,Number],default:""},align:{type:String,default:"left"},rowspan:{type:[Number,String],default:1},colspan:{type:[Number,String],default:1}},data:function(){return{border:!1}},created:function(){this.root=this.getTable(),this.border=this.root.border},methods:{getTable:function(){var t=this.$parent,n=t.$options.name;while("uniTable"!==n){if(t=t.$parent,!t)return!1;n=t.$options.name}return t}}};n.default=r}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-table/components/uni-td/uni-td-create-component',
    {
        'uni_modules/uni-table/components/uni-td/uni-td-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1c31"))
        })
    },
    [['uni_modules/uni-table/components/uni-td/uni-td-create-component']]
]);
