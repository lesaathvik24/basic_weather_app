import{S as O,i as F,s as G,e as v,d as q,f as C,h as f,j as g,k as H,l as _,m as P,v as l,w as K,n as J,o as t,x as L,y as D,q as M,z as Q}from"../chunks/index.73007eae.js";function R(e){let u,a,h,o,s,y,b,r,n,T,m,d,i,I,p,E,w,U;return{c(){u=v("main"),a=v("div"),h=v("div"),o=v("div"),s=v("h1"),y=q("|"),b=C(),r=v("div"),n=v("h3"),T=q("|"),m=C(),d=v("div"),i=v("input"),I=C(),p=v("button"),E=q("Search"),this.h()},l(c){u=f(c,"MAIN",{class:!0});var k=g(u);a=f(k,"DIV",{class:!0});var V=g(a);h=f(V,"DIV",{class:!0});var S=g(h);o=f(S,"DIV",{class:!0});var W=g(o);s=f(W,"H1",{contenteditable:!0,class:!0});var j=g(s);y=H(j,"|"),j.forEach(_),W.forEach(_),b=P(S),r=f(S,"DIV",{class:!0});var z=g(r);n=f(z,"H3",{contenteditable:!0,class:!0});var A=g(n);T=H(A,"|"),A.forEach(_),z.forEach(_),S.forEach(_),m=P(V),d=f(V,"DIV",{class:!0});var N=g(d);i=f(N,"INPUT",{type:!0,placeholder:!0,class:!0}),I=P(N),p=f(N,"BUTTON",{class:!0});var B=g(p);E=H(B,"Search"),B.forEach(_),N.forEach(_),V.forEach(_),k.forEach(_),this.h()},h(){l(s,"contenteditable","false"),l(s,"class","svelte-go00k9"),e[0]===void 0&&K(()=>e[5].call(s)),l(o,"class","headcont svelte-go00k9"),l(n,"contenteditable","false"),l(n,"class","svelte-go00k9"),e[1]===void 0&&K(()=>e[6].call(n)),l(r,"class","pcont svelte-go00k9"),l(h,"class","textcont svelte-go00k9"),l(i,"type","text"),l(i,"placeholder","Location"),l(i,"class","svelte-go00k9"),l(p,"class","svelte-go00k9"),l(d,"class","input svelte-go00k9"),l(a,"class","homepagecontainer svelte-go00k9"),l(u,"class","svelte-go00k9")},m(c,k){J(c,u,k),t(u,a),t(a,h),t(h,o),t(o,s),t(s,y),e[0]!==void 0&&(s.innerText=e[0]),t(h,b),t(h,r),t(r,n),t(n,T),e[1]!==void 0&&(n.innerText=e[1]),t(a,m),t(a,d),t(d,i),L(i,e[2]),t(d,I),t(d,p),t(p,E),w||(U=[D(s,"input",e[5]),D(n,"input",e[6]),D(i,"input",e[7]),D(i,"keydown",e[4]),D(p,"click",e[3])],w=!0)},p(c,[k]){k&1&&c[0]!==s.innerText&&(s.innerText=c[0]),k&2&&c[1]!==n.innerText&&(n.innerText=c[1]),k&4&&i.value!==c[2]&&L(i,c[2])},i:M,o:M,d(c){c&&_(u),w=!1,Q(U)}}}function X(e,u,a){let h="Welcome to WeatherCast",o="",s=0;const y=setInterval(()=>{a(0,o+=h[s++]),o.length===h.length&&clearInterval(y)},100);let b="etis rehtaew gnirob itna ehT",r="",n=b.length-1;const T=setInterval(()=>{a(1,r+=b[n--]),r.length===b.length&&clearInterval(T)},60);let m="";function d(){window.open(`/weather/${m}`)}function i(w){w.key=="Enter"&&d()}function I(){o=this.innerText,a(0,o)}function p(){r=this.innerText,a(1,r)}function E(){m=this.value,a(2,m)}return[o,r,m,d,i,I,p,E]}class Z extends O{constructor(u){super(),F(this,u,X,R,G,{})}}export{Z as default};
