(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-006c2fad"],{"98db":function(t,e,s){"use strict";s("f506")},ab14:function(t,e,s){"use strict";e["a"]={data:()=>({mainId:Math.floor(1e7*Math.random()),selected:0,elements:[],stateStr:"",rendered:!1}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>({id:this.mainId+e+1,html:t.elm.outerHTML,titulo:t.data&&t.data.attrs&&t.data.attrs.titulo,icono:t.data&&t.data.attrs&&t.data.attrs.icono})),this.selected=this.selected>0?this.selected:this.elements[0].id,void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},b5d4:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tabs-a"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 col-xl-3"},[s("div",{staticClass:"row"},t._l(t.elements,(function(e,a){return s("div",{key:"tabs-menu-"+e.id,staticClass:"col-sm-6 col-lg-12 mb-3"},[s("button",{staticClass:"tabs-a__tab",class:{"tabs-a__tab__selected":t.selected===e.id},on:{click:function(s){t.selected=e.id}}},[s("div",{staticClass:"tabs-a__tab__text"},[t._v(t._s(e.titulo))])])])})),0)]),s("div",{staticClass:"col-lg-8 col-xl-9"},t._l(t.elements,(function(e){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.selected===e.id,expression:"selected === elm.id"}],key:"tabs-a-content-"+e.id,staticClass:"tabs-a__content-item",class:{"tabs-a__content-item--active":t.selected===e.id},domProps:{innerHTML:t._s(e.html)}})})),0)]),s("div",{staticClass:"tabs__slot"},[t._t("default")],2)])},i=[],d=s("ab14"),l={name:"TabsA",mixins:[d["a"]]},n=l,o=(s("98db"),s("2877")),c=Object(o["a"])(n,a,i,!1,null,"df63f2e0",null);e["default"]=c.exports},f506:function(t,e,s){}}]);
//# sourceMappingURL=chunk-006c2fad.f3eef09e.js.map