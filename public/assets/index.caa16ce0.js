import{o as c,c as h,u as m,s as g,r as v,a,b as u,d as l,e as y,f as $,g as b,h as x,F as k,i as w,j as L,k as S,l as E,P}from"./vendor.feaebe73.js";const O=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}};O();const N={setup(i){const r=[{label:"Home",to:"/"},{label:"Upload",to:"/upload"}];return(o,t)=>(c(),h(m(g),{model:r}))}};const A={id:"app"},B={setup(i){return(r,o)=>{const t=v("router-view");return c(),a("div",A,[u(N),u(t)])}}},C="modulepreload",d={},V="/",F=function(r,o){return!o||o.length===0?r():Promise.all(o.map(t=>{if(t=`${V}${t}`,t in d)return;d[t]=!0;const e=t.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":C,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e)return new Promise((_,f)=>{n.addEventListener("load",_),n.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>r())},H={class:"block"},I={class:"block"},R={href:"https://www.google.com/"},U={props:{imgSrc:String},setup(i){return(r,o)=>(c(),a("div",null,[l("div",H,[u(m(y),{src:i.imgSrc,alt:"Image",width:"250"},null,8,["src"])]),l("div",I,[l("a",R,[u(m($),{label:"Link",class:"p-button-link"})])])]))}},j={class:"flex flex-wrap card-container blue-container",style:{"max-width":"100%"}},q={class:"flex align-items-center justify-content-center m-2",style:{"min-width":"200px","min-height":"100px"}},D={setup(i){const r=b([]);return x.get("/files").then(o=>{r.value=o.data.map(t=>`/image/${t.filename}`)}).catch(o=>console.log(o)),(o,t)=>(c(),a("div",null,[l("div",j,[(c(!0),a(k,null,w(r.value,e=>(c(),a("div",q,[u(U,{imgSrc:e},null,8,["imgSrc"])]))),256))])]))}},T={class:"home"},W=l("h1",null,"This is a home page",-1),K=l("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fuga tempora nam expedita commodi natus nobis tempore voluptatibus tenetur nesciunt.",-1),z={setup(i){return(r,o)=>(c(),a("div",T,[W,K,u(D)]))}},G=L(),J=[{path:"/",name:"Home",component:z},{path:"/upload",name:"Upload",component:()=>F(()=>import("./Upload.f982b011.js"),["assets/Upload.f982b011.js","assets/vendor.feaebe73.js"])}],M=S({history:G,routes:J});const p=E(B);p.use(M);p.use(P);p.mount("#app");
