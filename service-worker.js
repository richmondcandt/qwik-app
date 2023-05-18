/* Qwik Service Worker */
const appBundles=[["q-0597c3a5.js",[3],["JKHgMZ4xLZQ","VkLNXphUh5s"]],["q-11bb2787.js",[3]],["q-22949cf9.js",[],["zwO7CtYmrPQ"]],["q-22fb2ad6.js",[]],["q-3fa2ee7c.js",[3],["fle1EaVOup8"]],["q-4277373a.js",[3,14],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-45aab3b6.js",[]],["q-4a4c67f7.js",[3,14],["eBQ0vFsFKsk"]],["q-532bad2e.js",[3]],["q-5c69a6ab.js",[3,14],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-5d5c9120.js",[3,14,21],["J4V2qsF7Yxo"]],["q-5ed7a5f3.js",[3,14],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-652a91ea.js",[3,14],["wOIPfiQ04l4"]],["q-69757674.js",[3,14]],["q-6b7ab7bd.js",[3]],["q-6f5438d1.js",[3],["7gzriUtQs98"]],["q-72b4a8ee.js",[3],["foRSjkQluCc"]],["q-7400a341.js",[3],["A5bZC7WO00A"]],["q-8fd859ef.js",[1,3],["gRRz00JItKA","kJCtKbc9zbk","NYEDprtA0Lw","UxlJFslpf0s"]],["q-ac059947.js",[3,14],["3sccYCDd1Z0"]],["q-af9fd6cb.js",[3,13,14],["u0bwM0i5dA8"]],["q-b3ac528b.js",[3,14]],["q-c0fc0213.js",[3]],["q-cc904e67.js",[3,14],["e0ssiDXoeAM"]],["q-cf90bff2.js",[3]],["q-dee0c3b7.js",[3,14],["zrbrqoaqXSY"]],["q-df85711a.js",[3],["mBt9fIl89mc"]],["q-e79ded0c.js",[1,3],["xYL1qOwPyDI"]],["q-ec86971b.js",[3],["5Go3iiHXUB4","aXA3vNn55QE","D04jAYuCnhM","LkCVrojX09Y"]],["q-f271f886.js",[3]],["q-f3e397b4.js",[3,14],["HU55RV7VfPc","JtGc0nS5Nuo","LQPhZ0qOjrk","PxZ05oEiFy8"]],["q-f3f32b72.js",[3,14],["Nk9PlpjQm9Y","p9MSze0ojs4"]]];
const libraryBundleIds=[9];
const linkBundles=[[/^\/$/,[13,0,24,27]],[/^\/demo\/flower\/?$/,[13,0,22,30]],[/^\/demo\/todolist\/?$/,[13,0,21,10]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
