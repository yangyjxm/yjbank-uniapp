(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-transition/uni-transition"],{"2e7d":function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var r=function(){var t=this.$createElement;this._self._c},i=[]},"404c":function(t,n,e){"use strict";var r=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e("9523"));function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){(0,i.default)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var s={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=o(o({},this.styles),{},{"transition-duration":this.duration/1e3+"s"}),n="";for(var e in t){var r=this.toLine(e);n+=r+":"+t[e]+";"}return n}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var n in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===n?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[n]," ");this.$nextTick((function(){setTimeout((function(){t._animation(!0)}),50)}))},close:function(t){clearTimeout(this.timer),this._animation(!1)},_animation:function(t){var n=this,e=this.getTranfrom(t);for(var r in this.transform="",e)"opacity"===r?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(e[r]," ");this.timer=setTimeout((function(){t||(n.isShow=!1),n.$emit("change",{detail:n.isShow})}),this.duration)},getTranfrom:function(t){var n={transform:""};return this.modeClass.forEach((function(e){switch(e){case"fade":n.opacity=t?1:0;break;case"slide-top":n.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":n.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":n.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":n.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":n.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":n.transform+="scale(".concat(t?1:1.2,") ");break}})),n},_modeClassArr:function(t){var n=this.modeClass;if("string"!==typeof n){var e="";return n.forEach((function(n){e+=n+"-"+t+","})),e.substr(0,e.length-1)}return n+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};n.default=s},4660:function(t,n,e){},"4f7a":function(t,n,e){"use strict";e.r(n);var r=e("404c"),i=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=i.a},6026:function(t,n,e){"use strict";e.r(n);var r=e("2e7d"),i=e("4f7a");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("e4d6");var o=e("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"456006ae",null,!1,r["a"],void 0);n["default"]=s.exports},e4d6:function(t,n,e){"use strict";var r=e("4660"),i=e.n(r);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-transition/uni-transition-create-component',
    {
        'components/uni-transition/uni-transition-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6026"))
        })
    },
    [['components/uni-transition/uni-transition-create-component']]
]);
