import{r as s,R as g,D as se,E as St}from"./index-CQy9ox8C.js";var Lt=Object.defineProperty,Pt=(e,t,n)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ce=(e,t,n)=>(Pt(e,typeof t!="symbol"?t+"":t,n),n);let Ft=class{constructor(){Ce(this,"current",this.detect()),Ce(this,"handoffState","pending"),Ce(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},k=new Ft,R=(e,t)=>{k.isServer?s.useEffect(e,t):s.useLayoutEffect(e,t)};function H(e){let t=s.useRef(e);return R(()=>{t.current=e},[e]),t}let w=function(e){let t=H(e);return g.useCallback((...n)=>t.current(...n),[t])};function Te(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function W(){let e=[],t={addEventListener(n,r,o,i){return n.addEventListener(r,o,i),t.add(()=>n.removeEventListener(r,o,i))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Te(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,o){let i=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:o}),this.add(()=>{Object.assign(n.style,{[r]:i})})},group(n){let r=W();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let n of e.splice(0))n()}};return t}function Ue(){let[e]=s.useState(W);return s.useEffect(()=>()=>e.dispose(),[e]),e}function Ct(){let e=typeof document>"u";return"useSyncExternalStore"in se?(t=>t.useSyncExternalStore)(se)(()=>()=>{},()=>!1,()=>!e):!1}function Z(){let e=Ct(),[t,n]=s.useState(k.isHandoffComplete);return t&&k.isHandoffComplete===!1&&n(!1),s.useEffect(()=>{t!==!0&&n(!0)},[t]),s.useEffect(()=>k.handoff(),[]),e?!1:t}var Xe;let ee=(Xe=g.useId)!=null?Xe:function(){let e=Z(),[t,n]=g.useState(e?()=>k.nextId():null);return R(()=>{t===null&&n(k.nextId())},[t]),t!=null?""+t:void 0};function T(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,T),r}function _e(e){return k.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let Me=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var K=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(K||{}),Ze=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ze||{}),Rt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Rt||{});function et(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Me)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var tt=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(tt||{});function nt(e,t=0){var n;return e===((n=_e(e))==null?void 0:n.body)?!1:T(t,{0(){return e.matches(Me)},1(){let r=e;for(;r!==null;){if(r.matches(Me))return!0;r=r.parentElement}return!1}})}function Tr(e){let t=_e(e);W().nextFrame(()=>{t&&!nt(t.activeElement,0)&&_(e)})}var Ot=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Ot||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function _(e){e==null||e.focus({preventScroll:!0})}let Nt=["textarea","input"].join(",");function Dt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Nt))!=null?n:!1}function xt(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),i=t(r);if(o===null||i===null)return 0;let l=o.compareDocumentPosition(i);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function $r(e,t){return ue(et(),t,{relativeTo:e})}function ue(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?xt(e):e:et(e);o.length>0&&l.length>1&&(l=l.filter(m=>!o.includes(m))),r=r??i.activeElement;let a=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(r))-1;if(t&4)return Math.max(0,l.indexOf(r))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,f=l.length,E;do{if(c>=f||c+f<=0)return 0;let m=u+c;if(t&16)m=(m+f)%f;else{if(m<0)return 3;if(m>=f)return 1}E=l[m],E==null||E.focus(d),c+=a}while(E!==i.activeElement);return t&6&&Dt(E)&&E.select(),2}function rt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Mt(){return/Android/gi.test(window.navigator.userAgent)}function At(){return rt()||Mt()}function he(e,t,n){let r=H(t);s.useEffect(()=>{function o(i){r.current(i)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function ot(e,t,n){let r=H(t);s.useEffect(()=>{function o(i){r.current(i)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}function kt(e,t,n=!0){let r=s.useRef(!1);s.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(l,a){if(!r.current||l.defaultPrevented)return;let u=a(l);if(u===null||!u.getRootNode().contains(u)||!u.isConnected)return;let d=function c(f){return typeof f=="function"?c(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e);for(let c of d){if(c===null)continue;let f=c instanceof HTMLElement?c:c.current;if(f!=null&&f.contains(u)||l.composed&&l.composedPath().includes(f))return}return!nt(u,tt.Loose)&&u.tabIndex!==-1&&l.preventDefault(),t(l,u)}let i=s.useRef(null);he("pointerdown",l=>{var a,u;r.current&&(i.current=((u=(a=l.composedPath)==null?void 0:a.call(l))==null?void 0:u[0])||l.target)},!0),he("mousedown",l=>{var a,u;r.current&&(i.current=((u=(a=l.composedPath)==null?void 0:a.call(l))==null?void 0:u[0])||l.target)},!0),he("click",l=>{At()||i.current&&(o(l,()=>i.current),i.current=null)},!0),he("touchend",l=>o(l,()=>l.target instanceof HTMLElement?l.target:null),!0),ot("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ce(...e){return s.useMemo(()=>_e(...e),[...e])}let lt=Symbol();function Ht(e,t=!0){return Object.assign(e,{[lt]:t})}function N(...e){let t=s.useRef(e);s.useEffect(()=>{t.current=e},[e]);let n=w(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||(r==null?void 0:r[lt]))?void 0:n}function We(e,t){let n=s.useRef([]),r=w(e);s.useEffect(()=>{let o=[...n.current];for(let[i,l]of t.entries())if(n.current[i]!==l){let a=r(t,o);return n.current=t,a}},[r,...t])}function Ee(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var be=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(be||{}),U=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(U||{});function O({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:l,mergeRefs:a}){a=a??It;let u=it(t,e);if(i)return ge(u,n,r,l,a);let d=o??0;if(d&2){let{static:c=!1,...f}=u;if(c)return ge(f,n,r,l,a)}if(d&1){let{unmount:c=!0,...f}=u;return T(c?0:1,{0(){return null},1(){return ge({...f,hidden:!0,style:{display:"none"}},n,r,l,a)}})}return ge(u,n,r,l,a)}function ge(e,t={},n,r,o){let{as:i=n,children:l,refName:a="ref",...u}=Re(e,["unmount","static"]),d=e.ref!==void 0?{[a]:e.ref}:{},c=typeof l=="function"?l(t):l;"className"in u&&u.className&&typeof u.className=="function"&&(u.className=u.className(t));let f={};if(t){let E=!1,m=[];for(let[v,h]of Object.entries(t))typeof h=="boolean"&&(E=!0),h===!0&&m.push(v);E&&(f["data-headlessui-state"]=m.join(" "))}if(i===s.Fragment&&Object.keys(ze(u)).length>0){if(!s.isValidElement(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`));let E=c.props,m=typeof(E==null?void 0:E.className)=="function"?(...h)=>Ee(E==null?void 0:E.className(...h),u.className):Ee(E==null?void 0:E.className,u.className),v=m?{className:m}:{};return s.cloneElement(c,Object.assign({},it(c.props,ze(Re(u,["ref"]))),f,d,{ref:o(c.ref,d.ref)},v))}return s.createElement(i,Object.assign({},Re(u,["ref"]),i!==s.Fragment&&d,i!==s.Fragment&&f),c)}function Sr(){let e=s.useRef([]),t=s.useCallback(n=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(n):r.current=n)},[]);return(...n)=>{if(!n.every(r=>r==null))return e.current=n,t}}function It(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function it(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...i){let l=n[r];for(let a of l){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;a(o,...i)}}});return t}function P(e){var t;return Object.assign(s.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function ze(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function Re(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let jt="div";var we=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(we||{});function Bt(e,t){var n;let{features:r=1,...o}=e,i={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return O({ourProps:i,theirProps:o,slot:{},defaultTag:jt,name:"Hidden"})}let Ae=P(Bt),qe=s.createContext(null);qe.displayName="OpenClosedContext";var L=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(L||{});function Ve(){return s.useContext(qe)}function Ut({value:e,children:t}){return g.createElement(qe.Provider,{value:e},t)}function _t(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}let B=[];_t(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&B[0]!==t.target&&(B.unshift(t.target),B=B.filter(n=>n!=null&&n.isConnected),B.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Wt(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&qt(n)?!1:r}function qt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var at=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(at||{});function ut(e,t,n,r){let o=H(n);s.useEffect(()=>{e=e??window;function i(l){o.current(l)}return e.addEventListener(t,i,r),()=>e.removeEventListener(t,i,r)},[e,t,r])}function de(){let e=s.useRef(!1);return R(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function st(e){let t=w(e),n=s.useRef(!1);s.useEffect(()=>(n.current=!1,()=>{n.current=!0,Te(()=>{n.current&&t()})}),[t])}var ae=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ae||{});function Vt(){let e=s.useRef(0);return ot("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function ct(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let Yt="div";var dt=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(dt||{});function Gt(e,t){let n=s.useRef(null),r=N(n,t),{initialFocus:o,containers:i,features:l=30,...a}=e;Z()||(l=1);let u=ce(n);zt({ownerDocument:u},!!(l&16));let d=Qt({ownerDocument:u,container:n,initialFocus:o},!!(l&2));Jt({ownerDocument:u,container:n,containers:i,previousActiveElement:d},!!(l&8));let c=Vt(),f=w(h=>{let p=n.current;p&&($=>$())(()=>{T(c.current,{[ae.Forwards]:()=>{ue(p,K.First,{skipElements:[h.relatedTarget]})},[ae.Backwards]:()=>{ue(p,K.Last,{skipElements:[h.relatedTarget]})}})})}),E=Ue(),m=s.useRef(!1),v={ref:r,onKeyDown(h){h.key=="Tab"&&(m.current=!0,E.requestAnimationFrame(()=>{m.current=!1}))},onBlur(h){let p=ct(i);n.current instanceof HTMLElement&&p.add(n.current);let $=h.relatedTarget;$ instanceof HTMLElement&&$.dataset.headlessuiFocusGuard!=="true"&&(ft(p,$)||(m.current?ue(n.current,T(c.current,{[ae.Forwards]:()=>K.Next,[ae.Backwards]:()=>K.Previous})|K.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&_(h.target)))}};return g.createElement(g.Fragment,null,!!(l&4)&&g.createElement(Ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:we.Focusable}),O({ourProps:v,theirProps:a,defaultTag:Yt,name:"FocusTrap"}),!!(l&4)&&g.createElement(Ae,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:we.Focusable}))}let Kt=P(Gt),le=Object.assign(Kt,{features:dt});function Xt(e=!0){let t=s.useRef(B.slice());return We(([n],[r])=>{r===!0&&n===!1&&Te(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=B.slice())},[e,B,t]),w(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function zt({ownerDocument:e},t){let n=Xt(t);We(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&_(n())},[t]),st(()=>{t&&_(n())})}function Qt({ownerDocument:e,container:t,initialFocus:n},r){let o=s.useRef(null),i=de();return We(()=>{if(!r)return;let l=t.current;l&&Te(()=>{if(!i.current)return;let a=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===a){o.current=a;return}}else if(l.contains(a)){o.current=a;return}n!=null&&n.current?_(n.current):ue(l,K.First)===Ze.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function Jt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let i=de();ut(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!i.current)return;let a=ct(n);t.current instanceof HTMLElement&&a.add(t.current);let u=r.current;if(!u)return;let d=l.target;d&&d instanceof HTMLElement?ft(a,d)?(r.current=d,_(d)):(l.preventDefault(),l.stopPropagation(),_(u)):_(r.current)},!0)}function ft(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let pt=s.createContext(!1);function Zt(){return s.useContext(pt)}function ke(e){return g.createElement(pt.Provider,{value:e.force},e.children)}function en(e){let t=Zt(),n=s.useContext(mt),r=ce(e),[o,i]=s.useState(()=>{if(!t&&n!==null||k.isServer)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let a=r.createElement("div");return a.setAttribute("id","headlessui-portal-root"),r.body.appendChild(a)});return s.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),s.useEffect(()=>{t||n!==null&&i(n.current)},[n,i,t]),o}let tn=s.Fragment;function nn(e,t){let n=e,r=s.useRef(null),o=N(Ht(c=>{r.current=c}),t),i=ce(r),l=en(r),[a]=s.useState(()=>{var c;return k.isServer?null:(c=i==null?void 0:i.createElement("div"))!=null?c:null}),u=s.useContext(He),d=Z();return R(()=>{!l||!a||l.contains(a)||(a.setAttribute("data-headlessui-portal",""),l.appendChild(a))},[l,a]),R(()=>{if(a&&u)return u.register(a)},[u,a]),st(()=>{var c;!l||!a||(a instanceof Node&&l.contains(a)&&l.removeChild(a),l.childNodes.length<=0&&((c=l.parentElement)==null||c.removeChild(l)))}),d?!l||!a?null:St.createPortal(O({ourProps:{ref:o},theirProps:n,defaultTag:tn,name:"Portal"}),a):null}let rn=s.Fragment,mt=s.createContext(null);function on(e,t){let{target:n,...r}=e,o={ref:N(t)};return g.createElement(mt.Provider,{value:n},O({ourProps:o,theirProps:r,defaultTag:rn,name:"Popover.Group"}))}let He=s.createContext(null);function ln(){let e=s.useContext(He),t=s.useRef([]),n=w(i=>(t.current.push(i),e&&e.register(i),()=>r(i))),r=w(i=>{let l=t.current.indexOf(i);l!==-1&&t.current.splice(l,1),e&&e.unregister(i)}),o=s.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,s.useMemo(()=>function({children:i}){return g.createElement(He.Provider,{value:o},i)},[o])]}let an=P(nn),un=P(on),Ie=Object.assign(an,{Group:un});function sn(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const cn=typeof Object.is=="function"?Object.is:sn,{useState:dn,useEffect:fn,useLayoutEffect:pn,useDebugValue:mn}=se;function vn(e,t,n){const r=t(),[{inst:o},i]=dn({inst:{value:r,getSnapshot:t}});return pn(()=>{o.value=r,o.getSnapshot=t,Oe(o)&&i({inst:o})},[e,r,t]),fn(()=>(Oe(o)&&i({inst:o}),e(()=>{Oe(o)&&i({inst:o})})),[e]),mn(r),r}function Oe(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!cn(n,r)}catch{return!0}}function hn(e,t,n){return t()}const gn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",En=!gn,bn=En?hn:vn,wn="useSyncExternalStore"in se?(e=>e.useSyncExternalStore)(se):bn;function yn(e){return wn(e.subscribe,e.getSnapshot,e.getSnapshot)}function Tn(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...i){let l=t[o].call(n,...i);l&&(n=l,r.forEach(a=>a()))}}}function $n(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,o=r.clientWidth-r.offsetWidth,i=e-o;n.style(r,"paddingRight",`${i}px`)}}}function Sn(){return rt()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(i=>i()).some(i=>i.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let a=W();a.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>a.dispose()))}let i=(o=window.scrollY)!=null?o:window.pageYOffset,l=null;t.addEventListener(e,"click",a=>{if(a.target instanceof HTMLElement)try{let u=a.target.closest("a");if(!u)return;let{hash:d}=new URL(u.href),c=e.querySelector(d);c&&!r(c)&&(l=c)}catch{}},!0),t.addEventListener(e,"touchstart",a=>{if(a.target instanceof HTMLElement)if(r(a.target)){let u=a.target;for(;u.parentElement&&r(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(a.target,"touchAction","none")}),t.addEventListener(e,"touchmove",a=>{if(a.target instanceof HTMLElement)if(r(a.target)){let u=a.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&a.preventDefault()}else a.preventDefault()},{passive:!1}),t.add(()=>{var a;let u=(a=window.scrollY)!=null?a:window.pageYOffset;i!==u&&window.scrollTo(0,i),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})})}}:{}}function Ln(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Pn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let X=Tn(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:W(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Pn(n)},o=[Sn(),$n(),Ln()];o.forEach(({before:i})=>i==null?void 0:i(r)),o.forEach(({after:i})=>i==null?void 0:i(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});X.subscribe(()=>{let e=X.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&X.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&X.dispatch("TEARDOWN",n)}});function Fn(e,t,n){let r=yn(X),o=e?r.get(e):void 0,i=o?o.count>0:!1;return R(()=>{if(!(!e||!t))return X.dispatch("PUSH",e,n),()=>X.dispatch("POP",e,n)},[t,e]),i}let Ne=new Map,ie=new Map;function Qe(e,t=!0){R(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function o(){var l;if(!r)return;let a=(l=ie.get(r))!=null?l:1;if(a===1?ie.delete(r):ie.set(r,a-1),a!==1)return;let u=Ne.get(r);u&&(u["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",u["aria-hidden"]),r.inert=u.inert,Ne.delete(r))}let i=(n=ie.get(r))!=null?n:0;return ie.set(r,i+1),i!==0||(Ne.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),o},[e,t])}function Cn({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=s.useRef((r=n==null?void 0:n.current)!=null?r:null),i=ce(o),l=w(()=>{var a,u,d;let c=[];for(let f of e)f!==null&&(f instanceof HTMLElement?c.push(f):"current"in f&&f.current instanceof HTMLElement&&c.push(f.current));if(t!=null&&t.current)for(let f of t.current)c.push(f);for(let f of(a=i==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?a:[])f!==document.body&&f!==document.head&&f instanceof HTMLElement&&f.id!=="headlessui-portal-root"&&(f.contains(o.current)||f.contains((d=(u=o.current)==null?void 0:u.getRootNode())==null?void 0:d.host)||c.some(E=>f.contains(E))||c.push(f));return c});return{resolveContainers:l,contains:w(a=>l().some(u=>u.contains(a))),mainTreeNodeRef:o,MainTreeNode:s.useMemo(()=>function(){return n!=null?null:g.createElement(Ae,{features:we.Hidden,ref:o})},[o,n])}}let Ye=s.createContext(()=>{});Ye.displayName="StackContext";var je=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(je||{});function Rn(){return s.useContext(Ye)}function On({children:e,onUpdate:t,type:n,element:r,enabled:o}){let i=Rn(),l=w((...a)=>{t==null||t(...a),i(...a)});return R(()=>{let a=o===void 0||o===!0;return a&&l(0,n,r),()=>{a&&l(1,n,r)}},[l,n,r,o]),g.createElement(Ye.Provider,{value:l},e)}let vt=s.createContext(null);function ht(){let e=s.useContext(vt);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,ht),t}return e}function Nn(){let[e,t]=s.useState([]);return[e.length>0?e.join(" "):void 0,s.useMemo(()=>function(n){let r=w(i=>(t(l=>[...l,i]),()=>t(l=>{let a=l.slice(),u=a.indexOf(i);return u!==-1&&a.splice(u,1),a}))),o=s.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return g.createElement(vt.Provider,{value:o},n.children)},[t])]}let Dn="p";function xn(e,t){let n=ee(),{id:r=`headlessui-description-${n}`,...o}=e,i=ht(),l=N(t);R(()=>i.register(r),[r,i.register]);let a={ref:l,...i.props,id:r};return O({ourProps:a,theirProps:o,slot:i.slot||{},defaultTag:Dn,name:i.name||"Description"})}let Mn=P(xn),An=Object.assign(Mn,{});var kn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(kn||{}),Hn=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Hn||{});let In={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},ye=s.createContext(null);ye.displayName="DialogContext";function fe(e){let t=s.useContext(ye);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,fe),n}return t}function jn(e,t,n=()=>[document.body]){Fn(e,t,r=>{var o;return{containers:[...(o=r.containers)!=null?o:[],n]}})}function Bn(e,t){return T(t.type,In,e,t)}let Un="div",_n=be.RenderStrategy|be.Static;function Wn(e,t){let n=ee(),{id:r=`headlessui-dialog-${n}`,open:o,onClose:i,initialFocus:l,role:a="dialog",__demoMode:u=!1,...d}=e,[c,f]=s.useState(0),E=s.useRef(!1);a=function(){return a==="dialog"||a==="alertdialog"?a:(E.current||(E.current=!0,console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let m=Ve();o===void 0&&m!==null&&(o=(m&L.Open)===L.Open);let v=s.useRef(null),h=N(v,t),p=ce(v),$=e.hasOwnProperty("open")||m!==null,x=e.hasOwnProperty("onClose");if(!$&&!x)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!$)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!x)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof i!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i}`);let b=o?0:1,[F,pe]=s.useReducer(Bn,{titleId:null,descriptionId:null,panelRef:s.createRef()}),S=w(()=>i(!1)),z=w(y=>pe({type:0,id:y})),q=Z()?u?!1:b===0:!1,M=c>1,V=s.useContext(ye)!==null,[te,Q]=ln(),ne={get current(){var y;return(y=F.panelRef.current)!=null?y:v.current}},{resolveContainers:re,mainTreeNodeRef:Y,MainTreeNode:Pe}=Cn({portals:te,defaultContainers:[ne]}),G=M?"parent":"leaf",me=m!==null?(m&L.Closing)===L.Closing:!1,Fe=V||me?!1:q,J=s.useCallback(()=>{var y,A;return(A=Array.from((y=p==null?void 0:p.querySelectorAll("body > *"))!=null?y:[]).find(C=>C.id==="headlessui-portal-root"?!1:C.contains(Y.current)&&C instanceof HTMLElement))!=null?A:null},[Y]);Qe(J,Fe);let oe=M?!0:q,I=s.useCallback(()=>{var y,A;return(A=Array.from((y=p==null?void 0:p.querySelectorAll("[data-headlessui-portal]"))!=null?y:[]).find(C=>C.contains(Y.current)&&C instanceof HTMLElement))!=null?A:null},[Y]);Qe(I,oe),kt(re,S,!(!q||M));let D=!(M||b!==0);ut(p==null?void 0:p.defaultView,"keydown",y=>{D&&(y.defaultPrevented||y.key===at.Escape&&(y.preventDefault(),y.stopPropagation(),S()))}),jn(p,!(me||b!==0||V),re),s.useEffect(()=>{if(b!==0||!v.current)return;let y=new ResizeObserver(A=>{for(let C of A){let ve=C.target.getBoundingClientRect();ve.x===0&&ve.y===0&&ve.width===0&&ve.height===0&&S()}});return y.observe(v.current),()=>y.disconnect()},[b,v,S]);let[wt,yt]=Nn(),Tt=s.useMemo(()=>[{dialogState:b,close:S,setTitleId:z},F],[b,F,S,z]),Ke=s.useMemo(()=>({open:b===0}),[b]),$t={ref:h,id:r,role:a,"aria-modal":b===0?!0:void 0,"aria-labelledby":F.titleId,"aria-describedby":wt};return g.createElement(On,{type:"Dialog",enabled:b===0,element:v,onUpdate:w((y,A)=>{A==="Dialog"&&T(y,{[je.Add]:()=>f(C=>C+1),[je.Remove]:()=>f(C=>C-1)})})},g.createElement(ke,{force:!0},g.createElement(Ie,null,g.createElement(ye.Provider,{value:Tt},g.createElement(Ie.Group,{target:v},g.createElement(ke,{force:!1},g.createElement(yt,{slot:Ke,name:"Dialog.Description"},g.createElement(le,{initialFocus:l,containers:re,features:q?T(G,{parent:le.features.RestoreFocus,leaf:le.features.All&~le.features.FocusLock}):le.features.None},g.createElement(Q,null,O({ourProps:$t,theirProps:d,slot:Ke,defaultTag:Un,features:_n,visible:b===0,name:"Dialog"}))))))))),g.createElement(Pe,null))}let qn="div";function Vn(e,t){let n=ee(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:i,close:l}]=fe("Dialog.Overlay"),a=N(t),u=w(c=>{if(c.target===c.currentTarget){if(Wt(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),l()}}),d=s.useMemo(()=>({open:i===0}),[i]);return O({ourProps:{ref:a,id:r,"aria-hidden":!0,onClick:u},theirProps:o,slot:d,defaultTag:qn,name:"Dialog.Overlay"})}let Yn="div";function Gn(e,t){let n=ee(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:i},l]=fe("Dialog.Backdrop"),a=N(t);s.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let u=s.useMemo(()=>({open:i===0}),[i]);return g.createElement(ke,{force:!0},g.createElement(Ie,null,O({ourProps:{ref:a,id:r,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:Yn,name:"Dialog.Backdrop"})))}let Kn="div";function Xn(e,t){let n=ee(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:i},l]=fe("Dialog.Panel"),a=N(t,l.panelRef),u=s.useMemo(()=>({open:i===0}),[i]),d=w(c=>{c.stopPropagation()});return O({ourProps:{ref:a,id:r,onClick:d},theirProps:o,slot:u,defaultTag:Kn,name:"Dialog.Panel"})}let zn="h2";function Qn(e,t){let n=ee(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:i,setTitleId:l}]=fe("Dialog.Title"),a=N(t);s.useEffect(()=>(l(r),()=>l(null)),[r,l]);let u=s.useMemo(()=>({open:i===0}),[i]);return O({ourProps:{ref:a,id:r},theirProps:o,slot:u,defaultTag:zn,name:"Dialog.Title"})}let Jn=P(Wn),Zn=P(Gn),er=P(Xn),tr=P(Vn),nr=P(Qn),Lr=Object.assign(Jn,{Backdrop:Zn,Panel:er,Overlay:tr,Title:nr,Description:An});function rr(e=0){let[t,n]=s.useState(e),r=de(),o=s.useCallback(u=>{r.current&&n(d=>d|u)},[t,r]),i=s.useCallback(u=>!!(t&u),[t]),l=s.useCallback(u=>{r.current&&n(d=>d&~u)},[n,r]),a=s.useCallback(u=>{r.current&&n(d=>d^u)},[n]);return{flags:t,addFlag:o,hasFlag:i,removeFlag:l,toggleFlag:a}}function or(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function De(e,...t){e&&t.length>0&&e.classList.add(...t)}function xe(e,...t){e&&t.length>0&&e.classList.remove(...t)}function lr(e,t){let n=W();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[i,l]=[r,o].map(u=>{let[d=0]=u.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,f)=>f-c);return d}),a=i+l;if(a!==0){n.group(d=>{d.setTimeout(()=>{t(),d.dispose()},a),d.addEventListener(e,"transitionrun",c=>{c.target===c.currentTarget&&d.dispose()})});let u=n.addEventListener(e,"transitionend",d=>{d.target===d.currentTarget&&(t(),u())})}else t();return n.add(()=>t()),n.dispose}function ir(e,t,n,r){let o=n?"enter":"leave",i=W(),l=r!==void 0?or(r):()=>{};o==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let a=T(o,{enter:()=>t.enter,leave:()=>t.leave}),u=T(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),d=T(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return xe(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),De(e,...t.base,...a,...d),i.nextFrame(()=>{xe(e,...t.base,...a,...d),De(e,...t.base,...a,...u),lr(e,()=>(xe(e,...t.base,...a),De(e,...t.base,...t.entered),l()))}),i.dispose}function ar({immediate:e,container:t,direction:n,classes:r,onStart:o,onStop:i}){let l=de(),a=Ue(),u=H(n);R(()=>{e&&(u.current="enter")},[e]),R(()=>{let d=W();a.add(d.dispose);let c=t.current;if(c&&u.current!=="idle"&&l.current)return d.dispose(),o.current(u.current),d.add(ir(c,r.current,u.current==="enter",()=>{d.dispose(),i.current(u.current)})),d.dispose},[n])}function j(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let $e=s.createContext(null);$e.displayName="TransitionContext";var ur=(e=>(e.Visible="visible",e.Hidden="hidden",e))(ur||{});function sr(){let e=s.useContext($e);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function cr(){let e=s.useContext(Se);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let Se=s.createContext(null);Se.displayName="NestingContext";function Le(e){return"children"in e?Le(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function gt(e,t){let n=H(e),r=s.useRef([]),o=de(),i=Ue(),l=w((m,v=U.Hidden)=>{let h=r.current.findIndex(({el:p})=>p===m);h!==-1&&(T(v,{[U.Unmount](){r.current.splice(h,1)},[U.Hidden](){r.current[h].state="hidden"}}),i.microTask(()=>{var p;!Le(r)&&o.current&&((p=n.current)==null||p.call(n))}))}),a=w(m=>{let v=r.current.find(({el:h})=>h===m);return v?v.state!=="visible"&&(v.state="visible"):r.current.push({el:m,state:"visible"}),()=>l(m,U.Unmount)}),u=s.useRef([]),d=s.useRef(Promise.resolve()),c=s.useRef({enter:[],leave:[],idle:[]}),f=w((m,v,h)=>{u.current.splice(0),t&&(t.chains.current[v]=t.chains.current[v].filter(([p])=>p!==m)),t==null||t.chains.current[v].push([m,new Promise(p=>{u.current.push(p)})]),t==null||t.chains.current[v].push([m,new Promise(p=>{Promise.all(c.current[v].map(([$,x])=>x)).then(()=>p())})]),v==="enter"?d.current=d.current.then(()=>t==null?void 0:t.wait.current).then(()=>h(v)):h(v)}),E=w((m,v,h)=>{Promise.all(c.current[v].splice(0).map(([p,$])=>$)).then(()=>{var p;(p=u.current.shift())==null||p()}).then(()=>h(v))});return s.useMemo(()=>({children:r,register:a,unregister:l,onStart:f,onStop:E,wait:d,chains:c}),[a,l,r,f,E,c,d])}function dr(){}let fr=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Je(e){var t;let n={};for(let r of fr)n[r]=(t=e[r])!=null?t:dr;return n}function pr(e){let t=s.useRef(Je(e));return s.useEffect(()=>{t.current=Je(e)},[e]),t}let mr="div",Et=be.RenderStrategy;function vr(e,t){var n,r;let{beforeEnter:o,afterEnter:i,beforeLeave:l,afterLeave:a,enter:u,enterFrom:d,enterTo:c,entered:f,leave:E,leaveFrom:m,leaveTo:v,...h}=e,p=s.useRef(null),$=N(p,t),x=(n=h.unmount)==null||n?U.Unmount:U.Hidden,{show:b,appear:F,initial:pe}=sr(),[S,z]=s.useState(b?"visible":"hidden"),q=cr(),{register:M,unregister:V}=q;s.useEffect(()=>M(p),[M,p]),s.useEffect(()=>{if(x===U.Hidden&&p.current){if(b&&S!=="visible"){z("visible");return}return T(S,{hidden:()=>V(p),visible:()=>M(p)})}},[S,p,M,V,b,x]);let te=H({base:j(h.className),enter:j(u),enterFrom:j(d),enterTo:j(c),entered:j(f),leave:j(E),leaveFrom:j(m),leaveTo:j(v)}),Q=pr({beforeEnter:o,afterEnter:i,beforeLeave:l,afterLeave:a}),ne=Z();s.useEffect(()=>{if(ne&&S==="visible"&&p.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[p,S,ne]);let re=pe&&!F,Y=F&&b&&pe,Pe=!ne||re?"idle":b?"enter":"leave",G=rr(0),me=w(D=>T(D,{enter:()=>{G.addFlag(L.Opening),Q.current.beforeEnter()},leave:()=>{G.addFlag(L.Closing),Q.current.beforeLeave()},idle:()=>{}})),Fe=w(D=>T(D,{enter:()=>{G.removeFlag(L.Opening),Q.current.afterEnter()},leave:()=>{G.removeFlag(L.Closing),Q.current.afterLeave()},idle:()=>{}})),J=gt(()=>{z("hidden"),V(p)},q),oe=s.useRef(!1);ar({immediate:Y,container:p,classes:te,direction:Pe,onStart:H(D=>{oe.current=!0,J.onStart(p,D,me)}),onStop:H(D=>{oe.current=!1,J.onStop(p,D,Fe),D==="leave"&&!Le(J)&&(z("hidden"),V(p))})});let I=h,Ge={ref:$};return Y?I={...I,className:Ee(h.className,...te.current.enter,...te.current.enterFrom)}:oe.current&&(I.className=Ee(h.className,(r=p.current)==null?void 0:r.className),I.className===""&&delete I.className),g.createElement(Se.Provider,{value:J},g.createElement(Ut,{value:T(S,{visible:L.Open,hidden:L.Closed})|G.flags},O({ourProps:Ge,theirProps:I,defaultTag:mr,features:Et,visible:S==="visible",name:"Transition.Child"})))}function hr(e,t){let{show:n,appear:r=!1,unmount:o=!0,...i}=e,l=s.useRef(null),a=N(l,t);Z();let u=Ve();if(n===void 0&&u!==null&&(n=(u&L.Open)===L.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[d,c]=s.useState(n?"visible":"hidden"),f=gt(()=>{c("hidden")}),[E,m]=s.useState(!0),v=s.useRef([n]);R(()=>{E!==!1&&v.current[v.current.length-1]!==n&&(v.current.push(n),m(!1))},[v,n]);let h=s.useMemo(()=>({show:n,appear:r,initial:E}),[n,r,E]);s.useEffect(()=>{if(n)c("visible");else if(!Le(f))c("hidden");else{let b=l.current;if(!b)return;let F=b.getBoundingClientRect();F.x===0&&F.y===0&&F.width===0&&F.height===0&&c("hidden")}},[n,f]);let p={unmount:o},$=w(()=>{var b;E&&m(!1),(b=e.beforeEnter)==null||b.call(e)}),x=w(()=>{var b;E&&m(!1),(b=e.beforeLeave)==null||b.call(e)});return g.createElement(Se.Provider,{value:f},g.createElement($e.Provider,{value:h},O({ourProps:{...p,as:s.Fragment,children:g.createElement(bt,{ref:a,...p,...i,beforeEnter:$,beforeLeave:x})},theirProps:{},defaultTag:s.Fragment,features:Et,visible:d==="visible",name:"Transition"})))}function gr(e,t){let n=s.useContext($e)!==null,r=Ve()!==null;return g.createElement(g.Fragment,null,!n&&r?g.createElement(Be,{ref:t,...e}):g.createElement(bt,{ref:t,...e}))}let Be=P(hr),bt=P(vr),Er=P(gr),Pr=Object.assign(Be,{Child:Er,Root:Be});export{O as C,Tr as D,ee as I,K as M,be as O,Ht as T,P as U,$r as _,w as a,Sr as b,Ve as c,L as d,at as e,kt as f,tt as g,nt as h,W as i,xt as j,Lr as k,R as l,ce as n,_e as o,Ue as p,Pr as q,Wt as r,Ut as s,T as u,N as y};
