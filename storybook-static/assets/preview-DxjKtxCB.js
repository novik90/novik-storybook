const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-m9nLytQK.js","./iframe-Bn-7XhkP.js","./index-CDs2tPxN.js","./react-18-Bn-wYQhd.js","./index-B-yFm4aN.js","./index-8O22yOKA.js","./index-DXimoRZY.js","./index-BH_9z_ur.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-Bn-7XhkP.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-m9nLytQK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
