(self.webpackChunk=self.webpackChunk||[]).push([[3981],{46497:function(e,t,n){var o={"./de.json":12877,"./en.json":11886,"./es.json":47263,"./fr.json":10906,"./it.json":18471,"./nl.json":61792,"./pt.json":24740};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=46497},53981:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var o=n(55959),r=n(26209),a=n(80928);const i={class:"pagination-modal-title"},l=["onSubmit"],s={class:"inline-flex"},u=["min","max"],c={class:"btn btn-secondary inline-block ml-1",type:"submit"};var p={__name:"PageSelector",props:{min:{type:Number,default:1},current:{type:Number,default:1},max:{type:Number,default:0},url:{type:String,default:""},track:{type:String,default:""}},emits:["goToPage"],setup(e){const t=e,{t:p}=(0,a.T_)(n(46497)),g=(0,o.getCurrentInstance)(),m=(0,o.ref)(null),d=(0,o.ref)(t.current),f=(0,o.ref)(!1),v=()=>{f.value=!f.value,f.value&&(N(),t.track&&r.Z.trackEvent(["paging","open pageselect",t.track],!0))},x=e=>{if(m.value){m.value.contains(e.target)?N():f.value&&v()}},N=()=>{setTimeout((()=>{document.addEventListener("click",x,{once:!0})}),100)},b=()=>{d.value<t.max&&d.value++},P=()=>{d.value>t.min&&d.value--},k=()=>{if(t.url){const e=t.url.replace("p=0","p="+d.value);window.location.href=e}else g.emit("goToPage",d.value)},S=()=>{d.value<t.min?d.value=t.min:d.value>t.max&&(d.value=t.max)};return(t,n)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{ref_key:"el",ref:m,class:"inline-block"},[(0,o.createElementVNode)("div",{class:"inline-block",onClick:v},[(0,o.renderSlot)(t.$slots,"default")]),(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(["pagination-modal",{hidden:0==f.value}])},[(0,o.createElementVNode)("div",i,(0,o.toDisplayString)((0,o.unref)(p)("goToPage")),1),(0,o.createElementVNode)("form",{class:"pagination-modal-form",onSubmit:(0,o.withModifiers)(k,["prevent"])},[(0,o.createElementVNode)("div",s,[(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>d.value=e),class:"paging-control paging-control-input",min:e.min,max:e.max,type:"number",onKeyup:S},null,40,u),[[o.vModelText,d.value]]),(0,o.createElementVNode)("button",{class:"paging-control paging-control-button",type:"button",onClick:P}," - "),(0,o.createElementVNode)("button",{class:"paging-control paging-control-button",type:"button",onClick:b}," + ")]),(0,o.createElementVNode)("button",c,(0,o.toDisplayString)((0,o.unref)(p)("go")),1)],40,l)],2)],512))}}},12877:function(e){"use strict";e.exports=JSON.parse('{"go":"gehen","goToPage":"Gehe zu Seite","next":"Nächste","last":"Zuletzt","first":"Zuerst","prev":"Vorherige"}')},11886:function(e){"use strict";e.exports=JSON.parse('{"go":"Go","goToPage":"Goto page","next":"Next","last":"Last","first":"First","prev":"Previous"}')},47263:function(e){"use strict";e.exports=JSON.parse('{"go":"Ir","goToPage":"Ir a página","next":"Próximo","last":"Último","first":"Primero","prev":"Anterior"}')},10906:function(e){"use strict";e.exports=JSON.parse('{"go":"Va","goToPage":"Aller à la page","next":"Suivant","last":"Dernier","first":"Première","prev":"Précédent"}')},18471:function(e){"use strict";e.exports=JSON.parse('{"go":"andare","goToPage":"Vai alla pagina","next":"Prossimo","last":"Scorso","first":"Primo","prev":"Precedente"}')},61792:function(e){"use strict";e.exports=JSON.parse('{"go":"Gaan","goToPage":"Ga naar pagina","next":"Volgende","last":"Laatst","first":"Eerst","prev":"Vorig"}')},24740:function(e){"use strict";e.exports=JSON.parse('{"go":"Ir","goToPage":"Vá para página","next":"Próximo","last":"Durar","first":"Primeiro","prev":"Anterior"}')}}]);