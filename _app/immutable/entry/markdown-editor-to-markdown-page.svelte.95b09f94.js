import{S as h,i as _,s as g,y as m,q as w,z as c,r as d,A as i,b as f,g as l,d as p,B as u,h as $,I as k,o as S,a as x,c as P}from"../chunks/index.52be0318.js";import{p as b}from"../chunks/stores.140a0b51.js";import{T as C}from"../chunks/ToMarkdown.11070c1f.js";import{S as I}from"../chunks/SwitchLink.198be2d4.js";function q(a){let e,s,r;return e=new I({props:{href:"./from-markdown?text="+encodeURIComponent(a[2])}}),{c(){m(e.$$.fragment),s=x()},l(t){c(e.$$.fragment,t),s=P(t)},m(t,n){i(e,t,n),f(t,s,n),r=!0},p(t,n){const o={};n&4&&(o.href="./from-markdown?text="+encodeURIComponent(t[2])),e.$set(o)},i(t){r||(l(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){u(e,t),t&&$(s)}}}function M(a){let e,s,r;return e=new C({props:{htmlSource:a[0],$$slots:{switch:[q,({markdown:t})=>({2:t}),({markdown:t})=>t?4:0]},$$scope:{ctx:a}}}),{c(){m(e.$$.fragment),s=w(">")},l(t){c(e.$$.fragment,t),s=d(t,">")},m(t,n){i(e,t,n),f(t,s,n),r=!0},p(t,[n]){const o={};n&1&&(o.htmlSource=t[0]),n&12&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){r||(l(e.$$.fragment,t),r=!0)},o(t){p(e.$$.fragment,t),r=!1},d(t){u(e,t),t&&$(s)}}}function R(a,e,s){let r;k(a,b,n=>s(1,r=n));let t=r.url.searchParams.get("html")??"";return S(()=>{r.url.searchParams.has("html")&&s(0,t=r.url.searchParams.get("html"))}),[t]}class A extends h{constructor(e){super(),_(this,e,R,M,g,{})}}export{A as default};
