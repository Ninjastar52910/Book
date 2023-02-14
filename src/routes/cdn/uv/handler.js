(()=>{"use strict";const e=globalThis.Ultraviolet,t=globalThis.UVClient;function a(r,o={},n="/bare/"){if("__uv"in r&&r.__uv instanceof e)return!1;r.document&&r.window&&r.document.querySelectorAll("script[__uv-script]").forEach((e=>e.remove()));const i=!r.window,s="__uv",l="__uv$",c=new e(o);"function"==typeof o.construct&&o.construct(c,i?"worker":"window");const d=new t(r),{HTMLMediaElement:u,HTMLScriptElement:h,HTMLAudioElement:m,HTMLVideoElement:v,HTMLInputElement:p,HTMLEmbedElement:g,HTMLTrackElement:b,HTMLAnchorElement:f,HTMLIFrameElement:y,HTMLAreaElement:_,HTMLLinkElement:S,HTMLBaseElement:w,HTMLFormElement:k,HTMLImageElement:P,HTMLSourceElement:U}=r;d.nativeMethods.defineProperty(r,"__uv",{value:c,enumerable:!1}),c.meta.origin=location.origin,c.location=d.location.emulate((e=>"about:srcdoc"===e?new URL(e):(e.startsWith("blob:")&&(e=e.slice("blob:".length)),new URL(c.sourceUrl(e)))),(e=>c.rewriteUrl(e))),c.bareData=r.__uv$bareData,c.cookieStr=r.__uv$cookies||"",c.meta.url=c.location,c.domain=c.meta.url.host,c.blobUrls=new r.Map,c.referrer="",c.cookies=[],c.localStorageObj={},c.sessionStorageObj={};try{c.bare=new URL(n,r.location.href)}catch(e){c.bare=r.parent.__uv.bare}const M=new e.BareClient(c.bare,c.bareData);if("about:srcdoc"===c.location.href&&(c.meta=r.parent.__uv.meta),r.EventTarget&&(c.addEventListener=r.EventTarget.prototype.addEventListener,c.removeListener=r.EventTarget.prototype.removeListener,c.dispatchEvent=r.EventTarget.prototype.dispatchEvent),d.nativeMethods.defineProperty(d.storage.storeProto,"__uv$storageObj",{get(){return this===d.storage.sessionStorage?c.sessionStorageObj:this===d.storage.localStorage?c.localStorageObj:void 0},enumerable:!1}),r.localStorage){for(const e in r.localStorage)e.startsWith(l+c.location.origin+"@")&&(c.localStorageObj[e.slice((l+c.location.origin+"@").length)]=r.localStorage.getItem(e));c.lsWrap=d.storage.emulate(d.storage.localStorage,c.localStorageObj)}if(r.sessionStorage){for(const e in r.sessionStorage)e.startsWith(l+c.location.origin+"@")&&(c.sessionStorageObj[e.slice((l+c.location.origin+"@").length)]=r.sessionStorage.getItem(e));c.ssWrap=d.storage.emulate(d.storage.sessionStorage,c.sessionStorageObj)}let x=r.document?d.node.baseURI.get.call(r.document):r.location.href,E=c.sourceUrl(x);d.nativeMethods.defineProperty(c.meta,"base",{get:()=>r.document?(d.node.baseURI.get.call(r.document)!==x&&(x=d.node.baseURI.get.call(r.document),E=c.sourceUrl(x)),E):c.meta.url.href}),c.methods={setSource:"__uv$setSource",source:"__uv$source",location:"__uv$location",function:"__uv$function",string:"__uv$string",eval:"__uv$eval",parent:"__uv$parent",top:"__uv$top"},c.filterKeys=[s,c.methods.setSource,c.methods.source,c.methods.location,c.methods.function,c.methods.string,c.methods.eval,c.methods.parent,c.methods.top,"__uv$protocol","__uv$storageObj","__uv$url","__uv$modifiedStyle","__uv$config","__uv$dispatched","Ultraviolet","__uvHook"],d.on("wrap",((e,t)=>{d.nativeMethods.defineProperty(t,"name",d.nativeMethods.getOwnPropertyDescriptor(e,"name")),d.nativeMethods.defineProperty(t,"length",d.nativeMethods.getOwnPropertyDescriptor(e,"length")),d.nativeMethods.defineProperty(t,c.methods.string,{enumerable:!1,value:d.nativeMethods.fnToString.call(e)}),d.nativeMethods.defineProperty(t,c.methods.function,{enumerable:!1,value:e})})),d.fetch.on("request",(e=>{e.data.input=c.rewriteUrl(e.data.input)})),d.fetch.on("requestUrl",(e=>{e.data.value=c.sourceUrl(e.data.value)})),d.fetch.on("responseUrl",(e=>{e.data.value=c.sourceUrl(e.data.value)})),d.xhr.on("open",(e=>{e.data.input=c.rewriteUrl(e.data.input)})),d.xhr.on("responseUrl",(e=>{e.data.value=c.sourceUrl(e.data.value)})),d.workers.on("worker",(e=>{e.data.url=c.rewriteUrl(e.data.url)})),d.workers.on("addModule",(e=>{e.data.url=c.rewriteUrl(e.data.url)})),d.workers.on("importScripts",(e=>{for(const t in e.data.scripts)e.data.scripts[t]=c.rewriteUrl(e.data.scripts[t])})),d.workers.on("postMessage",(e=>{let t=e.data.origin;e.data.origin="*",e.data.message={__data:e.data.message,__origin:c.meta.url.origin,__to:t}})),d.navigator.on("sendBeacon",(e=>{e.data.url=c.rewriteUrl(e.data.url)})),d.document.on("getCookie",(e=>{e.data.value=c.cookieStr})),d.document.on("setCookie",(e=>{Promise.resolve(c.cookie.setCookies(e.data.value,c.db,c.meta)).then((()=>{c.cookie.db().then((e=>{c.cookie.getCookies(e).then((e=>{c.cookieStr=c.cookie.serialize(e,c.meta,!0)}))}))}));const t=c.cookie.setCookie(e.data.value)[0];t.path||(t.path="/"),t.domain||(t.domain=c.meta.url.hostname),c.cookie.validateCookie(t,c.meta,!0)&&(c.cookieStr.length&&(c.cookieStr+="; "),c.cookieStr+=`${t.name}=${t.value}`),e.respondWith(e.data.value)})),d.element.on("setInnerHTML",(e=>{switch(e.that.tagName){case"SCRIPT":e.data.value=c.js.rewrite(e.data.value);break;case"STYLE":e.data.value=c.rewriteCSS(e.data.value);break;default:e.data.value=c.rewriteHtml(e.data.value)}})),d.element.on("getInnerHTML",(e=>{if("SCRIPT"===e.that.tagName)e.data.value=c.js.source(e.data.value);else e.data.value=c.sourceHtml(e.data.value)})),d.element.on("setOuterHTML",(e=>{e.data.value=c.rewriteHtml(e.data.value,{document:"HTML"===e.that.tagName})})),d.element.on("getOuterHTML",(e=>{switch(e.that.tagName){case"HEAD":e.data.value=c.sourceHtml(e.data.value.replace(/<head(.*)>(.*)<\/head>/s,"<op-head$1>$2</op-head>")).replace(/<op-head(.*)>(.*)<\/op-head>/s,"<head$1>$2</head>");break;case"BODY":e.data.value=c.sourceHtml(e.data.value.replace(/<body(.*)>(.*)<\/body>/s,"<op-body$1>$2</op-body>")).replace(/<op-body(.*)>(.*)<\/op-body>/s,"<body$1>$2</body>");break;default:e.data.value=c.sourceHtml(e.data.value,{document:"HTML"===e.that.tagName})}})),d.document.on("write",(e=>{if(!e.data.html.length)return!1;e.data.html=[c.rewriteHtml(e.data.html.join(""))]})),d.document.on("writeln",(e=>{if(!e.data.html.length)return!1;e.data.html=[c.rewriteHtml(e.data.html.join(""))]})),d.element.on("insertAdjacentHTML",(e=>{e.data.html=c.rewriteHtml(e.data.html)})),d.eventSource.on("construct",(e=>{e.data.url=c.rewriteUrl(e.data.url)})),d.eventSource.on("url",(e=>{e.data.url=c.rewriteUrl(e.data.url)})),d.history.on("replaceState",(e=>{e.data.url&&(e.data.url=c.rewriteUrl(e.data.url,"__uv"in e.that?e.that.__uv.meta:c.meta))})),d.history.on("pushState",(e=>{e.data.url&&(e.data.url=c.rewriteUrl(e.data.url,"__uv"in e.that?e.that.__uv.meta:c.meta))})),d.element.on("getAttribute",(e=>{d.element.hasAttribute.call(e.that,c.attributePrefix+"-attr-"+e.data.name)&&e.respondWith(e.target.call(e.that,c.attributePrefix+"-attr-"+e.data.name))})),d.message.on("postMessage",(e=>{let t=e.data.origin,a=c.call;e.that&&(a=e.that.__uv$source.call),e.data.origin="*",e.data.message={__data:e.data.message,__origin:(e.that||e.target).__uv$source.location.origin,__to:t},e.respondWith(a(e.target,i?[e.data.message,e.data.transfer]:[e.data.message,e.data.origin,e.data.transfer],e.that))})),d.message.on("data",(e=>{const{value:t}=e.data;"object"==typeof t&&"__data"in t&&"__origin"in t&&e.respondWith(t.__data)})),d.message.on("origin",(e=>{const t=d.message.messageData.get.call(e.that);"object"==typeof t&&t.__data&&t.__origin&&e.respondWith(t.__origin)})),d.overrideDescriptor(r,"origin",{get:()=>c.location.origin}),d.node.on("baseURI",(e=>{e.data.value.startsWith(r.location.origin)&&(e.data.value=c.sourceUrl(e.data.value))})),d.element.on("setAttribute",(e=>{if(e.that instanceof u&&"src"===e.data.name&&e.data.value.startsWith("blob:"))return e.target.call(e.that,c.attributePrefix+"-attr-"+e.data.name,e.data.value),void(e.data.value=c.blobUrls.get(e.data.value));c.attrs.isUrl(e.data.name)&&(e.target.call(e.that,c.attributePrefix+"-attr-"+e.data.name,e.data.value),e.data.value=c.rewriteUrl(e.data.value)),c.attrs.isStyle(e.data.name)&&(e.target.call(e.that,c.attributePrefix+"-attr-"+e.data.name,e.data.value),e.data.value=c.rewriteCSS(e.data.value,{context:"declarationList"})),c.attrs.isHtml(e.data.name)&&(e.target.call(e.that,c.attributePrefix+"-attr-"+e.data.name,e.data.value),e.data.value=c.rewriteHtml(e.data.value,{...c.meta,document:!0,injectHead:c.createHtmlInject(c.handlerScript,c.bundleScript,c.clientScript,c.configScript,c.bareData,c.cookieStr,r.location.href)})),c.attrs.isSrcset(e.data.name)&&(e.target.call(e.that,c.attributePrefix+"-attr-"+e.data.name,e.data.value),e.data.value=c.html.wrapSrcset(e.data.value.toString())),c.attrs.isForbidden(e.data.name)&&(e.data.name=c.attributePrefix+"-attr-"+e.data.name)})),d.element.on("audio",(e=>{e.data.url=c.rewriteUrl(e.data.url)})),d.element.hookProperty([f,_,S,w],"href",{get:(e,t)=>c.sourceUrl(e.call(t)),set:(e,t,[a])=>{d.element.setAttribute.call(t,c.attributePrefix+"-attr-href",a),e.call(t,c.rewriteUrl(a))}}),d.element.hookProperty([h,m,v,u,P,p,g,y,b,U],"src",{get:(e,t)=>c.sourceUrl(e.call(t)),set:(e,t,[a])=>{if(new String(a).toString().trim().startsWith("blob:")&&t instanceof u)return d.element.setAttribute.call(t,c.attributePrefix+"-attr-src",a),e.call(t,c.blobUrls.get(a)||a);d.element.setAttribute.call(t,c.attributePrefix+"-attr-src",a),e.call(t,c.rewriteUrl(a))}}),d.element.hookProperty([k],"action",{get:(e,t)=>c.sourceUrl(e.call(t)),set:(e,t,[a])=>{d.element.setAttribute.call(t,c.attributePrefix+"-attr-action",a),e.call(t,c.rewriteUrl(a))}}),d.element.hookProperty([P],"srcset",{get:(e,t)=>d.element.getAttribute.call(t,c.attributePrefix+"-attr-srcset")||e.call(t),set:(e,t,[a])=>{d.element.setAttribute.call(t,c.attributePrefix+"-attr-srcset",a),e.call(t,c.html.wrapSrcset(a.toString()))}}),d.element.hookProperty(h,"integrity",{get:(e,t)=>d.element.getAttribute.call(t,c.attributePrefix+"-attr-integrity"),set:(e,t,[a])=>{d.element.setAttribute.call(t,c.attributePrefix+"-attr-integrity",a)}}),d.element.hookProperty(y,"sandbox",{get:(e,t)=>d.element.getAttribute.call(t,c.attributePrefix+"-attr-sandbox")||e.call(t),set:(e,t,[a])=>{d.element.setAttribute.call(t,c.attributePrefix+"-attr-sandbox",a)}});const $=y&&Object.getOwnPropertyDescriptor(y.prototype,"contentWindow").get;function T(e){const t=$.call(e);if(!t.__uv)try{t.__uv$bareData=c.bareData,t.__uv$cookies=c.cookieStr,a(t,o,n)}catch(e){console.error("catastrophic failure"),console.error(e)}}function j(e,t){const a=`on${t}`,r=new WeakMap;Reflect.defineProperty(e,a,{enumerable:!0,configurable:!0,get(){return r.has(this)?r.get(this):null},set(e){"function"==typeof e&&(r.has(this)&&this.removeEventListener(t,r.get(this)),r.set(this,e),this.addEventListener(t,e))}})}d.element.hookProperty(y,"contentWindow",{get:(e,t)=>(T(t),e.call(t))}),d.element.hookProperty(y,"contentDocument",{get:(e,t)=>(T(t),e.call(t))}),d.element.hookProperty(y,"srcdoc",{get:(e,t)=>d.element.getAttribute.call(t,c.attributePrefix+"-attr-srcdoc")||e.call(t),set:(e,t,[a])=>{e.call(t,c.rewriteHtml(a,{document:!0,injectHead:c.createHtmlInject(c.handlerScript,c.bundleScript,c.clientScript,c.configScript,c.bareData,c.cookieStr,r.location.href)}))}}),d.node.on("getTextContent",(e=>{"SCRIPT"===e.that.tagName&&(e.data.value=c.js.source(e.data.value))})),d.node.on("setTextContent",(e=>{"SCRIPT"===e.that.tagName&&(e.data.value=c.js.rewrite(e.data.value))})),"serviceWorker"in r.navigator&&delete r.Navigator.prototype.serviceWorker,d.document.on("getDomain",(e=>{e.data.value=c.domain})),d.document.on("setDomain",(e=>{if(!e.data.value.toString().endsWith(c.meta.url.hostname.split(".").slice(-2).join(".")))return e.respondWith("");e.respondWith(c.domain=e.data.value)})),d.document.on("url",(e=>{e.data.value=c.location.href})),d.document.on("documentURI",(e=>{e.data.value=c.location.href})),d.document.on("referrer",(e=>{e.data.value=c.referrer||c.sourceUrl(e.data.value)})),d.document.on("parseFromString",(e=>{if("text/html"!==e.data.type)return!1;e.data.string=c.rewriteHtml(e.data.string,{...c.meta,document:!0})})),d.attribute.on("getValue",(e=>{d.element.hasAttribute.call(e.that.ownerElement,c.attributePrefix+"-attr-"+e.data.name)&&(e.data.value=d.element.getAttribute.call(e.that.ownerElement,c.attributePrefix+"-attr-"+e.data.name))})),d.attribute.on("setValue",(e=>{c.attrs.isUrl(e.data.name)&&(d.element.setAttribute.call(e.that.ownerElement,c.attributePrefix+"-attr-"+e.data.name,e.data.value),e.data.value=c.rewriteUrl(e.data.value)),c.attrs.isStyle(e.data.name)&&(d.element.setAttribute.call(e.that.ownerElement,c.attributePrefix+"-attr-"+e.data.name,e.data.value),e.data.value=c.rewriteCSS(e.data.value,{context:"declarationList"})),c.attrs.isHtml(e.data.name)&&(d.element.setAttribute.call(e.that.ownerElement,c.attributePrefix+"-attr-"+e.data.name,e.data.value),e.data.value=c.rewriteHtml(e.data.value,{...c.meta,document:!0,injectHead:c.createHtmlInject(c.handlerScript,c.bundleScript,c.clientScript,c.configScript,c.bareData,c.cookieStr,r.location.href)})),c.attrs.isSrcset(e.data.name)&&(d.element.setAttribute.call(e.that.ownerElement,c.attributePrefix+"-attr-"+e.data.name,e.data.value),e.data.value=c.html.wrapSrcset(e.data.value.toString()))})),d.url.on("createObjectURL",(e=>{let t=e.target.call(e.that,e.data.object);if(t.startsWith("blob:"+location.origin)){let a="blob:"+("about:blank"!==c.meta.url.href?c.meta.url.origin:r.parent.__uv.meta.url.origin)+t.slice("blob:".length+location.origin.length);c.blobUrls.set(a,t),e.respondWith(a)}else e.respondWith(t)})),d.url.on("revokeObjectURL",(e=>{if(c.blobUrls.has(e.data.url)){const t=e.data.url;e.data.url=c.blobUrls.get(e.data.url),c.blobUrls.delete(t)}})),d.storage.on("get",(e=>{e.data.name=l+c.meta.url.origin+"@"+e.data.name})),d.storage.on("set",(e=>{e.that.__uv$storageObj&&(e.that.__uv$storageObj[e.data.name]=e.data.value),e.data.name=l+c.meta.url.origin+"@"+e.data.name})),d.storage.on("delete",(e=>{e.that.__uv$storageObj&&delete e.that.__uv$storageObj[e.data.name],e.data.name=l+c.meta.url.origin+"@"+e.data.name})),d.storage.on("getItem",(e=>{e.data.name=l+c.meta.url.origin+"@"+e.data.name})),d.storage.on("setItem",(e=>{e.that.__uv$storageObj&&(e.that.__uv$storageObj[e.data.name]=e.data.value),e.data.name=l+c.meta.url.origin+"@"+e.data.name})),d.storage.on("removeItem",(e=>{e.that.__uv$storageObj&&delete e.that.__uv$storageObj[e.data.name],e.data.name=l+c.meta.url.origin+"@"+e.data.name})),d.storage.on("clear",(e=>{if(e.that.__uv$storageObj)for(const t of d.nativeMethods.keys.call(null,e.that.__uv$storageObj))delete e.that.__uv$storageObj[t],d.storage.removeItem.call(e.that,l+c.meta.url.origin+"@"+t),e.respondWith()})),d.storage.on("length",(e=>{e.that.__uv$storageObj&&e.respondWith(d.nativeMethods.keys.call(null,e.that.__uv$storageObj).length)})),d.storage.on("key",(e=>{e.that.__uv$storageObj&&e.respondWith(d.nativeMethods.keys.call(null,e.that.__uv$storageObj)[e.data.index]||null)}));const O=["ws:","wss:"];class L extends EventTarget{#e;#t;#a="blob";#r="";#o="";#n="";async#i(e,t){const a={};Reflect.setPrototypeOf(a,null),a.Origin=c.meta.url.origin,a["User-Agent"]=navigator.userAgent,""!==c.cookieStr&&(a.Cookie=c.cookieStr.toString()),this.#e=await M.createWebSocket(e,a,t),this.#e.binaryType=this.#a,this.#e.addEventListener("message",(e=>{this.dispatchEvent(new MessageEvent("message",e))})),this.#e.addEventListener("open",(async e=>{this.dispatchEvent(new Event("open",e))})),this.#e.addEventListener("error",(e=>{this.dispatchEvent(new ErrorEvent("error",e))})),this.#e.addEventListener("close",(e=>{this.dispatchEvent(new Event("close",e))}));const r=await this.#e.meta;r.headers.has("sec-websocket-protocol")&&(this.#r=r.headers.get("sec-websocket-protocol")),r.headers.has("sec-websocket-extensions")&&(this.#o=r.headers.get("sec-websocket-extensions"));let o=r.rawHeaders["set-cookie"]||[];Array.isArray(o)||(o=[]);for(const e of o)document.cookie=e}get url(){return this.#n}constructor(...e){if(super(),!e.length)throw new DOMException("Failed to construct 'WebSocket': 1 argument required, but only 0 present.");const[t,a]=e;let r;try{r=new URL(t)}catch(e){throw new DOMException(`Faiiled to construct 'WebSocket': The URL '${t}' is invalid.`)}if(!O.includes(r.protocol))throw new DOMException(`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${r.protocol}' is not allowed.`);this.#t=this.#i(r,a)}get protocol(){return this.#r}get extensions(){return this.#o}get readyState(){return this.#e?this.#e.readyState:L.CONNECTING}get binaryType(){return this.#a}set binaryType(e){this.#a=e,this.#e&&(this.#e.binaryType=e)}send(e){if(!this.#e)throw new DOMException("Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.");this.#e.send(e)}close(e,t){if(void 0!==e&&("number"!=typeof e&&(e=0),1e3!==e&&(e<3e3||e>4999)))throw new DOMException(`Failed to execute 'close' on 'WebSocket': The code must be either 1000, or between 3000 and 4999. ${e} is neither.`);this.#t.then((()=>this.#e.close(e,t)))}}j(L.prototype,"close"),j(L.prototype,"open"),j(L.prototype,"message"),j(L.prototype,"error");for(const e of["url","protocol","extensions","readyState","binaryType"]){const t=Object.getOwnPropertyDescriptor(r.WebSocket.prototype,e),a=Object.getOwnPropertyDescriptor(L.prototype,e);a?.get&&t?.get&&d.emit("wrap",a.get,t.get),a?.set&&t?.set&&d.emit("wrap",a.get,t.get)}if(d.emit("wrap",r.WebSocket.prototype.send,L.prototype.send),d.emit("wrap",r.WebSocket.prototype.close,L.prototype.close),d.override(r,"WebSocket",((e,t,a)=>new L(...a)),!0),L.prototype.constructor=r.WebSocket,d.function.on("function",(e=>{e.data.script=c.rewriteJS(e.data.script)})),d.function.on("toString",(e=>{c.methods.string in e.that&&e.respondWith(e.that[c.methods.string])})),d.object.on("getOwnPropertyNames",(e=>{e.data.names=e.data.names.filter((e=>!c.filterKeys.includes(e)))})),d.object.on("getOwnPropertyDescriptors",(e=>{for(const t of c.filterKeys)delete e.data.descriptors[t]})),d.style.on("setProperty",(e=>{d.style.dashedUrlProps.includes(e.data.property)&&(e.data.value=c.rewriteCSS(e.data.value,{context:"value",...c.meta}))})),d.style.on("getPropertyValue",(e=>{d.style.dashedUrlProps.includes(e.data.property)&&e.respondWith(c.sourceCSS(e.target.call(e.that,e.data.property),{context:"value",...c.meta}))})),"CSS2Properties"in r)for(const e of d.style.urlProps)d.overrideDescriptor(r.CSS2Properties.prototype,e,{get:(e,t)=>c.sourceCSS(e.call(t),{context:"value",...c.meta}),set:(e,t,a)=>{e.call(t,c.rewriteCSS(a,{context:"value",...c.meta}))}});else"HTMLElement"in r&&d.overrideDescriptor(r.HTMLElement.prototype,"style",{get:(e,t)=>{const a=e.call(t);if(!a.__uv$modifiedStyle)for(const e of d.style.urlProps)d.nativeMethods.defineProperty(a,e,{enumerable:!0,configurable:!0,get(){const t=d.style.getPropertyValue.call(this,e)||"";return c.sourceCSS(t,{context:"value",...c.meta})},set(t){d.style.setProperty.call(this,d.style.propToDashed[e]||e,c.rewriteCSS(t,{context:"value",...c.meta}))}}),d.nativeMethods.defineProperty(a,"__uv$modifiedStyle",{enumerable:!1,value:!0});return a}});d.style.on("setCssText",(e=>{e.data.value=c.rewriteCSS(e.data.value,{context:"declarationList",...c.meta})})),d.style.on("getCssText",(e=>{e.data.value=c.sourceCSS(e.data.value,{context:"declarationList",...c.meta})})),c.addEventListener.call(r,"hashchange",(e=>{if(e.__uv$dispatched)return!1;e.stopImmediatePropagation();const t=r.location.hash;d.history.replaceState.call(r.history,"","",e.oldURL),c.location.hash=t})),d.location.on("hashchange",((e,t,a)=>{if(a.HashChangeEvent&&d.history.replaceState){d.history.replaceState.call(r.history,"","",c.rewriteUrl(t));const o=new a.HashChangeEvent("hashchange",{newURL:t,oldURL:e});d.nativeMethods.defineProperty(o,"__uv$dispatched",{value:!0,enumerable:!1}),c.dispatchEvent.call(r,o)}})),d.fetch.overrideRequest(),d.fetch.overrideUrl(),d.xhr.overrideOpen(),d.xhr.overrideResponseUrl(),d.element.overrideHtml(),d.element.overrideAttribute(),d.element.overrideInsertAdjacentHTML(),d.element.overrideAudio(),d.node.overrideBaseURI(),d.node.overrideTextContent(),d.attribute.overrideNameValue(),d.document.overrideDomain(),d.document.overrideURL(),d.document.overrideDocumentURI(),d.document.overrideWrite(),d.document.overrideReferrer(),d.document.overrideParseFromString(),d.storage.overrideMethods(),d.storage.overrideLength(),d.object.overrideGetPropertyNames(),d.object.overrideGetOwnPropertyDescriptors(),d.history.overridePushState(),d.history.overrideReplaceState(),d.eventSource.overrideConstruct(),d.eventSource.overrideUrl(),d.url.overrideObjectURL(),d.document.overrideCookie(),d.message.overridePostMessage(),d.message.overrideMessageOrigin(),d.message.overrideMessageData(),d.workers.overrideWorker(),d.workers.overrideAddModule(),d.workers.overrideImportScripts(),d.workers.overridePostMessage(),d.style.overrideSetGetProperty(),d.style.overrideCssText(),d.navigator.overrideSendBeacon(),d.function.overrideFunction(),d.function.overrideToString(),d.location.overrideWorkerLocation((e=>new URL(c.sourceUrl(e)))),d.overrideDescriptor(r,"localStorage",{get:(e,t)=>(t||r).__uv.lsWrap}),d.overrideDescriptor(r,"sessionStorage",{get:(e,t)=>(t||r).__uv.ssWrap}),d.override(r,"open",((e,t,a)=>{if(!a.length)return e.apply(t,a);let[r]=a;return r=c.rewriteUrl(r),e.call(t,r)})),c.$wrap=function(e){return"location"===e?c.methods.location:"eval"===e?c.methods.eval:e},c.$get=function(e){return e===r.location?c.location:e===r.eval?c.eval:e===r.parent?r.__uv$parent:e===r.top?r.__uv$top:e},c.eval=d.wrap(r,"eval",((e,t,a)=>{if(!a.length||"string"!=typeof a[0])return e.apply(t,a);let[r]=a;return r=c.rewriteJS(r),e.call(t,r)})),c.call=function(e,t,a){return a?e.apply(a,t):e(...t)},c.call$=function(e,t,a=[]){return e[t].apply(e,a)},d.nativeMethods.defineProperty(r.Object.prototype,s,{get:()=>c,enumerable:!1}),d.nativeMethods.defineProperty(r.Object.prototype,c.methods.setSource,{value:function(e){return d.nativeMethods.isExtensible(this)?(d.nativeMethods.defineProperty(this,c.methods.source,{value:e,writable:!0,enumerable:!1}),this):this},enumerable:!1}),d.nativeMethods.defineProperty(r.Object.prototype,c.methods.source,{value:c,writable:!0,enumerable:!1}),d.nativeMethods.defineProperty(r.Object.prototype,c.methods.location,{configurable:!0,get(){return this===r.document||this===r?c.location:this.location},set(e){this===r.document||this===r?c.location.href=e:this.location=e}}),d.nativeMethods.defineProperty(r.Object.prototype,c.methods.parent,{configurable:!0,get(){const e=this.parent;if(this===r)try{return"__uv"in e?e:this}catch(e){return this}return e},set(e){this.parent=e}}),d.nativeMethods.defineProperty(r.Object.prototype,c.methods.top,{configurable:!0,get(){const e=this.top;if(this===r){if(e===this.parent)return this[c.methods.parent];try{if("__uv"in e)return e;{let t=this;for(;t.parent!==e;)t=t.parent;return"__uv"in t?t:this}}catch(e){return this}}return e},set(e){this.top=e}}),d.nativeMethods.defineProperty(r.Object.prototype,c.methods.eval,{configurable:!0,get(){return this===r?c.eval:this.eval},set(e){this.eval=e}})}self.__uv||a(self,self.__uv$config,self.__uv$config.bare),self.__uvHook=a})();
//# sourceMappingURL=handler.js.map
