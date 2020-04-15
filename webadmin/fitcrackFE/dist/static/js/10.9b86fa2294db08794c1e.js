webpackJsonp([10],{474:function(e,t,n){"use strict";function a(e){n(769),n(771)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(608),i=n(773),o=n(32),s=a,c=o(r.a,i.a,!1,s,"data-v-36fa4c6c",null);t.default=c.exports},484:function(e,t,n){"use strict";t.a={name:"FcTile",props:{title:String,loading:Boolean,icon:String}}},486:function(e,t,n){"use strict";var a=n(484),r=n(487),i=n(32),o=i(a.a,r.a,!1,null,null,null);t.a=o.exports},487:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto"},[n("v-card-title",[e.icon?n("v-icon",{attrs:{left:""}},[e._v("\n      "+e._s(e.icon)+"\n    ")]):e._e(),e._v("\n    "+e._s(e.title)+"\n  ")],1),e._v(" "),n("v-card-text",{staticClass:"contentFcTile"},[e.loading?n("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"article"}}):e._t("default")],2)],1)},r=[],i={render:a,staticRenderFns:r};t.a=i},488:function(e,t,n){e.exports={default:n(495),__esModule:!0}},489:function(e,t,n){"use strict";var a=n(500),r=n.n(a),i=n(488),o=n.n(i),s=n(504),c=n.n(s);t.a={name:"FileUploader",props:{multiple:Boolean,url:{type:String,default:this.$serverAddr},noUpload:Boolean,label:{type:String,default:"Select files"},args:{type:Object,default:function(){}}},data:function(){return{selectedFiles:[],files:null,progress:0,showProgress:!1,fileUploaded:!1}},computed:{overSizeLimit:function(){return this.selectedFiles.some(function(e){return e.size>2e9})}},methods:{uploadChange:function(e){this.progress=Math.round(100*e.loaded/e.total),console.log(this.progress)},fileChange:function(e){this.files=new FormData,this.selectedFiles=[];for(var t=0;t<e.length;t++)this.selectedFiles.push({name:e[t].name,type:e[t].type||"n/a",size:e[t].size,modified:e[t].lastModifiedDate?e[t].lastModifiedDate.toLocaleDateString():"n/a"}),this.files.append("file",e[t],e[t].name);if(this.args){var n=!0,a=!1,i=void 0;try{for(var s,l=o()(r()(this.args));!(n=(s=l.next()).done);n=!0){var u=s.value,d=c()(u,2),f=d[0],p=d[1];this.files.append(f,p)}}catch(e){a=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw i}}}this.fileUploaded=!1,this.progress=0,this.$emit("filesChanged",e)},upload:function(){var e=this;this.showProgress=!0;var t={withCredentials:!0,headers:{"Content-type":"multipart/form-data"},onUploadProgress:this.uploadChange};this.axios.post(this.url,this.files,t).then(function(t){e.fileUploaded=!0,e.$emit("uploadComplete",t.data),e.files=null}).catch(function(e){console.log(e)})}}}},495:function(e,t,n){n(181),n(33),e.exports=n(496)},496:function(e,t,n){var a=n(6),r=n(35);e.exports=n(2).getIterator=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return a(t.call(e))}},497:function(e,t,n){"use strict";function a(e){n(498)}var r=n(489),i=n(508),o=n(32),s=a,c=o(r.a,i.a,!1,s,"data-v-1c1e87be",null);t.a=c.exports},498:function(e,t,n){var a=n(499);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(455)("60faad44",a,!0,{})},499:function(e,t,n){t=e.exports=n(454)(!0),t.push([e.i,".uploadInput[data-v-1c1e87be]{max-width:250px}.form[data-v-1c1e87be]{max-width:100%;text-align:center}.uploadButton[data-v-1c1e87be]{margin-top:15px}.spacer[data-v-1c1e87be]{width:10px}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/fileUploader/fileUploader.vue"],names:[],mappings:"AACA,8BACE,eAAiB,CAClB,AACD,uBACE,eAAgB,AAChB,iBAAmB,CACpB,AACD,+BACE,eAAiB,CAClB,AACD,yBACE,UAAY,CACb",file:"fileUploader.vue",sourcesContent:["\n.uploadInput[data-v-1c1e87be] {\n  max-width: 250px;\n}\n.form[data-v-1c1e87be] {\n  max-width: 100%;\n  text-align: center;\n}\n.uploadButton[data-v-1c1e87be] {\n  margin-top: 15px;\n}\n.spacer[data-v-1c1e87be] {\n  width: 10px;\n}\n"],sourceRoot:""}])},500:function(e,t,n){e.exports={default:n(501),__esModule:!0}},501:function(e,t,n){n(502),e.exports=n(2).Object.entries},502:function(e,t,n){var a=n(5),r=n(503)(!0);a(a.S,"Object",{entries:function(e){return r(e)}})},503:function(e,t,n){var a=n(20),r=n(21),i=n(183).f;e.exports=function(e){return function(t){for(var n,o=r(t),s=a(o),c=s.length,l=0,u=[];c>l;)i.call(o,n=s[l++])&&u.push(e?[n,o[n]]:o[n]);return u}}},504:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(505),i=a(r),o=n(488),s=a(o);t.default=function(){function e(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=(0,s.default)(e);!(a=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{!a&&c.return&&c.return()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if((0,i.default)(Object(t)))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},505:function(e,t,n){e.exports={default:n(506),__esModule:!0}},506:function(e,t,n){n(181),n(33),e.exports=n(507)},507:function(e,t,n){var a=n(36),r=n(3)("iterator"),i=n(8);e.exports=n(2).isIterable=function(e){var t=Object(e);return void 0!==t[r]||"@@iterator"in t||i.hasOwnProperty(a(t))}},508:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-0 mt-0"},[e.overSizeLimit?n("v-alert",{attrs:{type:"error",tile:""}},[e._v("\n    Maximum size of uploaded file is 2 GB.\n  ")]):e._e(),e._v(" "),n("form",{staticClass:"form pa-2",attrs:{enctype:"multipart/form-data"}},[n("v-file-input",{staticClass:"mr-2",attrs:{outlined:"",chips:"","show-size":"",label:e.label,name:"file",multiple:e.multiple},on:{change:e.fileChange}}),e._v(" "),e.noUpload?e._e():n("v-btn",{attrs:{color:"primary",outlined:"",disabled:null===e.files||e.overSizeLimit},on:{click:function(t){return e.upload()}}},[e._v("\n      Upload\n      "),n("v-icon",{attrs:{right:""}},[e._v("\n        mdi-upload\n      ")])],1)],1),e._v(" "),n("v-progress-linear",{attrs:{query:!0,active:e.showProgress,color:"primary"},model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}})],1)},r=[],i={render:a,staticRenderFns:r};t.a=i},608:function(e,t,n){"use strict";var a=n(486),r=n(497);t.a={name:"CharsetView",components:{FileUploader:r.a,"fc-tile":a.a},data:function(){return{loading:!1,charsets:[],headers:[{text:"Name",align:"start",value:"name"},{text:"Keyspace",value:"keyspace",align:"end"},{text:"Added",value:"time",align:"end"},{text:"Actions",value:"actions",align:"end",sortable:!1}]}},mounted:function(){this.loadCharsets()},methods:{loadCharsets:function(){var e=this;this.loading=!0,this.axios.get(this.$serverAddr+"/charset",{}).then(function(t){e.charsets=t.data,e.loading=!1})},deleteCharset:function(e){var t=this;this.$root.$confirm("Delete","This will remove "+e.name+" from your charsets. Are you sure?").then(function(n){t.loading=!0,t.axios.delete(t.$serverAddr+"/charset/"+e.id).then(function(e){t.loadCharsets()})})}}}},769:function(e,t,n){var a=n(770);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(455)("686433cc",a,!0,{})},770:function(e,t,n){t=e.exports=n(454)(!0),t.push([e.i,".noEvent[data-v-36fa4c6c]{pointer-events:none;display:inline-block}.dz-message[data-v-36fa4c6c]{cursor:pointer;text-align:center}.max500[data-v-36fa4c6c]{max-width:600px}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/charset/charsetsView.vue"],names:[],mappings:"AACA,0BACE,oBAAqB,AACrB,oBAAsB,CACvB,AACD,6BACE,eAAgB,AAChB,iBAAmB,CACpB,AACD,yBACE,eAAiB,CAClB",file:"charsetsView.vue",sourcesContent:["\n.noEvent[data-v-36fa4c6c] {\n  pointer-events: none;\n  display: inline-block;\n}\n.dz-message[data-v-36fa4c6c] {\n  cursor: pointer;\n  text-align: center;\n}\n.max500[data-v-36fa4c6c] {\n  max-width: 600px;\n}\n\n"],sourceRoot:""}])},771:function(e,t,n){var a=n(772);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(455)("64af3ef2",a,!0,{})},772:function(e,t,n){t=e.exports=n(454)(!0),t.push([e.i,".selectedDict{background:rgba(37,157,173,.85)!important;color:#fff}.selectedDict a{color:#fff}.clickable{cursor:pointer}","",{version:3,sources:["/home/runner/work/fitcrack/fitcrack/webadmin/fitcrackFE/src/components/charset/charsetsView.vue"],names:[],mappings:"AACA,cACE,0CAAgD,AAChD,UAAa,CACd,AACD,gBACE,UAAa,CACd,AACD,WACE,cAAgB,CACjB",file:"charsetsView.vue",sourcesContent:["\n.selectedDict {\n  background: rgba(37, 157, 173, 0.85) !important;\n  color: white;\n}\n.selectedDict a {\n  color: white;\n}\n.clickable {\n  cursor: pointer;\n}\n"],sourceRoot:""}])},773:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"max500"},[n("fc-tile",{staticClass:"ma-2",attrs:{title:"Charsets",icon:e.$route.meta.icon}},[n("v-alert",{staticClass:"mb-0",attrs:{tile:"",text:"",type:"warning"}},[e._v("\n      Charsets must have a .txt, .hcchr or .charset extension.\n    ")]),e._v(" "),n("v-data-table",{attrs:{headers:e.headers,items:e.charsets.items,loading:e.loading,"footer-props":{itemsPerPageOptions:[10,25,50],itemsPerPageText:"Charsets per page"}},scopedSlots:e._u([{key:"item.name",fn:function(t){var a=t.item;return[n("router-link",{attrs:{to:"charsets/"+a.id}},[e._v("\n          "+e._s(a.name)+"\n        ")])]}},{key:"item.time",fn:function(t){var n=t.item;return[e._v("\n        "+e._s(e.$moment(n.time).format("DD.MM.YYYY HH:mm"))+"\n      ")]}},{key:"item.actions",fn:function(t){var a=t.item;return[n("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("a",e._g({attrs:{href:e.$serverAddr+"/charset/"+a.id+"/download",target:"_blank",download:""}},r),[n("v-btn",{attrs:{icon:""}},[n("v-icon",[e._v("mdi-file-download-outline")])],1)],1)]}}],null,!0)},[e._v(" "),n("span",[e._v("Download")])]),e._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[n("v-btn",e._g({attrs:{icon:""},on:{click:function(t){return e.deleteCharset(a)}}},r),[n("v-icon",{attrs:{color:"error"}},[e._v("\n                mdi-delete-outline\n              ")])],1)]}}],null,!0)},[e._v(" "),n("span",[e._v("Delete")])])]}}])}),e._v(" "),n("v-divider"),e._v(" "),n("file-uploader",{attrs:{url:this.$serverAddr+"/charset/add"},on:{uploadComplete:e.loadCharsets}})],1)],1)},r=[],i={render:a,staticRenderFns:r};t.a=i}});
//# sourceMappingURL=10.9b86fa2294db08794c1e.js.map