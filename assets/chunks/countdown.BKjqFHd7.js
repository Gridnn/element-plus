import{ad as k,ae as C,a2 as S,af as h,ag as x,c as z,g as V,U as Y}from"./theme.Dyof5V-F.js";import{p as m,r as p,o as v,t as y,v as e,y as t,a,X as i,u as s,q as n,_ as g,Y as B}from"./framework.DcRevfCx.js";import{d as E}from"./dayjs.min.C-SDjiVd.js";const H=m({__name:"basic",setup(w){const u=p(0),r=k(u,{duration:1500});return u.value=172e3,(l,d)=>{const o=n("el-statistic"),c=n("el-col"),_=n("el-icon"),f=n("el-row");return v(),y(f,null,{default:e(()=>[t(c,{span:6},{default:e(()=>[t(o,{title:"Daily active users",value:268500})]),_:1}),t(c,{span:6},{default:e(()=>[t(o,{value:138},{title:e(()=>[a("div",{style:{display:"inline-flex","align-items":"center"}},[i(" Ratio of men to women "),t(_,{style:{"margin-left":"4px"},size:12},{default:e(()=>[t(s(C))]),_:1})])]),suffix:e(()=>[i("/100")]),_:1})]),_:1}),t(c,{span:6},{default:e(()=>[t(o,{title:"Total Transactions",value:s(r)},null,8,["value"])]),_:1}),t(c,{span:6},{default:e(()=>[t(o,{title:"Feedback number",value:562},{suffix:e(()=>[t(_,{style:{"vertical-align":"-0.125em"}},{default:e(()=>[t(s(S))]),_:1})]),_:1})]),_:1})]),_:1})}}}),$=g(H,[["__scopeId","data-v-6299cd72"]]),I=m({__name:"card",setup(w){return(u,r)=>{const l=n("el-icon"),d=n("el-tooltip"),o=n("el-statistic"),c=n("el-col"),_=n("el-row");return v(),y(_,{gutter:16},{default:e(()=>[t(c,{span:8},{default:e(()=>[a("div",{class:"statistic-card"},[t(o,{value:98500},{title:e(()=>[a("div",{style:{display:"inline-flex","align-items":"center"}},[i(" Daily active users "),t(d,{effect:"dark",content:"Number of users who logged into the product in one day",placement:"top"},{default:e(()=>[t(l,{style:{"margin-left":"4px"},size:12},{default:e(()=>[t(s(h))]),_:1})]),_:1})])]),_:1}),a("div",{class:"statistic-footer"},[a("div",{class:"footer-item"},[a("span",null,"than yesterday"),a("span",{class:"green"},[i(" 24% "),t(l,null,{default:e(()=>[t(s(x))]),_:1})])])])])]),_:1}),t(c,{span:8},{default:e(()=>[a("div",{class:"statistic-card"},[t(o,{value:693700},{title:e(()=>[a("div",{style:{display:"inline-flex","align-items":"center"}},[i(" Monthly Active Users "),t(d,{effect:"dark",content:"Number of users who logged into the product in one month",placement:"top"},{default:e(()=>[t(l,{style:{"margin-left":"4px"},size:12},{default:e(()=>[t(s(h))]),_:1})]),_:1})])]),_:1}),a("div",{class:"statistic-footer"},[a("div",{class:"footer-item"},[a("span",null,"month on month"),a("span",{class:"red"},[i(" 12% "),t(l,null,{default:e(()=>[t(s(z))]),_:1})])])])])]),_:1}),t(c,{span:8},{default:e(()=>[a("div",{class:"statistic-card"},[t(o,{value:72e3,title:"New transactions today"},{title:e(()=>[a("div",{style:{display:"inline-flex","align-items":"center"}}," New transactions today ")]),_:1}),a("div",{class:"statistic-footer"},[a("div",{class:"footer-item"},[a("span",null,"than yesterday"),a("span",{class:"green"},[i(" 16% "),t(l,null,{default:e(()=>[t(s(x))]),_:1})])]),a("div",{class:"footer-item"},[t(l,{size:14},{default:e(()=>[t(s(V))]),_:1})])])])]),_:1})]),_:1})}}}),j=g(I,[["__scopeId","data-v-c2df25e2"]]),T=m({__name:"countdown",setup(w){const u=p(Date.now()+252e5),r=p(Date.now()+1e3*60*60*24*2),l=p(E().add(1,"month").startOf("month"));function d(){r.value=Date.now()+1e3*60*60*24*2}return(o,c)=>{const _=n("el-countdown"),f=n("el-col"),b=n("el-button"),D=n("el-icon"),N=n("el-row");return v(),y(N,null,{default:e(()=>[t(f,{span:8},{default:e(()=>[t(_,{title:"Start to grab",value:u.value},null,8,["value"])]),_:1}),t(f,{span:8},{default:e(()=>[t(_,{title:"Remaining VIP time",format:"HH:mm:ss",value:r.value},null,8,["value"]),t(b,{class:"countdown-footer",type:"primary",onClick:d},{default:e(()=>[i(" Reset ")]),_:1})]),_:1}),t(f,{span:8},{default:e(()=>[t(_,{format:"DD [days] HH:mm:ss",value:l.value},{title:e(()=>[a("div",{style:{display:"inline-flex","align-items":"center"}},[t(D,{style:{"margin-right":"4px"},size:12},{default:e(()=>[t(s(Y))]),_:1}),i(" Still to go until next month ")])]),_:1},8,["value"]),a("div",{class:"countdown-footer"},B(l.value.format("YYYY-MM-DD")),1)]),_:1})]),_:1})}}}),q=g(T,[["__scopeId","data-v-14626721"]]);export{$ as E,q as a,j as b};
