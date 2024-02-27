var l=Object.defineProperty,u=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var o=(t,a,e)=>a in t?l(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,s=(t,a)=>{for(var e in a||(a={}))d.call(a,e)&&o(t,e,a[e]);if(i)for(var e of i(a))v.call(a,e)&&o(t,e,a[e]);return t},n=(t,a)=>u(t,h(a));import{H as m}from"./hashlistCreator.ee75e7d3.js";import{j as f}from"./vendor.6aa46313.js";import{n as p}from"./index.4da83f88.js";import"./fileUploader.a2fb854c.js";import"./fc_textarea.0ca8a043.js";import"./vue-infinite-loading.33b09e95.js";import"./hashTypeAutocomplete.47d5ad19.js";var _=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",[e("v-col",[e("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.$route.query.attach,expression:"$route.query.attach"}],attrs:{icon:"mdi-information",color:"success"}},[t._v(" Once created, this hashlist will be attached to your new job in the form. ")])],1)],1),e("v-row",[e("v-col",[t.existingId?e("h2",[t._v("Extend Hashlist")]):e("h2",[t._v("Create a Hashlist")])])],1),t.existingId?t._e():e("v-row",[e("v-col",[e("v-text-field",{attrs:{outlined:"",autofocus:t.name.length<=0,required:"",rules:[function(r){return!!r||"Name is required"}],label:"Name",hint:"Give this hashlist a descriptive name","persistent-hint":""},model:{value:t.name,callback:function(r){t.name=r},expression:"name"}})],1)],1),e("v-row",[e("v-col",[e("HashlistCreator",{ref:"creator",attrs:{"hashlist-name":t.name,"hashlist-id":t.existingId,autofocus:t.name.length>0},on:{validation:function(r){return t.validCreatorInput=r}}})],1)],1),e("v-row",[e("v-col",[e("v-btn",{attrs:{large:"",block:""},on:{click:function(r){return t.$router.go(-1)}}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-arrow-u-left-top ")]),t._v(" Cancel ")],1)],1),e("v-col",[e("v-btn",{attrs:{large:"",block:"",color:"primary",disabled:t.invalidInput},on:{click:t.create}},[e("v-icon",{attrs:{left:""}},[t._v(" "+t._s(t.$route.query.attach?"mdi-briefcase-plus":"mdi-check")+" ")]),t._v(" "+t._s(t.$route.query.attach?"Create and attach to job":"Confirm")+" ")],1)],1)],1)],1)},I=[];const b={name:"createHashlist",components:{HashlistCreator:m},data:function(){return{name:this.$route.query.attach||"",validCreatorInput:!1}},computed:{existingId(){return parseInt(this.$route.params.id)||null},validNameOrId(){return this.name.length>0||this.existingId},invalidInput(){return!this.validNameOrId||!this.validCreatorInput},toDo(){const t=[];return this.validNameOrId||t.push("Name it."),t}},methods:n(s({},f("jobForm",["hashListIdMut"])),{create(){this.$refs.creator.createHashlist().then(a=>{this.$route.query.attach&&this.hashListIdMut(a.data.id),this.$router.go(-1)}).catch(a=>{console.error(a),this.$error(a)})}})},c={};var x=p(b,_,I,!1,g,null,null,null);function g(t){for(let a in c)this[a]=c[a]}var k=function(){return x.exports}();export{k as default};
