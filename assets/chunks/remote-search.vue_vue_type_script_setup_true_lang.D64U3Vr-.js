import{e as y}from"./theme.Dyof5V-F.js";import{p as _,r,b as x,o as h,t as V,v as g,y as d,u as F,a as o,Y as E,q as b,c as k}from"./framework.DcRevfCx.js";const j=_({__name:"autocomplete-template",setup(f){const s=r(""),u=r([]),n=(e,t)=>{const l=e?u.value.filter(a(e)):u.value;t(l)},a=e=>t=>t.value.toLowerCase().indexOf(e.toLowerCase())===0,m=()=>[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}],p=e=>{console.log(e)},c=e=>{console.log(e)};return x(()=>{u.value=m()}),(e,t)=>{const l=b("el-icon"),i=b("el-autocomplete");return h(),V(i,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=v=>s.value=v),"fetch-suggestions":n,"popper-class":"my-autocomplete",placeholder:"Please input",onSelect:p},{suffix:g(()=>[d(l,{class:"el-input__icon",onClick:c},{default:g(()=>[d(F(y))]),_:1})]),default:g(({item:v})=>[o("div",{class:"value"},E(v.value),1),o("span",{class:"link"},E(v.link),1)]),_:1},8,["modelValue"])}}}),S=_({__name:"autocomplete",setup(f){const s=r(""),u=r(""),n=r([]),a=(e,t)=>{const l=e?n.value.filter(m(e)):n.value;t(l)},m=e=>t=>t.value.toLowerCase().indexOf(e.toLowerCase())===0,p=()=>[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}],c=e=>{console.log(e)};return x(()=>{n.value=p()}),(e,t)=>{const l=b("el-autocomplete");return h(),k("div",{class:"flex gap-4"},[o("div",null,[o("div",{class:"sub-title my-2 text-sm text-gray-600"}," list suggestions when activated "),d(l,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=i=>s.value=i),"fetch-suggestions":a,clearable:"",class:"inline-input w-50",placeholder:"Please Input",onSelect:c},null,8,["modelValue"])]),o("div",null,[o("div",{class:"sub-title my-2 text-sm text-gray-600"}," list suggestions on input "),d(l,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=i=>u.value=i),"fetch-suggestions":a,"trigger-on-focus":!1,clearable:"",class:"inline-input w-50",placeholder:"Please Input",onSelect:c},null,8,["modelValue"])])])}}}),L=_({__name:"custom-loading",setup(f){const s=r(""),u=r([]),n=()=>[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}];let a;const m=(e,t)=>{const l=e?u.value.filter(p(e)):u.value;clearTimeout(a),a=setTimeout(()=>{t(l)},5e3*Math.random())},p=e=>t=>t.value.toLowerCase().indexOf(e.toLowerCase())===0,c=e=>{console.log(e)};return x(()=>{u.value=n()}),(e,t)=>{const l=b("el-autocomplete"),i=b("el-icon");return h(),k("div",{class:"flex gap-4"},[o("div",null,[o("div",{class:"sub-title my-2 text-sm text-gray-600"},"loading icon1"),d(l,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=v=>s.value=v),"fetch-suggestions":m,placeholder:"Please input",onSelect:c},{loading:g(()=>[(h(),k("svg",{class:"circular",viewBox:"0 0 50 50"},[o("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]))]),_:1},8,["modelValue"])]),o("div",null,[o("div",{class:"sub-title my-2 text-sm text-gray-600"},"loading icon2"),d(l,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=v=>s.value=v),"fetch-suggestions":m,placeholder:"Please input",onSelect:c},{loading:g(()=>[d(i,{class:"is-loading"},{default:g(()=>[(h(),k("svg",{class:"circular",viewBox:"0 0 20 20"},[o("g",{class:"path2 loading-path","stroke-width":"0",style:{animation:"none",stroke:"none"}},[o("circle",{r:"3.375",class:"dot1",rx:"0",ry:"0"}),o("circle",{r:"3.375",class:"dot2",rx:"0",ry:"0"}),o("circle",{r:"3.375",class:"dot4",rx:"0",ry:"0"}),o("circle",{r:"3.375",class:"dot3",rx:"0",ry:"0"})])]))]),_:1})]),_:1},8,["modelValue"])])])}}}),A=_({__name:"remote-search",setup(f){const s=r(""),u=r([]),n=()=>[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}];let a;const m=(e,t)=>{const l=e?u.value.filter(p(e)):u.value;clearTimeout(a),a=setTimeout(()=>{t(l)},3e3*Math.random())},p=e=>t=>t.value.toLowerCase().indexOf(e.toLowerCase())===0,c=e=>{console.log(e)};return x(()=>{u.value=n()}),(e,t)=>{const l=b("el-autocomplete");return h(),V(l,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=i=>s.value=i),"fetch-suggestions":m,placeholder:"Please input",onSelect:c},null,8,["modelValue"])}}});export{S as _,j as a,A as b,L as c};
