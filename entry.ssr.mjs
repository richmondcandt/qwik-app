import{q as d,s as oe,t as re,F as C,v as ae,c as Z,i as X,w as ce,l as le,a as h,_,d as me,x as k,j as de,Q as ue,R as pe,y as fe}from"./assets/index.qwik-f88f88df.mjs";import"zod";/**
 * @license
 * @builder.io/qwik/server 1.1.4
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var _e=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function be(e,n){const t=n==null?void 0:n.mapper,i=e.symbolMapper?e.symbolMapper:s=>{var r;if(t){const a=z(s),l=t[a];if(!l){if((r=globalThis.__qwik_reg_symbols)==null?void 0:r.has(a))return[s,"_"];console.error("Cannot resolve symbol",s,"in",t)}return l}};return{isServer:!0,async importSymbol(s,r,a){var x;const l=z(a),b=(x=globalThis.__qwik_reg_symbols)==null?void 0:x.get(l);if(b)return b;let m=String(r);m.endsWith(".js")||(m+=".js");const g=_e(m);if(!(a in g))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${m}'.`);return g[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:s=>new Promise(r=>{setTimeout(()=>{r(s())})}),chunkForSymbol(s){return i(s,t)}}}async function ye(e,n){const t=be(e,n);ae(t)}var z=e=>{const n=e.lastIndexOf("_");return n>-1?e.slice(n+1):e};function N(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function W(e){let n=e.base;return typeof n=="string"?(n.endsWith("/")||(n+="/"),n):"/build/"}var qe='((e,t)=>{const n="__q_context__",o=window,i=new Set,s=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{s("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,i,s=i.type)=>{const a="on"+o+":"+s;t.hasAttribute("preventdefault:"+s)&&i.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,i],(()=>t.isConnected))(i,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),s=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,s),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(r.href.split("#")[0]);l(o);const u=(await b)[c],p=e[n];if(t.isConnected)try{e[n]=[t,i,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await u(i,t)}finally{e[n]=p}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),u=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},p=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),i.has("qvisible"))){const e=s("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),v=t=>{for(const n of t)i.has(n)||(q(e,n,u,!0),q(o,n,p),i.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);',he=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,ge='((e,t)=>{const n="__q_context__",o=window,i=new Set,s=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{s("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,i,s=i.type)=>{const a="on"+o+":"+s;t.hasAttribute("preventdefault:"+s)&&i.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,i],(()=>t.isConnected))(i,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),s=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,s),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(r.href.split("#")[0]);l(o);const u=(await b)[c],p=e[n];if(t.isConnected)try{e[n]=[t,i,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await u(i,t)}finally{e[n]=p}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),u=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},p=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),i.has("qvisible"))){const e=s("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o}),v=t=>{for(const n of t)i.has(n)||(q(e,n,u,!0),q(o,n,p),i.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);',ve=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function xe(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?ve:ge).replace("window.qEvents",JSON.stringify(e.events)):e.debug?he:qe}function we(e,n,t){if(!t)return[];const i=n.prefetchStrategy,o=W(n);if(i!==null){if(!i||!i.symbolsToPrefetch||i.symbolsToPrefetch==="auto")return je(e,t,o);if(typeof i.symbolsToPrefetch=="function")try{return i.symbolsToPrefetch({manifest:t.manifest})}catch(s){console.error("getPrefetchUrls, symbolsToPrefetch()",s)}}return[]}function je(e,n,t){const i=[],o=e==null?void 0:e.qrls,{mapper:s,manifest:r}=n,a=new Set;if(Array.isArray(o))for(const l of o){const b=l.getHash(),m=s[b];m&&G(r,a,i,t,m[1])}return i}function G(e,n,t,i,o){const s=i+o;if(!n.has(s)){n.add(s);const r=e.bundles[o];if(r){const a={url:s,imports:[]};if(t.push(a),Array.isArray(r.imports))for(const l of r.imports)G(e,n,a.imports,i,l)}}}function ke(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function E(){let o=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return o+="w.postMessage(u.map(u=>new URL(u,origin)+''));",o+="w.onmessage=()=>{w.terminate()};",o}function Ne(e){const n={bundles:w(e).map(t=>t.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(n)}}))`}function w(e){const n=[],t=i=>{if(Array.isArray(i))for(const o of i)n.includes(o.url)||(n.push(o.url),t(o.imports))};return t(e),n}function ze(e,n,t){const i=Ie(e==null?void 0:e.implementation),o=[];return i.prefetchEvent==="always"&&Ee(o,n,t),i.linkInsert==="html-append"&&Ce(o,n,i),i.linkInsert==="js-append"?Se(o,n,i,t):i.workerFetchInsert==="always"&&Ae(o,n,t),o.length>0?d(C,{children:o}):null}function Ee(e,n,t){e.push(d("script",{type:"module",dangerouslySetInnerHTML:Ne(n),nonce:t}))}function Ce(e,n,t){const i=w(n),o=t.linkRel||"prefetch";for(const s of i){const r={};r.href=s,r.rel=o,(o==="prefetch"||o==="preload")&&s.endsWith(".js")&&(r.as="script"),e.push(d("link",r,void 0))}}function Se(e,n,t,i){const o=t.linkRel||"prefetch";let s="";t.workerFetchInsert==="no-link-support"&&(s+="let supportsLinkRel = true;"),s+=`const u=${JSON.stringify(w(n))};`,s+="u.map((u,i)=>{",s+="const l=document.createElement('link');",s+='l.setAttribute("href",u);',s+=`l.setAttribute("rel","${o}");`,t.workerFetchInsert==="no-link-support"&&(s+="if(i===0){",s+="try{",s+=`supportsLinkRel=l.relList.supports("${o}");`,s+="}catch(e){}",s+="}"),s+="document.body.appendChild(l);",s+="});",t.workerFetchInsert==="no-link-support"&&(s+="if(!supportsLinkRel){",s+=E(),s+="}"),t.workerFetchInsert==="always"&&(s+=E()),e.push(d("script",{type:"module",dangerouslySetInnerHTML:s,nonce:i}))}function Ae(e,n,t){let i=`const u=${JSON.stringify(w(n))};`;i+=E(),e.push(d("script",{type:"module",dangerouslySetInnerHTML:i,nonce:t}))}function Ie(e){return e&&typeof e=="object"?e:Fe}var Fe={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Le="<!DOCTYPE html>";async function Re(e,n){var P;n=Oe(n);let t=n.stream,i=0,o=0,s=0,r=0;const a=((P=n.streaming)==null?void 0:P.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},l=n.containerTagName??"html",b=n.containerAttributes??{};let m="";const g=t,x=N();function S(){m&&(g.write(m),m="",i=0,s++,s===1&&(r=x()))}function A(c){i+=c.length,o+=c.length,m+=c}switch(a.strategy){case"disabled":t={write:A};break;case"direct":t=g;break;case"auto":let c=0,y=!1;const T=a.maximunChunk??0,j=a.maximunInitialChunk??0;t={write(q){q==="<!--qkssr-f-->"?y||(y=!0):q==="<!--qkssr-pu-->"?c++:q==="<!--qkssr-po-->"?c--:A(q),c===0&&(y||i>=(s===0?j:T))&&(y=!1,S())}};break}l==="html"?t.write(Le):(t.write("<!--cq-->"),n.qwikLoader?(n.qwikLoader.include===void 0&&(n.qwikLoader.include="never"),n.qwikLoader.position===void 0&&(n.qwikLoader.position="bottom")):n.qwikLoader={include:"never"}),n.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build.");const ee=W(n),f=Pe(n.manifest);await ye(n,f);let p;const I=f==null?void 0:f.manifest.injections,ne=I?I.map(c=>d(c.tag,c.attributes??{})):void 0,te=N(),F=[];let L=0,R=0;await oe(e,{stream:t,containerTagName:l,containerAttributes:b,serverData:n.serverData,base:ee,beforeContent:ne,beforeClose:async(c,y,T,j)=>{var Q,U,Y,J,M,H,B;L=te();const q=N();p=await re(c,y,void 0,j);const K=JSON.stringify(p.state,void 0,void 0),v=[d("script",{type:"qwik/json",dangerouslySetInnerHTML:Te(K),nonce:(Q=n.serverData)==null?void 0:Q.nonce})];if(p.funcs.length>0&&v.push(d("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:$e(p.funcs),nonce:(U=n.serverData)==null?void 0:U.nonce})),n.prefetchStrategy!==null){const u=we(p,n,f);if(u.length>0){const V=ze(n.prefetchStrategy,u,(Y=n.serverData)==null?void 0:Y.nonce);V&&v.push(V)}}const ie=!p||p.mode!=="static",O=((J=n.qwikLoader)==null?void 0:J.include)??"auto",$=O==="always"||O==="auto"&&ie;if($){const u=xe({events:(M=n.qwikLoader)==null?void 0:M.events,debug:n.debug});v.push(d("script",{id:"qwikloader",dangerouslySetInnerHTML:u,nonce:(H=n.serverData)==null?void 0:H.nonce}))}const D=Array.from(y.$events$,u=>JSON.stringify(u));if(D.length>0){let u=`window.qwikevents.push(${D.join(", ")})`;$||(u=`window.qwikevents||=[];${u}`),v.push(d("script",{dangerouslySetInnerHTML:u,nonce:(B=n.serverData)==null?void 0:B.nonce}))}return Ke(F,c),R=q(),d(C,{children:v})}}),l!=="html"&&t.write("<!--/cq-->"),S();const se=p.resources.some(c=>c._cache!==1/0);return{prefetchResources:void 0,snapshotResult:p,flushes:s,manifest:f==null?void 0:f.manifest,size:o,isStatic:!se,timing:{render:L,snapshot:R,firstFlush:r},_symbols:F}}function Pe(e){if(e){if("mapper"in e)return e;if(e=ke(e),e){const n={};return Object.entries(e.mapping).forEach(([t,i])=>{n[z(t)]=[t,i]}),{mapper:n,manifest:e}}}}var Te=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function Ke(e,n){var t;for(const i of n){const o=(t=i.$componentQrl$)==null?void 0:t.getSymbol();o&&!e.includes(o)&&e.push(o)}}function Oe(e){const n={...e};return e&&typeof e.base=="function"&&(n.base=e.base(n)),n}function $e(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}const De={symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag"},s_LQPhZ0qOjrk:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_useVisibleTask",canonicalFilename:"s_lqphz0qojrk",hash:"LQPhZ0qOjrk",ctxKind:"function",ctxName:"useVisibleTask$",captures:!0,parent:"s_PxZ05oEiFy8"},s_3sccYCDd1Z0:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_3sccycdd1z0",hash:"3sccYCDd1Z0",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_5Go3iiHXUB4:{origin:"components/starter/counter/counter.tsx",displayName:"counter_component",canonicalFilename:"s_5go3iihxub4",hash:"5Go3iiHXUB4",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_7gzriUtQs98:{origin:"components/starter/gauge/index.tsx",displayName:"gauge_component",canonicalFilename:"s_7gzriutqs98",hash:"7gzriUtQs98",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_J4V2qsF7Yxo:{origin:"routes/demo/todolist/index.tsx",displayName:"todolist_component",canonicalFilename:"s_j4v2qsf7yxo",hash:"J4V2qsF7Yxo",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_PxZ05oEiFy8:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component",canonicalFilename:"s_pxz05oeify8",hash:"PxZ05oEiFy8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_VkLNXphUh5s:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vklnxphuh5s",hash:"VkLNXphUh5s",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_e0ssiDXoeAM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_fle1EaVOup8:{origin:"components/starter/hero/hero.tsx",displayName:"hero_component",canonicalFilename:"s_fle1eavoup8",hash:"fle1EaVOup8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_foRSjkQluCc:{origin:"components/starter/infobox/infobox.tsx",displayName:"infobox_component",canonicalFilename:"s_forsjkqlucc",hash:"foRSjkQluCc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_kJCtKbc9zbk:{origin:"components/starter/next-steps/next-steps.tsx",displayName:"next_steps_component",canonicalFilename:"s_kjctkbc9zbk",hash:"kJCtKbc9zbk",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_mBt9fIl89mc:{origin:"components/starter/header/header.tsx",displayName:"header_component",canonicalFilename:"s_mbt9fil89mc",hash:"mBt9fIl89mc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_u0bwM0i5dA8:{origin:"components/starter/footer/footer.tsx",displayName:"footer_component",canonicalFilename:"s_u0bwm0i5da8",hash:"u0bwM0i5dA8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_xYL1qOwPyDI:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_xyl1qowpydi",hash:"xYL1qOwPyDI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_zrbrqoaqXSY:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_zrbrqoaqxsy",hash:"zrbrqoaqXSY",ctxKind:"function",ctxName:"component$",captures:!1,parent:null},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag"},s_HU55RV7VfPc:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_useStylesScoped",canonicalFilename:"s_hu55rv7vfpc",hash:"HU55RV7VfPc",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_PxZ05oEiFy8"},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null},s_wOIPfiQ04l4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI"},s_D04jAYuCnhM:{origin:"components/starter/counter/counter.tsx",displayName:"counter_component_div_button_onClick",canonicalFilename:"s_d04jayucnhm",hash:"D04jAYuCnhM",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_5Go3iiHXUB4"},s_JKHgMZ4xLZQ:{origin:"routes/layout.tsx",displayName:"layout_component_useStyles",canonicalFilename:"s_jkhgmz4xlzq",hash:"JKHgMZ4xLZQ",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_VkLNXphUh5s"},s_JtGc0nS5Nuo:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_div_input_onInput",canonicalFilename:"s_jtgc0ns5nuo",hash:"JtGc0nS5Nuo",ctxKind:"eventHandler",ctxName:"onInput$",captures:!0,parent:"s_PxZ05oEiFy8"},s_LkCVrojX09Y:{origin:"components/starter/counter/counter.tsx",displayName:"counter_component_div_button_onClick_1",canonicalFilename:"s_lkcvrojx09y",hash:"LkCVrojX09Y",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_5Go3iiHXUB4"},s_NYEDprtA0Lw:{origin:"components/starter/next-steps/next-steps.tsx",displayName:"next_steps_component_div_button_onClick_1",canonicalFilename:"s_nyedprta0lw",hash:"NYEDprtA0Lw",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_kJCtKbc9zbk"},s_UxlJFslpf0s:{origin:"components/starter/next-steps/next-steps.tsx",displayName:"next_steps_component_useOnWindow",canonicalFilename:"s_uxljfslpf0s",hash:"UxlJFslpf0s",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_kJCtKbc9zbk"},s_aXA3vNn55QE:{origin:"components/starter/counter/counter.tsx",displayName:"counter_component_setCount",canonicalFilename:"s_axa3vnn55qe",hash:"aXA3vNn55QE",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_5Go3iiHXUB4"},s_eBQ0vFsFKsk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM"},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag"},s_gRRz00JItKA:{origin:"components/starter/next-steps/next-steps.tsx",displayName:"next_steps_component_div_button_onClick",canonicalFilename:"s_grrz00jitka",hash:"gRRz00JItKA",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_kJCtKbc9zbk"},s_i1Cv0pYJNR0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM"},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y"},s_zwO7CtYmrPQ:{origin:"components/starter/hero/hero.tsx",displayName:"hero_component_div_div_button_onClick",canonicalFilename:"s_zwo7ctymrpq",hash:"zwO7CtYmrPQ",ctxKind:"eventHandler",ctxName:"onClick$",captures:!1,parent:"s_fle1EaVOup8"}},mapping:{s_02wMImzEAbk:"q-dbf286fc.js",s_LQPhZ0qOjrk:"q-38ab7891.js",s_3sccYCDd1Z0:"q-0299affe.js",s_5Go3iiHXUB4:"q-c6b0b5a7.js",s_7gzriUtQs98:"q-0a8b8503.js",s_8gdLBszqbaM:"q-0300a3da.js",s_J4V2qsF7Yxo:"q-6d592447.js",s_Nk9PlpjQm9Y:"q-35a4dd14.js",s_PxZ05oEiFy8:"q-38ab7891.js",s_TxCFOy819ag:"q-dbf286fc.js",s_VkLNXphUh5s:"q-156b40cf.js",s_WmYC5H00wtI:"q-45863bc7.js",s_e0ssiDXoeAM:"q-b5be9253.js",s_fle1EaVOup8:"q-02f7e5bb.js",s_foRSjkQluCc:"q-225a7457.js",s_kJCtKbc9zbk:"q-5fb4ce65.js",s_mBt9fIl89mc:"q-a36f0d60.js",s_u0bwM0i5dA8:"q-22ce4247.js",s_xYL1qOwPyDI:"q-2ee37a07.js",s_zrbrqoaqXSY:"q-c2dc5593.js",s_RPDJAz33WLA:"q-dbf286fc.js",s_HU55RV7VfPc:"q-38ab7891.js",s_A5bZC7WO00A:"q-2a27a193.js",s_wOIPfiQ04l4:"q-20c0bc39.js",s_BUbtvTyvVRE:"q-45863bc7.js",s_D04jAYuCnhM:"q-c6b0b5a7.js",s_JKHgMZ4xLZQ:"q-156b40cf.js",s_JtGc0nS5Nuo:"q-38ab7891.js",s_LkCVrojX09Y:"q-c6b0b5a7.js",s_NYEDprtA0Lw:"q-5fb4ce65.js",s_UxlJFslpf0s:"q-5fb4ce65.js",s_aXA3vNn55QE:"q-c6b0b5a7.js",s_eBQ0vFsFKsk:"q-7f92d3fa.js",s_fX0bDjeJa0E:"q-dbf286fc.js",s_gRRz00JItKA:"q-5fb4ce65.js",s_i1Cv0pYJNR0:"q-0300a3da.js",s_p9MSze0ojs4:"q-35a4dd14.js",s_zwO7CtYmrPQ:"q-22949cf9.js"},bundles:{"q-0299affe.js":{size:538,imports:["q-055abe0a.js","q-7c2a57d7.js"],dynamicImports:["q-c2dc5593.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_3sccycdd1z0.js"],symbols:["s_3sccYCDd1Z0"]},"q-02f7e5bb.js":{size:743,imports:["q-055abe0a.js"],dynamicImports:["q-22949cf9.js"],origins:["src/components/starter/hero/hero.module.css?used","src/entry_hero.js","src/s_fle1eavoup8.js"],symbols:["s_fle1EaVOup8"]},"q-0300a3da.js":{size:958,imports:["q-055abe0a.js","q-7c2a57d7.js"],dynamicImports:["q-7f92d3fa.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-055abe0a.js":{size:47597,origins:["node_modules/@builder.io/qwik/core.min.mjs"]},"q-0a8b8503.js":{size:955,imports:["q-055abe0a.js"],origins:["src/components/starter/gauge/gauge.module.css?used","src/entry_gauge.js","src/s_7gzriutqs98.js"],symbols:["s_7gzriUtQs98"]},"q-0ef4f14a.js":{size:202,imports:["q-055abe0a.js"],dynamicImports:["q-0299affe.js"],origins:["src/global.css","src/root.tsx"]},"q-14fc1d1a.js":{size:272,imports:["q-055abe0a.js","q-7c2a57d7.js"],dynamicImports:["q-156b40cf.js"],origins:["src/routes/layout.tsx"]},"q-156b40cf.js":{size:5401,imports:["q-055abe0a.js"],dynamicImports:["q-22ce4247.js","q-a36f0d60.js"],origins:["src/components/starter/footer/footer.tsx","src/components/starter/header/header.tsx","src/entry_layout.js","src/routes/styles.css?used&inline","src/s_jkhgmz4xlzq.js","src/s_vklnxphuh5s.js"],symbols:["s_JKHgMZ4xLZQ","s_VkLNXphUh5s"]},"q-20c0bc39.js":{size:875,imports:["q-055abe0a.js","q-7c2a57d7.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-225a7457.js":{size:261,imports:["q-055abe0a.js"],origins:["src/components/starter/infobox/infobox.module.css?used","src/entry_infobox.js","src/s_forsjkqlucc.js"],symbols:["s_foRSjkQluCc"]},"q-22949cf9.js":{size:695,origins:["src/s_zwo7ctymrpq.js"],symbols:["s_zwO7CtYmrPQ"]},"q-22ce4247.js":{size:550,imports:["q-055abe0a.js","q-14fc1d1a.js","q-7c2a57d7.js"],origins:["src/components/starter/footer/footer.module.css?used","src/entry_footer.js","src/s_u0bwm0i5da8.js"],symbols:["s_u0bwM0i5dA8"]},"q-2a27a193.js":{size:751,imports:["q-055abe0a.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-2ee37a07.js":{size:2842,imports:["q-055abe0a.js","q-c3565119.js"],dynamicImports:["q-02f7e5bb.js","q-225a7457.js","q-c6b0b5a7.js"],origins:["src/components/starter/counter/counter.tsx","src/components/starter/hero/hero.tsx","src/components/starter/infobox/infobox.tsx","src/entry_routes.js","src/s_xyl1qowpydi.js"],symbols:["s_xYL1qOwPyDI"]},"q-35a4dd14.js":{size:1006,imports:["q-055abe0a.js","q-7c2a57d7.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-38ab7891.js":{size:2700,imports:["q-055abe0a.js","q-7c2a57d7.js"],origins:["src/entry_flower.js","src/routes/demo/flower/flower.css?used&inline","src/s_hu55rv7vfpc.js","src/s_jtgc0ns5nuo.js","src/s_lqphz0qojrk.js","src/s_pxz05oeify8.js"],symbols:["s_HU55RV7VfPc","s_JtGc0nS5Nuo","s_LQPhZ0qOjrk","s_PxZ05oEiFy8"]},"q-3aebfb0c.js":{size:241,imports:["q-055abe0a.js"],dynamicImports:["q-38ab7891.js"],origins:["src/routes/demo/flower/index.tsx"]},"q-45863bc7.js":{size:719,imports:["q-055abe0a.js","q-7c2a57d7.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-45aab3b6.js":{size:2536,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-5fb4ce65.js":{size:1506,imports:["q-055abe0a.js","q-c3565119.js"],origins:["src/components/starter/next-steps/next-steps.module.css?used","src/entry_next_steps.js","src/s_grrz00jitka.js","src/s_kjctkbc9zbk.js","src/s_nyedprta0lw.js","src/s_uxljfslpf0s.js"],symbols:["s_gRRz00JItKA","s_kJCtKbc9zbk","s_NYEDprtA0Lw","s_UxlJFslpf0s"]},"q-64a2a0cc.js":{size:411,imports:["q-055abe0a.js","q-7c2a57d7.js"],dynamicImports:["q-6d592447.js"],origins:["src/routes/demo/todolist/index.tsx"]},"q-6d592447.js":{size:1197,imports:["q-055abe0a.js","q-64a2a0cc.js","q-7c2a57d7.js"],origins:["src/entry_todolist.js","src/routes/demo/todolist/todolist.module.css?used","src/s_j4v2qsf7yxo.js"],symbols:["s_J4V2qsF7Yxo"]},"q-7c2a57d7.js":{size:8002,imports:["q-055abe0a.js"],dynamicImports:["q-2a27a193.js","q-35a4dd14.js","q-b5be9253.js","q-dbf286fc.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-7f92d3fa.js":{size:128,imports:["q-055abe0a.js","q-7c2a57d7.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-a36f0d60.js":{size:3824,imports:["q-055abe0a.js"],origins:["src/components/starter/header/header.module.css?used","src/components/starter/icons/qwik.tsx","src/entry_header.js","src/s_mbt9fil89mc.js"],symbols:["s_mBt9fIl89mc"]},"q-b5be9253.js":{size:412,imports:["q-055abe0a.js","q-7c2a57d7.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-bd8a7775.js":{size:305,imports:["q-055abe0a.js"],dynamicImports:["q-2ee37a07.js"],origins:["src/routes/index.tsx"]},"q-c2dc5593.js":{size:671,imports:["q-055abe0a.js","q-7c2a57d7.js"],origins:["src/entry_RouterHead.js","src/s_zrbrqoaqxsy.js"],symbols:["s_zrbrqoaqXSY"]},"q-c3565119.js":{size:1667,imports:["q-055abe0a.js"],dynamicImports:["q-5fb4ce65.js"],origins:["src/components/starter/next-steps/next-steps.tsx"]},"q-c5d0ae94.js":{size:112,imports:["q-055abe0a.js"],dynamicImports:["q-45aab3b6.js"],origins:["@qwik-city-entries"]},"q-c6b0b5a7.js":{size:1168,imports:["q-055abe0a.js"],dynamicImports:["q-0a8b8503.js"],origins:["src/components/starter/counter/counter.module.css?used","src/components/starter/gauge/index.tsx","src/entry_counter.js","src/s_5go3iihxub4.js","src/s_axa3vnn55qe.js","src/s_d04jayucnhm.js","src/s_lkcvrojx09y.js"],symbols:["s_5Go3iiHXUB4","s_aXA3vNn55QE","s_D04jAYuCnhM","s_LkCVrojX09Y"]},"q-dbf286fc.js":{size:2989,imports:["q-055abe0a.js","q-7c2a57d7.js"],dynamicImports:["q-14fc1d1a.js","q-3aebfb0c.js","q-64a2a0cc.js","q-bd8a7775.js","q-c5d0ae94.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-50369e6e.css",dangerouslySetInnerHTML:`._counter-wrapper_43sys_1{margin-top:50px;display:flex;align-items:center;justify-content:center;gap:10px}@media screen and (min-width: 768px){._counter-wrapper_43sys_1{gap:30px}}._anchor_1g8hj_1{color:#fff!important;display:block;font-size:.8rem;text-align:center;text-decoration:none;line-height:1.5}._anchor_1g8hj_1 span:not(._spacer_1g8hj_10){display:block}._spacer_1g8hj_10{display:none;padding:0 15px}@media screen and (min-width: 768px){._anchor_1g8hj_1 span{display:inline!important}}._wrapper_1v6hy_1{position:relative}._gauge_1v6hy_5{width:160px}._value_1v6hy_9{position:absolute;top:50%;left:50%;color:#fff;font-size:3rem;transform:translate(-50%,-50%);width:200px;text-align:center}@media screen and (min-width: 768px){._gauge_1v6hy_5{width:400px}._value_1v6hy_9{font-size:7rem}}._wrapper_tofv3_1{display:flex;align-items:center;justify-content:space-between}._logo_tofv3_7{display:inline-block}._logo_tofv3_7 a{display:block}._header_tofv3_14 ul{margin:0;padding:0;list-style:none;display:flex;gap:30px}._header_tofv3_14 li{display:none;margin:0;padding:0;font-size:.7rem}._header_tofv3_14 li a{color:#fff;display:inline-block;padding:0;text-decoration:none}._header_tofv3_14 li a:hover{color:var(--qwik-light-blue)}@media (min-width: 450px){._header_tofv3_14 li{display:inline-block}}._hero_13g96_1{display:flex;vertical-align:middle;flex-direction:column;flex-wrap:nowrap;align-items:center;height:450px;justify-content:center;gap:40px}._hero_13g96_1 p{color:#fff;margin:0;font-size:1rem}._button-group_13g96_18{display:flex;flex-direction:row;gap:24px}@media screen and (min-width: 768px){._hero_13g96_1{gap:60px;height:500px}._hero_13g96_1 p{font-size:1.3rem}}._infobox_oa4r7_1{color:#fff;font-size:.8rem;line-height:2;margin:0 0 40px}._infobox_oa4r7_1 h3{font-size:1rem;font-weight:400;margin:0 0 15px;padding:0}._infobox_oa4r7_1 li{line-height:2.5}@media screen and (min-width: 600px){._infobox_oa4r7_1{margin:0}}._gettingstarted_32zqp_1{display:flex;color:#fff;flex-direction:column;justify-content:center;align-items:center;height:280px;line-height:1.5;gap:10px;max-width:600px;margin:0 auto}._gettingstarted_32zqp_1 ._intro_32zqp_14{font-size:1rem;width:100%;word-break:break-word}._gettingstarted_32zqp_1 ._hint_32zqp_19{font-size:.8rem}._gettingstarted_32zqp_1 ._hint_32zqp_19 a{color:var(--qwik-dark-purple)}@media screen and (min-width: 768px){._gettingstarted_32zqp_1{height:180px}._gettingstarted_32zqp_1 ._intro_32zqp_14{font-size:1.2rem}._gettingstarted_32zqp_1 ._hint_32zqp_19{font-size:1rem}}._list_1ofyy_1{display:flex;flex-direction:column;gap:20px;color:#fff}._list_1ofyy_1,._empty_1ofyy_9{min-height:250px}._list_1ofyy_1 li{list-style:none}._empty_1ofyy_9{color:#fff;display:block}._input_1ofyy_22{background:white;color:var(--qwik-light-blue);border:none;border-radius:8px;padding:15px 20px;margin-right:10px;font-size:.8rem}._hint_1ofyy_32{font-size:.8rem;color:#fff;margin-top:30px}@media screen and (min-width: 768px){._input_1ofyy_22{padding:23px 35px;margin-right:20px;font-size:1rem}}:root{--qwik-dark-blue: #006ce9;--qwik-light-blue: #18b6f6;--qwik-light-purple: #ac7ff4;--qwik-dark-purple: #713fc2;--qwik-dirty-black: #1d2033;--qwik-dark-background: #151934;--qwik-dark-text: #ffffff}html{line-height:1;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{padding:0;margin:0;line-height:inherit}html{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{padding:0;line-height:inherit}
`}}],version:"1",options:{target:"client",buildMode:"production",forceFullBuild:!0,entryStrategy:{type:"smart"}},platform:{qwik:"1.1.4",vite:"",rollup:"3.22.0",env:"node",os:"darwin",node:"18.12.0"}},Qe=()=>{const e=ce(),n=le();return h(C,{children:[_("title",null,null,e.title,1,null),_("link",null,{rel:"canonical",href:me(t=>t.url.href,[n],"p0.url.href")},null,3,null),_("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),_("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),e.meta.map(t=>k("meta",{...t},null,0,t.key)),e.links.map(t=>k("link",{...t},null,0,t.key)),e.styles.map(t=>k("style",{...t.props,dangerouslySetInnerHTML:de(t,"style")},null,0,t.key))]},1,"OA_0")},Ue=Z(X(Qe,"s_zrbrqoaqXSY"));const Ye=()=>h(ue,{children:[_("head",null,null,[_("meta",null,{charSet:"utf-8"},null,3,null),_("link",null,{rel:"manifest",href:"/manifest.json"},null,3,null),h(Ue,null,3,"35_0")],1,null),_("body",null,{lang:"en"},[h(pe,null,3,"35_1"),h(fe,null,3,"35_2")],1,null)]},1,"35_3"),Je=Z(X(Ye,"s_3sccYCDd1Z0"));function Ve(e){return Re(h(Je,null,3,"pY_0"),{manifest:De,...e,base:"/qwik-app/build/",containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{Ve as default};
