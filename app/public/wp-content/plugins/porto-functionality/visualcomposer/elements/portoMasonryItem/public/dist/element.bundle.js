(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./portoMasonryItem/editor.css":function(e,t){e.exports=".vce-porto-masonry-item {\n  position: relative;\n  min-height: 10em;\n}\n.vce-porto-masonry-item .vcv-ui-blank-row-element-control {\n  background: rgba(0,160,210,0.05);\n  border: 2px dotted rgba(0,160,210,0.5);\n}\n.vce-porto-masonry-item .vcv-ui-blank-row-element-control:hover .vcv-ui-blank-row-element-control-icon {\n  opacity: 1;\n}\n.vce-porto-masonry-item .vcv-ui-blank-row-element-control-icon {\n  opacity: 0.4;\n}\n.vce-porto-masonry-item rect {\n  stroke: #00a0d2;\n}\n.vce-porto-masonry-item polygon {  \n  fill: #00a0d2;\n}\n.vce-porto-masonry-item .vcv-row-control-container { opacity: 1; }"},"./portoMasonryItem/index.js":function(e,t,o){"use strict";o.r(t);var n=o("./node_modules/vc-cake/index.js"),r=o("./node_modules/@babel/runtime/helpers/extends.js"),s=o.n(r),a=o("./node_modules/@babel/runtime/helpers/classCallCheck.js"),i=o.n(a),c=o("./node_modules/@babel/runtime/helpers/createClass.js"),l=o.n(c),p=o("./node_modules/@babel/runtime/helpers/inherits.js"),d=o.n(p),u=o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),m=o.n(u),v=o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),y=o.n(v),b=o("./node_modules/react/index.js"),h=o.n(b);function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=y()(e);if(t){var r=y()(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return m()(this,o)}}var g=function(e){d()(o,e);var t=f(o);function o(e){var n;return i()(this,o),(n=t.call(this,e)).$window=document.getElementById("vcv-editor-iframe").contentWindow,n}return l()(o,[{key:"validateSize",value:function(e){var t=new RegExp("^-?\\d*(\\.\\d{0,9})?("+["px","em","rem","%","vw","vh"].join("|")+")?$");return""===e||e.match(t)?e:null}},{key:"render",value:function(){var e=this.props,t=e.id,o=e.atts,n=e.editor,r=e.children,a=o.width,i=o.customClass,c=o.metaCustomId,l="vce-porto-masonry-item porto-grid-item",p={style:{}},d={};"string"==typeof i&&i&&(l=l.concat(" "+i)),c&&(d.id=c);var u=this.applyDO("all");return a&&a&&0==this.$window.jQuery("#el-"+t).parent().parent(".porto-grid.porto-preset-layout").length&&(p.style.width=parseInt(a)+"%"),h.a.createElement("div",s()({className:l},n,d,p,{"data-width":a}),h.a.createElement("div",s()({className:"vce-porto-masonry-item-wrapper",id:"el-"+t},u),r))}}]),o}(Object(n.getService)("portoComponent").shortcodeComponent);(0,Object(n.getService)("cook").add)(o("./portoMasonryItem/settings.json"),(function(e){e.add(g)}),{css:!1,editorCss:o("./node_modules/raw-loader/index.js!./portoMasonryItem/editor.css"),mixins:{}})},"./portoMasonryItem/settings.json":function(e){e.exports=JSON.parse('{"width":{"type":"number","access":"public","value":50,"options":{"label":"Width(%)","min":1,"max":100}},"containerFor":{"type":"group","access":"protected","value":["General"]},"parentWrapper":{"type":"string","access":"protected","value":"portoMasonry"},"darkTextSkin":{"type":"toggleSmall","access":"public","value":false},"designOptions":{"type":"designOptions","access":"public","value":{},"options":{"label":"Design Options"}},"editFormTab1":{"type":"group","access":"protected","value":["width","outputInline","metaCustomId","customClass"],"options":{"label":"General"}},"metaEditFormTabs":{"type":"group","access":"protected","value":["editFormTab1","designOptions"]},"relatedTo":{"type":"group","access":"protected","value":["portoMasonryItem"]},"customClass":{"type":"string","access":"public","value":"","options":{"label":"Extra class name","description":"Add an extra class name to the element and refer to it from Custom CSS option."}},"metaCustomId":{"type":"customId","access":"public","value":"","options":{"label":"Element ID","description":"Apply unique ID to element to link directly to it by using #your_id (for element ID use lowercase input only)."}},"tag":{"access":"protected","type":"string","value":"portoMasonryItem"}}')}},[["./portoMasonryItem/index.js"]]]);