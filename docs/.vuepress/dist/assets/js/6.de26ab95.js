(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{240:function(t,o,s){},241:function(t,o,s){"use strict";s(240)},242:function(t,o,s){"use strict";var e={props:{name:{type:String},iconPosition:{type:String,default:"left"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}}},n=(s(241),s(15)),a=Object(n.a)(e,(function(){var t=this,o=t._self._c;return o("div",[o("button",{staticClass:"o-button",class:{["icon-"+t.iconPosition]:!0,["disabled-"+t.disabled]:!0},on:{click:function(o){return t.$emit("click")}}},[!t.name||t.loading||t.disabled?t._e():o("svg",{staticClass:"icon",attrs:{name:t.name}},[o("use",{attrs:{"xlink:href":"#icon-"+t.$props.name}})]),t._v(" "),t.loading&&!t.disabled?o("svg",{staticClass:"loading icon",attrs:{name:"loading"}},[o("use",{attrs:{"xlink:href":"#icon-loading"}})]):t._e(),t._v(" "),o("div",{staticClass:"content"},[t._t("default")],2)])])}),[],!1,null,"08eab56d",null);o.a=a.exports},272:function(t,o,s){},273:function(t,o,s){},308:function(t,o,s){"use strict";s(272)},309:function(t,o,s){"use strict";s(273)},316:function(t,o,s){"use strict";s.r(o);var e=s(0),n={name:"optimal-toast",props:{enableHTML:{type:Boolean,default:!1},autoClose:{type:Boolean,default:!0},autoCloseDelay:{type:Number,default:4},closeButton:{type:Object,default:()=>({text:"关闭",callback:()=>{}})},position:{type:String,default:"top",validator:t=>["top","bottom","middle"].indexOf(t)>=0}},computed:{positionClass(){return{["position-"+this.position]:!0}}},mounted(){this.autoClose&&setTimeout(()=>{this.close()},1e3*this.autoCloseDelay)},methods:{close(){this.$el.remove(),this.$destroy()},onClickClose(){this.close(),this.closeButton&&"function"==typeof this.closeButton.callback&&this.closeButton.callback()}}},a=(s(308),s(15)),i=Object(a.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"toast",class:t.positionClass},[t.enableHTML?o("div",{domProps:{innerHTML:t._s(t.$slots.default[0])}}):t._t("default"),t._v(" "),t.closeButton?o("div",{staticClass:"close",on:{click:t.onClickClose}},[t._v("\n        "+t._s(t.closeButton.text)+"\n    ")]):t._e()],2)}),[],!1,null,null,null).exports,l=s(242);let c;var u={install(t,o){t.prototype.$toast=(o,s)=>{c&&c.close(),c=function({Vue:t,message:o,propsData:s}){let e=new(t.extend(i))({propsData:s});return e.$slots.default=[o],e.$mount(),document.body.appendChild(e.$el),e}({Vue:t,message:o,propsData:s})}}};e.a.use(u);var d={components:{"o-toast":i,"o-button":l.a},methods:{showToast1(){this.$toast("我是toast",{enableHTML:!0,position:"top"})},showToast2(){this.$toast("我是toast",{enableHTML:!0,position:"middle"})},showToast3(){this.$toast("我是toast",{enableHTML:!0,position:"bottom"})}}},r=(s(309),Object(a.a)(d,(function(){var t=this._self._c;return t("div",{staticClass:"toast_wrapper"},[t("o-button",{on:{click:this.showToast1}},[this._v(" 点击查看Toast")]),this._v(" "),t("o-button",{on:{click:this.showToast2}},[this._v(" 点击查看Toast")]),this._v(" "),t("o-button",{on:{click:this.showToast3}},[this._v(" 点击查看Toast")])],1)}),[],!1,null,null,null));o.default=r.exports}}]);