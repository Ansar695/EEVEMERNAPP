(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[4],{217:function(e,s,t){},221:function(e,s,t){"use strict";t.r(s);var c=t(6),a=t.n(c),n=t(9),r=t(5),i=t(2),l=t(19),j=t(24),o=(t(217),t(218),t(27)),d=t(21),h=t.n(d),b=t(0);s.default=function(){var e=Object(o.f)(),s=Object(o.g)(),t=Object(i.useState)(),c=Object(r.a)(t,2),d=c[0],m=c[1],p=Object(i.useState)(!1),u=Object(r.a)(p,2),O=(u[0],u[1]),x=Object(i.useState)(),g=Object(r.a)(x,2),f=g[0],v=g[1],N=Object(i.useState)([]),_=Object(r.a)(N,2),k=_[0],w=_[1],M=Object(i.useState)(0),y=Object(r.a)(M,2),I=y[0],F=y[1],S=function(){var s=Object(n.a)(a.a.mark((function s(){return a.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return O(!0),s.next=3,h.a.get("/userProfile").then((function(e){200===e.status&&(console.log("res.data",e),v(e.data)),O(!1)})).catch((function(s){O(!1),console.log(s),e.push("/login")}));case 3:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}(),C=function(){var e=Object(n.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/userLikes").then((function(e){if(200===e.status){console.log(e.data);var s=e.data;w(s),s&&s.length>0&&s.map((function(e){e.likes&&(I+=e.likes.length)})),F(I)}})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(n.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.id,e.prev=1,e.next=4,fetch("/getCurrentUserUploadedImages",{method:"GET",headers:{"Content-type":"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,m(c),console.log("data"),console.log(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){S(),C(),J()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"st-header",children:[Object(b.jsx)(j.a,{}),Object(b.jsx)("div",{className:"st-container",id:"profilecontent",children:Object(b.jsx)("div",{className:"st-content",children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-12",children:[Object(b.jsxs)("div",{className:"row profile_row",children:[Object(b.jsx)("div",{className:"col-md-4 col-12 d-flex align-items-center justify-content-center",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{className:"sologn_desc",children:f&&f.func}),Object(b.jsx)("h4",{className:"sologn_desc",children:f&&f.company_description})]})}),Object(b.jsxs)("div",{className:"col-md-4 col-12",children:[Object(b.jsx)("div",{className:"text-center mx-auto pr_pic2",children:Object(b.jsx)("div",{className:"pr_pic mx-auto",children:Object(b.jsx)("img",{src:f&&f.file?"/images/".concat(f.file):"/images/avt.jpg"})})}),Object(b.jsx)("div",{className:"text-center",children:Object(b.jsxs)("h1",{className:"jasen",children:[f?f.name:"User"," ",f?f.sur_name:"Name"]})})]}),Object(b.jsx)("div",{className:"col-md-4 col-12",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg-1"}),Object(b.jsxs)("div",{className:"col-lg-10 col-md-12",children:[Object(b.jsxs)("div",{className:"prof_stats",children:[Object(b.jsx)("span",{children:"Concepts:"}),Object(b.jsx)("span",{children:k&&Math.abs(parseInt(k.length))>=1e3?Math.sign(parseInt(k.length))*(Math.abs(parseInt(k.length))/1e3).toFixed(1)+"k":Math.sign(parseInt(k.length))*Math.abs(parseInt(k.length))})]}),Object(b.jsxs)("div",{className:"prof_stats",children:[Object(b.jsx)("span",{children:"Coummunity likes:"}),Object(b.jsx)("span",{children:Math.abs(I)>=1e3?Math.sign(I)*(Math.abs(I)/1e3).toFixed(1)+"k":Math.sign(I)*Math.abs(I)})]}),Object(b.jsxs)("div",{className:"prof_stats",children:[Object(b.jsx)("span",{children:"Instagram likes:"}),Object(b.jsx)("span",{children:" 00"})]}),Object(b.jsxs)("div",{className:"prof_stats",children:[Object(b.jsx)("span",{children:"Participations:"}),Object(b.jsx)("span",{children:"00"})]}),Object(b.jsxs)("div",{className:"prof_stats",children:[Object(b.jsx)("span",{children:"Jury likes:"}),Object(b.jsx)("span",{children:"00"})]})]})]})})]}),Object(b.jsx)("div",{className:"picdiv_para",children:d?d.map((function(e){return Object(b.jsxs)("div",{className:"pic_div",children:[e.designer_imgs&&Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("img",{src:e.designer_imgs&&e.designer_imgs,alt:""})}),e.part_imgs&&Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("img",{src:e.part_imgs&&e.part_imgs,alt:""})}),e.cad_imgs&&Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("img",{src:e.cad_imgs&&e.cad_imgs,alt:""})})]})})):"No Images"})]})})})})})]}),Object(b.jsx)(l.a,{})]})}}}]);
//# sourceMappingURL=4.1f04f5d7.chunk.js.map