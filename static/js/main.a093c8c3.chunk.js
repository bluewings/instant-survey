(this["webpackJsonpinstant-survey"]=this["webpackJsonpinstant-survey"]||[]).push([[0],{110:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(23),s=n.n(c),i=(n(95),n(114)),o=n(88),u=n(27),l=n(7),j=n(16),d=n.n(j),b=n(36),f=n(4),O=n(17),v=Object(r.createContext)({database:void 0,userId:""}),m=n(41),p=Object(O.b)({key:"containerWidthState",default:0}),h=(Object(O.b)({key:"scrollLeftState",default:0}),Object(O.b)({key:"tickState",default:0}),Object(O.b)({key:"activeIdState",default:""}),Object(O.b)({key:"keywordState",default:""}),Object(O.b)({key:"maxContentWidthState",default:0}),Object(O.b)({key:"jsonPathsState",default:[]}),Object(O.b)({key:"hoverState",default:""}),Object(O.b)({key:"answersHeightState",default:{}})),x=n(61),w=n.n(x),y=n(3);var _=function(e){var t=e.text,n=e.fontSizes,a=Object(m.a)(),c=Object(f.a)(a,2),s=c[0],i=c[1],o=Object(r.useRef)(null),u=Object(r.useState)(""),l=Object(f.a)(u,2),j=l[0],d=l[1];return Object(r.useLayoutEffect)((function(){if(o.current){var e=document.createElement("div");o.current.appendChild(e),e.innerText=t;var r=n.find((function(t){return e.style.fontSize=t,i.width>e.getBoundingClientRect().width}));o.current.innerHTML="",d(r||n[n.length-1])}}),[i.width,o,t,n]),Object(y.jsxs)("div",{ref:s,className:w.a.root,children:[Object(y.jsx)("div",{style:{fontSize:j},children:t}),Object(y.jsx)("div",{className:w.a.dummy,ref:o})]})},g=n(30),S=n.n(g);function k(e){var t=e.data,n=e.onClick,a=e.onRemove,c=Object(m.a)(),s=Object(f.a)(c,2),i=s[0],j=s[1],d=Object(O.d)(h);Object(r.useLayoutEffect)((function(){return d((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(u.a)({},t.answer,j.height))})),function(){d((function(e){var n=Object(l.a)({},e);return delete n[t.answer],n}))}}),[t.answer,j.height,d]);var b=Object(O.c)(p),v=Object(r.useRef)(null);return Object(r.useLayoutEffect)((function(){v.current&&v.current.classList.add(S.a.animate)}),[v]),Object(y.jsx)("div",{ref:v,className:S.a.root,style:{transform:"translateY(".concat(t.top,"px)")},children:Object(y.jsx)("div",{ref:i,children:Object(y.jsxs)(o.a,{className:S.a.button,onClick:function(){n()},block:!0,children:[Object(y.jsx)(q,{width:b,data:t,onClick:a}),Object(y.jsx)("div",{className:S.a.bar,style:{width:"".concat(100*t.percent,"%")},children:Object(y.jsx)(q,{width:b,data:t})})]})})})}var N=44,A=50,C=16,I=["2rem","1.5rem","1.25rem"];function q(e){var t=e.width,n=e.data,r=e.onClick;return Object(y.jsxs)("div",{className:S.a.item,style:{width:t,padding:"0 ".concat(C,"px")},children:[n.myAnswer&&Object(y.jsx)("div",{className:S.a.my,style:{flexBasis:N},children:"\ud83d\udc4d"}),Object(y.jsx)("div",{className:S.a.answer,style:{flexBasis:t-(n.myAnswer?N:0)-A-2*C},children:Object(y.jsx)(_,{text:n.answer,fontSizes:I})}),Object(y.jsxs)("div",{className:S.a.count,style:{flexBasis:A},onClick:function(e){window.location.search.match(/admin/)&&"function"===typeof r&&(e.stopPropagation(),r())},children:["".concat(n.count,"\uba85"),Object(y.jsx)("br",{}),"".concat(~~(100*n.percent),"%")]})]})}var z=a.a.memo(k),M=n(112);var R=function(e){var t=e.text,n=Object(r.useMemo)((function(){return(t||"").trim().split(/\s+/).map((function(e,t,n){return Object(y.jsxs)(r.Fragment,{children:[Object(y.jsx)("span",{style:{whiteSpace:"nowrap"},children:e}),t<n.length-1?" ":""]},t)}))}),[t]);return Object(y.jsx)(y.Fragment,{children:n})},B=n(39),L=n.n(B);function T(){var e=function(){var e,t=Object(r.useContext)(v),n=t.database,a=t.userId,c=Object(r.useState)({}),s=Object(f.a)(c,2),i=s[0],o=s[1];Object(r.useEffect)((function(){null===n||void 0===n||n.ref("/current-survey").on("value",(function(e){var t=e.val();o(t)}))}),[n]);var u=null===i||void 0===i||null===(e=i.responses)||void 0===e?void 0:e[a],j=Object(r.useCallback)((function(e){null===n||void 0===n||n.ref("/current-survey/responses/".concat(a)).set(u===e?null:e)}),[n,a,u]),O=Object(r.useCallback)(function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([null===n||void 0===n?void 0:n.ref("/current-survey/answers").push(t),null===n||void 0===n?void 0:n.ref("/current-survey/responses/".concat(a)).set(t)]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n,a]),m=Object(r.useCallback)((function(e){var t=Object.values((null===i||void 0===i?void 0:i.answers)||{});null===n||void 0===n||n.ref("/current-survey/answers").set(t.filter((function(t){return t!==e})))}),[n,i]);return Object(r.useMemo)((function(){return Object(l.a)(Object(l.a)({},i),{},{myId:a,myAnswer:u,selectAnswer:j,submitNewAnswer:O,removeAnswer:m})}),[i,a,u,j,O,m])}(),t=e.question,n=e.answers,a=e.responses,c=e.myAnswer,s=e.selectAnswer,i=e.removeAnswer,j=e.submitNewAnswer,x=Object(r.useState)(""),w=Object(f.a)(x,2),_=w[0],g=w[1],S=!_||Object.values(n||{}).includes(_),k=Object(r.useState)(0),N=Object(f.a)(k,2),A=N[0],C=N[1],I=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),j(_),g(""),C((function(e){return e+1}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=Object(O.c)(h),B=Object(r.useMemo)((function(){var e=Object.values(n||{}),t=0,r=e.reduce((function(e,t){return Object(l.a)(Object(l.a)({},e),{},Object(u.a)({},t,{answer:t,count:0}))}),{});Object.entries(a||{}).forEach((function(e){var n=Object(f.a)(e,2)[1];n in r&&(t++,r[n].count++)}));var s=0;return r=Object.values(r).sort((function(e,t){return(null===e||void 0===e?void 0:e.count)===(null===t||void 0===t?void 0:t.count)?0:(null===e||void 0===e?void 0:e.count)<(null===t||void 0===t?void 0:t.count)?1:-1})).reduce((function(e,n,r){var a=s;return s=s+(q[n.answer]||0)+10,Object(l.a)(Object(l.a)({},e),{},Object(u.a)({},n.answer,Object(l.a)(Object(l.a)({},n),{},{rank:r,percent:n.count/Math.max(t,1),top:a,myAnswer:c===n.answer})))}),{}),[e.map((function(e){return Object(l.a)({answer:e},r[e])})),t,s]}),[c,n,a,q]),T=Object(f.a)(B,3),E=T[0],D=T[1],F=T[2],P=Object(O.d)(p),H=Object(m.a)(),J=Object(f.a)(H,2),K=J[0],Q=J[1];return Object(r.useLayoutEffect)((function(){P(Q.width)}),[P,Q.width]),Object(y.jsx)("div",{className:L.a.root,ref:K,children:Object(y.jsxs)("div",{className:L.a.inner,children:[Object(y.jsx)("h1",{className:L.a.title,children:Object(y.jsx)(R,{text:t})}),Object(y.jsxs)("div",{className:L.a.total_count,children:["\uc804\uccb4 ",D,"\uba85"]}),Object(y.jsx)("div",{className:L.a.answers,style:{height:F},children:E.map((function(e,t){return Object(y.jsx)(z,{data:e,onClick:function(){s(e.answer)},onRemove:function(){i(e.answer)}},t)}))}),Object(y.jsx)("form",{onSubmit:I,children:Object(y.jsxs)("div",{className:L.a.input_wrap,children:[Object(y.jsx)(M.a,{type:"text",size:"large",onChange:function(e){g(e.target.value.trim())},placeholder:"\ucd94\uac00 \uc758\uacac\uc744 \ub0a8\uaca8\uc8fc\uc138\uc694.",allowClear:!0},A),Object(y.jsx)(o.a,{size:"large",type:"primary",htmlType:"submit",disabled:S,children:"\ud655\uc778"})]})})]})})}var E=function(){return Object(y.jsx)(O.a,{children:Object(y.jsx)(T,{})})},D=n(35),F=n(79),P=n.n(F);var H=function(e){var t=Object(r.useContext)(v).database,n=Object(r.useState)(""),a=Object(f.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)([]),u=Object(f.a)(i,2),j=u[0],O=u[1],m=Object(r.useRef)(0),p=Object(r.useMemo)((function(){return 0===j.filter((function(e){return!e})).length?[].concat(Object(D.a)(j),[{seq:m.current++,value:""}]):j}),[j,m]),h=Object(r.useMemo)((function(){return{question:c,answers:j.map((function(e){return e.value})).filter(Boolean).filter((function(e,t,n){return n.indexOf(e)===t}))}}),[c,j]),x=function(){var e=Object(b.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,null===t||void 0===t?void 0:t.ref("/current-survey").set(Object(l.a)(Object(l.a)({},h),{},{createdAt:(new Date).toISOString()}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{className:P.a.root,children:Object(y.jsxs)("form",{onSubmit:x,children:[Object(y.jsx)(M.a,{type:"text",onChange:function(e){s(e.target.value.trim())},addonBefore:"Q",size:"large"}),p.map((function(e,t){return Object(y.jsx)("div",{children:Object(y.jsx)(M.a.Group,{compact:!0,children:Object(y.jsx)(M.a,{type:"text",onChange:function(n){O((function(r){return[].concat(Object(D.a)(r.slice(0,t)),[{seq:e.seq,value:n.target.value.trim()}],Object(D.a)(r.slice(t+1)))}))},addonBefore:t+1,size:"large"})})},e.seq)})),Object(y.jsx)(o.a,{type:"primary",size:"large",htmlType:"submit",disabled:!(h.question&&h.answers.length>1),block:!0,children:"submit"})]})})},J=n(80),K=n.n(J),Q=n(81),G=n.n(Q);var W=function(){var e=window.location.href.replace(/&admin/,"").replace(/\?admin$/,"").replace(/\?admin/,"?");return Object(y.jsx)("div",{className:G.a.root,children:Object(y.jsx)(K.a,{value:e})})},U=n(58),Y=n.n(U);var Z=function(){return Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:Y.a.root,children:[Object(y.jsx)(E,{}),Object(y.jsx)(i.a,{destroyTooltipOnHide:!0,placement:"bottomRight",content:Object(y.jsx)(W,{}),trigger:"click",children:Object(y.jsx)(o.a,{type:"link",className:Y.a.qrcode,children:Object(y.jsx)("i",{className:"material-icons",children:"qr_code_2"})})}),window.location.search.match(/admin/)&&Object(y.jsx)(i.a,{destroyTooltipOnHide:!0,placement:"topRight",content:Object(y.jsx)(H,{}),trigger:"click",children:Object(y.jsx)(o.a,{type:"link",className:Y.a.cog,children:Object(y.jsx)("i",{className:"material-icons",children:"settings"})})})]})})},$=n(85),V=(n(106),n(86));var X=function(e){var t=e.children,n=Object(r.useState)(),a=Object(f.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)((function(){var e=localStorage.getItem("user-id");return e||(e=Math.random().toString(36).substr(-8),localStorage.setItem("user-id",e)),e})),o=Object(f.a)(i,1)[0];return Object(r.useEffect)((function(){var e=$.a.initializeApp(V.firebase);s(e.database())}),[]),c?Object(y.jsx)(v.Provider,{value:{database:c,userId:o},children:t}):null};var ee=function(){return Object(y.jsx)(X,{children:Object(y.jsx)(Z,{})})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(ee,{})}),document.getElementById("root")),te()},30:function(e,t,n){e.exports={root:"Answer_root__2pq4A",animate:"Answer_animate__3cNGN",button:"Answer_button__3llNr",bar:"Answer_bar__CHkP2",item:"Answer_item__3bULz",my:"Answer_my__RC-Cs",answer:"Answer_answer__3QepJ",count:"Answer_count__3DShc"}},39:function(e,t,n){e.exports={root:"InstantSurvey_root__1vFpt",inner:"InstantSurvey_inner__2F1OO",title:"InstantSurvey_title__3RpJq",answers:"InstantSurvey_answers__1ZJMl",total_count:"InstantSurvey_total_count__2kmka",input_wrap:"InstantSurvey_input_wrap__1aN55"}},58:function(e,t,n){e.exports={qrcode:"Main_qrcode__30a1k",cog:"Main_cog__1wdKd"}},61:function(e,t,n){e.exports={root:"ResponsiveText_root__1Ds0_",dummy:"ResponsiveText_dummy__1f85y"}},79:function(e,t,n){e.exports={root:"AddSurvey_root__3IKt1",item:"AddSurvey_item__35jFS"}},81:function(e,t,n){e.exports={root:"SiteUrlQrCode_root__9zKH5"}},86:function(e){e.exports=JSON.parse('{"firebase":{"apiKey":"AIzaSyDS1mhNTsLekzQB7t1q3E52G8Wy4sDiSA4","authDomain":"instant-survey-f7f4c.firebaseapp.com","projectId":"instant-survey-f7f4c","storageBucket":"instant-survey-f7f4c.appspot.com","messagingSenderId":"934201169374","appId":"1:934201169374:web:3f8744be20f5ca255cf94f"}}')},95:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.a093c8c3.chunk.js.map