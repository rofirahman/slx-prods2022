self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('calc_schlumberger').then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./img/logo-purple.png",
 
        "./img/demo/favicon.ico",
        "./img/demo/apple-touch-icon-57x57.png",
        "./img/demo/apple-touch-icon-76x76.png",       
        "./js/object.js",
        "./js/formula.js",
        "./js/form.js",
        ].map(url => new Request(url, {credentials: 'same-origin'})))
    })
    )
 })
 





"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_github_command-pale-51fe14"],{80425(a,b,c){c.d(b,{k:()=>e});var d=function(){for(var a=new Uint32Array(256),b=256;b--;){for(var c=b,d=8;d--;)c=1&c?3988292384^c>>>1:c>>>1;a[b]=c}return function(b){var c=-1;"string"==typeof b&&(b=function(a){for(var b=a.length,c=Array(b),d=-1;++d<b;)c[d]=a.charCodeAt(d);return c}(b));for(var d=0,e=b.length;d<e;d++)c=c>>>8^a[255&c^b[d]];return(-1^c)>>>0}}(),e=function(a,b){var c,e=d(a);return b?((c=e)<0&&(c=4294967295+c+1),("0000000"+c.toString(16)).slice(-8)):e}},3447(a,b,c){c.d(b,{D:()=>f,P:()=>e});var d=c(46263);function e(a=0,b={}){return(c,e,f)=>{if(!f||"function"!=typeof f.value)throw Error("debounce can only decorate functions");let g=f.value;f.value=(0,d.P)(g,a,b),Object.defineProperty(c,e,f)}}function f(a=0,b={}){return(c,e,f)=>{if(!f||"function"!=typeof f.value)throw Error("debounce can only decorate functions");let g=f.value;f.value=(0,d.D)(g,a,b),Object.defineProperty(c,e,f)}}},46263(a,b,c){function d(a,b=0,{start:c=!0,middle:d=!0,once:e=!1}={}){let f=0,g,h=!1;function i(...j){if(h)return;let k=Date.now()-f;f=Date.now(),c?(c=!1,a.apply(this,j),e&&i.cancel()):(d&&k<b||!d)&&(clearTimeout(g),g=setTimeout(()=>{f=Date.now(),a.apply(this,j),e&&i.cancel()},d?b-k:b))}return i.cancel=()=>{clearTimeout(g),h=!0},i}function e(a,b=0,{start:c=!1,middle:e=!1,once:f=!1}={}){return d(a,b,{start:c,middle:e,once:f})}c.d(b,{D:()=>e,P:()=>d})},47142(a,b,c){c.d(b,{CD:()=>k,Gs:()=>i,m7:()=>j});var d=-1/0,e=1/0;function f(a){return a.toLowerCase()===a}function g(a){return a.toUpperCase()===a}function h(a,b,c,e){for(var h=a.length,i=b.length,j=a.toLowerCase(),k=b.toLowerCase(),l=function(a){for(var b=a.length,c=Array(b),d="/",e=0;e<b;e++){var h=a[e];"/"===d?c[e]=.9:"-"===d||"_"===d||" "===d?c[e]=.8:"."===d?c[e]=.6:f(d)&&g(h)?c[e]=.7:c[e]=0,d=h}return c}(b,l),m=0;m<h;m++){c[m]=Array(i),e[m]=Array(i);for(var n=d,o=m===h-1?-0.005:-0.01,p=0;p<i;p++)if(j[m]===k[p]){var q=d;m?p&&(q=Math.max(e[m-1][p-1]+l[p],c[m-1][p-1]+1)):q=-0.005*p+l[p],c[m][p]=q,e[m][p]=n=Math.max(q,n+o)}else c[m][p]=d,e[m][p]=n+=o}}function i(a,b){var c=a.length,f=b.length;if(!c||!f)return d;if(c===f)return e;if(f>1024)return d;var g=Array(c),i=Array(c);return h(a,b,g,i),i[c-1][f-1]}function j(a,b){var c=a.length,e=b.length,f=Array(c);if(!c||!e)return f;if(c===e){for(var g=0;g<c;g++)f[g]=g;return f}if(e>1024)return f;var i=Array(c),j=Array(c);h(a,b,i,j);for(var k=!1,g=c-1,l=e-1;g>=0;g--)for(;l>=0;l--)if(i[g][l]!==d&&(k||i[g][l]===j[g][l])){k=g&&l&&j[g][l]===i[g-1][l-1]+1,f[g]=l--;break}return f}function k(a,b){a=a.toLowerCase(),b=b.toLowerCase();for(var c=a.length,d=0,e=0;d<c;d+=1)if(0===(e=b.indexOf(a[d],e)+1))return!1;return!0}},33241(a,b,c){c.d(b,{BX:()=>ProviderBase,Z4:()=>StaticItemsPage,ck:()=>Item});var d=c(47142),e=c(80425);class StaticItemsPage{constructor(a,b,c){this.providers=[],this.scopeType="static_items_page",this.title=a,this.scopeId=b,this.providers=[new StaticItemsProvider(c)]}}class StaticItemsProvider{constructor(a){this.hasCommands=!0,this.debounce=0;let b=a.length;this.items=a.map((a,c)=>(a.priority=b-c,a))}async fetch(a){let b=this.fuzzyFilter(this.items,a);return{results:b}}enabledFor(){return!0}clearCache(){}fuzzyFilter(a,b,c=0){if(b.isBlank())return a;let d=[];for(let e of a){let f=e.calculateScore(b.text);f>c&&d.push(e)}return d}}class Item{constructor(a){this.score=0,this.position="",this.title=a.title,this.priority=a.priority,this.group=a.group,this.subtitle=a.subtitle,this.matchFields=a.matchFields,this.typeahead=a.typeahead,this.hint=a.hint,this.icon=a.icon}get matchingFields(){return this.matchFields?this.matchFields:[this.title]}get key(){


  -1]&&d&&(d=!1,yield{type:"part",start:c,end:e+2,value:b.slice(2).trim()},b="",e+=2,c=e):(d=!0,b&&(yield{type:"string",start:c,end:e,value:b}),b="{{",c=e,e+=2),b+=a[e]||"";b&&(yield{type:"string",start:c,end:a.length,value:b})}c.d(b,{sV:()=>AttributeTemplatePart,GZ:()=>NodeTemplatePart,R:()=>TemplateInstance,AQ:()=>n,W_:()=>p,Al:()=>o,XK:()=>r});var e,f,g,h,i,j=function(a,b,c){if(!b.has(a))throw TypeError("attempted to set private field on non-instance");return b.set(a,c),c},k=function(a,b){if(!b.has(a))throw TypeError("attempted to get private field on non-instance");return b.get(a)};class AttributeTemplatePart{constructor(a,b){this.expression=b,e.set(this,void 0),f.set(this,""),j(this,e,a),k(this,e).updateParent("")}get attributeName(){return k(this,e).attr.name}get attributeNamespace(){return k(this,e).attr.namespaceURI}get value(){return k(this,f)}set value(a){j(this,f,a||""),k(this,e).updateParent(a)}get element(){return k(this,e).element}get booleanValue(){return k(this,e).booleanValue}set booleanValue(a){k(this,e).booleanValue=a}}e=new WeakMap,f=new WeakMap;class AttributeValueSetter{constructor(a,b){this.element=a,this.attr=b,this.partList=[]}get booleanValue(){return this.element.hasAttributeNS(this.attr.namespaceURI,this.attr.name)}set booleanValue(a){if(1!==this.partList.length)throw new DOMException("Operation not supported","NotSupportedError");this.partList[0].value=a?"":null}append(a){this.partList.push(a)}updateParent(a){if(1===this.partList.length&&null===a)this.element.removeAttributeNS(this.attr.namespaceURI,this.attr.name);else{let b=this.partList.map(a=>"string"==typeof a?a:a.value).join("");this.element.setAttributeNS(this.attr.namespaceURI,this.attr.name,b)}}}var l=function(a,b,c){if(!b.has(a))throw TypeError("attempted to set private field on non-instance");return b.set(a,c),c},m=function(a,b){if(!b.has(a))throw TypeError("attempted to get private field on non-instance");return b.get(a)};class NodeTemplatePart{constructor(a,b){this.expression=b,g.set(this,void 0),l(this,g,[a]),a.textContent=""}get value(){return m(this,g).map(a=>a.textContent).join("")}set value(a){this.replace(a)}get previousSibling(){return m(this,g)[0].previousSibling}get nextSibling(){return m(this,g)[m(this,g).length-1].nextSibling}replace(...a){let b=a.map(a=>"string"==typeof a?new Text(a):a);for(let c of(b.length||b.push(new Text("")),m(this,g)[0].before(...b),m(this,g)))c.remove();l(this,g,b)}}function n(a){return{createCallback(a,b,c){this.processCallback(a,b,c)},processCallback(b,c,d){var e;if("object"==typeof d&&d){for(let f of c)if(f.expression in d){let g=null!==(e=d[f.expression])&& void 0!==e?e:"";a(f,g)}}}}}function o(a,b){a.value=String(b)}function p(a,b){return"boolean"==typeof b&&a instanceof AttributeTemplatePart&&"boolean"==typeof a.element[a.attributeName]&&(a.booleanValue=b,!0)}g=new WeakMap;let q=n(o),r=n((a,b)=>{p(a,b)||o(a,b)});var s=function(a,b,c){if(!b.has(a))throw TypeError("attempted to set private field on non-instance");return b.set(a,c),c},t=function(a,b){if(!b.has(a))throw TypeError("attempted to get private field on non-instance");return b.get(a)};class TemplateInstance extends DocumentFragment{constructor(a,b,c=q){var e,f;super(),h.set(this,void 0),i.set(this,void 0),Object.getPrototypeOf(this!==TemplateInstance.prototype)&&Object.setPrototypeOf(this,TemplateInstance.prototype),this.appendChild(a.content.cloneNode(!0)),s(this,i,Array.from(function*(a){let b=a.ownerDocument.createTreeWalker(a,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,null,!1),c;for(;c=b.nextNode();)if(c instanceof Element&&c.hasAttributes())for(let e=0;e<c.attributes.length;e+=1){let f=c.attributes.item(e);if(f&&f.value.includes("{{")){let g=new AttributeValueSetter(c,f);for(let h of d(f.value))if("string"===h.type)g.append(h.value);else{let i=new AttributeTemplatePart(g,h.value);g.append(i),yield i}}}else if(c instanceof Text&&c.textContent&&c.textContent.includes("{{"))for(let j of d(c.textContent)){j.end<c.textContent.length&&c.splitText(j.end),"part"===j.type&&(yield new NodeTemplatePart(c,j.value));break}}(this))),s(this,h,c),null===(f=(e=t(this,h)).createCallback)|| void 0===f||f.call(e,this,t(this,i),b)}update(a){t(this,h).processCallback(this,t(this,i),a)}}h=new WeakMap,i=new WeakMap}}])
//# sourceMappingURL=vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_github_command-pale-51fe14-757cabbe96f7.js.map




self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      console.log("getting from cache real life ", event.request.url)
      return response || fetch(event.request)
    })
  )
})



