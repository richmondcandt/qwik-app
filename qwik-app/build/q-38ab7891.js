import{n as u,C as d,r as h,N as t,O as s,a,_ as l,z as c,b as p}from"./q-055abe0a.js";import{a as _}from"./q-7c2a57d7.js";const m=()=>{u(a(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_HU55RV7VfPc"));const n=_(),e=d({count:0,number:20});return h(a(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_LQPhZ0qOjrk",[e])),t("div",null,{class:"container container-center"},[t("div",null,{role:"presentation",class:"ellipsis"},null,3,null),t("h1",null,null,[t("span",null,{class:"highlight"},"Generate",3,null)," Flowers"],3,null),t("input",null,{class:"input",type:"range",value:s(r=>r.number,[e]),max:50,onInput$:a(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_JtGc0nS5Nuo",[e])},null,3,null),t("div",null,{style:s(r=>({"--state":`${r.count*.1}`}),[e]),class:s(r=>({host:!0,pride:r.url.searchParams.get("pride")==="true"}),[n])},Array.from({length:e.number},(r,o)=>t("div",{class:{square:!0,odd:o%2===0},style:{"--index":`${o+1}`}},null,null,3,o)).reverse(),1,null)],1,"IA_0")},v=({cleanup:n})=>{const[e]=c(),r=setTimeout(()=>e.count=1,500);n(()=>clearTimeout(r));const o=setInterval(()=>e.count++,7e3);n(()=>clearInterval(o))},b=n=>{const[e]=c();e.number=n.target.valueAsNumber},g=`.host{display:grid;align-items:center;justify-content:center;justify-items:center;--rotation: 135deg;--rotation: 225deg;--size-step: 10px;--odd-color-step: 5;--even-color-step: 5;--center: 12;width:100%;height:500px;contain:strict}h1{margin-bottom:60px}.input{width:60%}.square{--size: calc(40px + var(--index) * var(--size-step));display:block;width:var(--size);height:var(--size);transform:rotate(calc(var(--rotation) * var(--state) * (var(--center) - var(--index))));transition-property:transform,border-color;transition-duration:5s;transition-timing-function:ease-in-out;grid-area:1 / 1;background:white;border-width:2px;border-style:solid;border-color:#000;box-sizing:border-box;will-change:transform,border-color;contain:strict}.square.odd{--luminance: calc(1 - calc(calc(var(--index) * var(--odd-color-step)) / 256));background:rgb(calc(172 * var(--luminance)),calc(127 * var(--luminance)),calc(244 * var(--luminance)))}.pride .square:nth-child(12n + 1){background:#e70000}.pride .square:nth-child(12n + 3){background:#ff8c00}.pride .square:nth-child(12n + 5){background:#ffef00}.pride .square:nth-child(12n + 7){background:#00811f}.pride .square:nth-child(12n + 9){background:#0044ff}.pride .square:nth-child(12n + 11){background:#760089}
`,f=g,i=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_HU55RV7VfPc:f,s_JtGc0nS5Nuo:b,s_LQPhZ0qOjrk:v,s_PxZ05oEiFy8:m},Symbol.toStringTag,{value:"Module"}));export{p as _hW,f as s_HU55RV7VfPc,b as s_JtGc0nS5Nuo,v as s_LQPhZ0qOjrk,m as s_PxZ05oEiFy8};
