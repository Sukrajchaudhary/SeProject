import{R as W,r as xe,u as hs,a as he,p as vs,F as bs,U as ps,O as Ns,f as ws,_ as ke,j as o,G as js,t as _s,v as As,H as Fs}from"./index-CQy9ox8C.js";import{T as Vs}from"./trash-CH5MLk0a.js";var me=e=>e.type==="checkbox",ae=e=>e instanceof Date,U=e=>e==null;const ts=e=>typeof e=="object";var D=e=>!U(e)&&!Array.isArray(e)&&ts(e)&&!ae(e),ks=e=>D(e)&&e.target?me(e.target)?e.target.checked:e.target.value:e,Ds=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ss=(e,r)=>e.has(Ds(r)),Es=e=>{const r=e.constructor&&e.constructor.prototype;return D(r)&&r.hasOwnProperty("isPrototypeOf")},Oe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function H(e){let r;const t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else if(!(Oe&&(e instanceof Blob||e instanceof FileList))&&(t||D(e)))if(r=t?[]:{},!t&&!Es(e))r=e;else for(const a in e)e.hasOwnProperty(a)&&(r[a]=H(e[a]));else return e;return r}var ge=e=>Array.isArray(e)?e.filter(Boolean):[],F=e=>e===void 0,m=(e,r,t)=>{if(!r||!D(e))return t;const a=ge(r.split(/[,[\].]+?/)).reduce((c,n)=>U(c)?c:c[n],e);return F(a)||a===e?F(e[r])?t:e[r]:a},X=e=>typeof e=="boolean";const Ke={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},K={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},J={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};W.createContext(null);var Cs=(e,r,t,a=!0)=>{const c={defaultValues:r._defaultValues};for(const n in e)Object.defineProperty(c,n,{get:()=>{const g=n;return r._proxyFormState[g]!==K.all&&(r._proxyFormState[g]=!a||K.all),t&&(t[g]=!0),e[g]}});return c},q=e=>D(e)&&!Object.keys(e).length,Os=(e,r,t,a)=>{t(e);const{name:c,...n}=e;return q(n)||Object.keys(n).length>=Object.keys(r).length||Object.keys(n).find(g=>r[g]===(!a||K.all))},De=e=>Array.isArray(e)?e:[e];function Rs(e){const r=W.useRef(e);r.current=e,W.useEffect(()=>{const t=!e.disabled&&r.current.subject&&r.current.subject.subscribe({next:r.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var z=e=>typeof e=="string",Ts=(e,r,t,a,c)=>z(e)?(a&&r.watch.add(e),m(t,e,c)):Array.isArray(e)?e.map(n=>(a&&r.watch.add(n),m(t,n))):(a&&(r.watchAll=!0),t),Re=e=>/^\w*$/.test(e),rs=e=>ge(e.replace(/["|']|\]/g,"").split(/\.|\[/)),j=(e,r,t)=>{let a=-1;const c=Re(r)?[r]:rs(r),n=c.length,g=n-1;for(;++a<n;){const y=c[a];let R=t;if(a!==g){const T=e[y];R=D(T)||Array.isArray(T)?T:isNaN(+c[a+1])?{}:[]}e[y]=R,e=e[y]}return e},Ps=(e,r,t,a,c)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:c||!0}}:{},Ye=e=>({isOnSubmit:!e||e===K.onSubmit,isOnBlur:e===K.onBlur,isOnChange:e===K.onChange,isOnAll:e===K.all,isOnTouch:e===K.onTouched}),ze=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const fe=(e,r,t,a)=>{for(const c of t||Object.keys(e)){const n=m(e,c);if(n){const{_f:g,...y}=n;if(g){if(g.refs&&g.refs[0]&&r(g.refs[0],c)&&!a)break;if(g.ref&&r(g.ref,g.name)&&!a)break;fe(y,r)}else D(y)&&fe(y,r)}}};var Us=(e,r,t)=>{const a=ge(m(e,t));return j(a,"root",r[t]),j(e,t,a),e},Te=e=>e.type==="file",ee=e=>typeof e=="function",pe=e=>{if(!Oe)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},be=e=>z(e),Pe=e=>e.type==="radio",Ne=e=>e instanceof RegExp;const Ge={value:!1,isValid:!1},Qe={value:!0,isValid:!0};var is=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!F(e[0].attributes.value)?F(e[0].value)||e[0].value===""?Qe:{value:e[0].value,isValid:!0}:Qe:Ge}return Ge};const Je={isValid:!1,value:null};var ls=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,Je):Je;function Xe(e,r,t="validate"){if(be(e)||Array.isArray(e)&&e.every(be)||X(e)&&!e)return{type:t,message:be(e)?e:"",ref:r}}var le=e=>D(e)&&!Ne(e)?e:{value:e,message:""},es=async(e,r,t,a,c)=>{const{ref:n,refs:g,required:y,maxLength:R,minLength:T,min:_,max:v,pattern:te,validate:Y,name:P,valueAsNumber:ne,mount:C,disabled:G}=e._f,p=m(r,P);if(!C||G)return{};const $=g?g[0]:n,I=b=>{a&&$.reportValidity&&($.setCustomValidity(X(b)?"":b||""),$.reportValidity())},A={},h=Pe(n),S=me(n),Q=h||S,re=(ne||Te(n))&&F(n.value)&&F(p)||pe(n)&&n.value===""||p===""||Array.isArray(p)&&!p.length,M=Ps.bind(null,P,t,A),ye=(b,N,V,O=J.maxLength,Z=J.minLength)=>{const B=b?N:V;A[P]={type:b?O:Z,message:B,ref:n,...M(b?O:Z,B)}};if(c?!Array.isArray(p)||!p.length:y&&(!Q&&(re||U(p))||X(p)&&!p||S&&!is(g).isValid||h&&!ls(g).isValid)){const{value:b,message:N}=be(y)?{value:!!y,message:y}:le(y);if(b&&(A[P]={type:J.required,message:N,ref:$,...M(J.required,N)},!t))return I(N),A}if(!re&&(!U(_)||!U(v))){let b,N;const V=le(v),O=le(_);if(!U(p)&&!isNaN(p)){const Z=n.valueAsNumber||p&&+p;U(V.value)||(b=Z>V.value),U(O.value)||(N=Z<O.value)}else{const Z=n.valueAsDate||new Date(p),B=de=>new Date(new Date().toDateString()+" "+de),oe=n.type=="time",ce=n.type=="week";z(V.value)&&p&&(b=oe?B(p)>B(V.value):ce?p>V.value:Z>new Date(V.value)),z(O.value)&&p&&(N=oe?B(p)<B(O.value):ce?p<O.value:Z<new Date(O.value))}if((b||N)&&(ye(!!b,V.message,O.message,J.max,J.min),!t))return I(A[P].message),A}if((R||T)&&!re&&(z(p)||c&&Array.isArray(p))){const b=le(R),N=le(T),V=!U(b.value)&&p.length>+b.value,O=!U(N.value)&&p.length<+N.value;if((V||O)&&(ye(V,b.message,N.message),!t))return I(A[P].message),A}if(te&&!re&&z(p)){const{value:b,message:N}=le(te);if(Ne(b)&&!p.match(b)&&(A[P]={type:J.pattern,message:N,ref:n,...M(J.pattern,N)},!t))return I(N),A}if(Y){if(ee(Y)){const b=await Y(p,r),N=Xe(b,$);if(N&&(A[P]={...N,...M(J.validate,N.message)},!t))return I(N.message),A}else if(D(Y)){let b={};for(const N in Y){if(!q(b)&&!t)break;const V=Xe(await Y[N](p,r),$,N);V&&(b={...V,...M(N,V.message)},I(V.message),t&&(A[P]=b))}if(!q(b)&&(A[P]={ref:$,...b},!t))return A}}return I(!0),A};function Ls(e,r){const t=r.slice(0,-1).length;let a=0;for(;a<t;)e=F(e)?a++:e[r[a++]];return e}function qs(e){for(const r in e)if(e.hasOwnProperty(r)&&!F(e[r]))return!1;return!0}function k(e,r){const t=Array.isArray(r)?r:Re(r)?[r]:rs(r),a=t.length===1?e:Ls(e,t),c=t.length-1,n=t[c];return a&&delete a[n],c!==0&&(D(a)&&q(a)||Array.isArray(a)&&qs(a))&&k(e,t.slice(0,-1)),e}var Se=()=>{let e=[];return{get observers(){return e},next:c=>{for(const n of e)n.next&&n.next(c)},subscribe:c=>(e.push(c),{unsubscribe:()=>{e=e.filter(n=>n!==c)}}),unsubscribe:()=>{e=[]}}},we=e=>U(e)||!ts(e);function se(e,r){if(we(e)||we(r))return e===r;if(ae(e)&&ae(r))return e.getTime()===r.getTime();const t=Object.keys(e),a=Object.keys(r);if(t.length!==a.length)return!1;for(const c of t){const n=e[c];if(!a.includes(c))return!1;if(c!=="ref"){const g=r[c];if(ae(n)&&ae(g)||D(n)&&D(g)||Array.isArray(n)&&Array.isArray(g)?!se(n,g):n!==g)return!1}}return!0}var as=e=>e.type==="select-multiple",Is=e=>Pe(e)||me(e),Ee=e=>pe(e)&&e.isConnected,ns=e=>{for(const r in e)if(ee(e[r]))return!0;return!1};function je(e,r={}){const t=Array.isArray(e);if(D(e)||t)for(const a in e)Array.isArray(e[a])||D(e[a])&&!ns(e[a])?(r[a]=Array.isArray(e[a])?[]:{},je(e[a],r[a])):U(e[a])||(r[a]=!0);return r}function os(e,r,t){const a=Array.isArray(e);if(D(e)||a)for(const c in e)Array.isArray(e[c])||D(e[c])&&!ns(e[c])?F(r)||we(t[c])?t[c]=Array.isArray(e[c])?je(e[c],[]):{...je(e[c])}:os(e[c],U(r)?{}:r[c],t[c]):t[c]=!se(e[c],r[c]);return t}var ve=(e,r)=>os(e,r,je(r)),cs=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:a})=>F(e)?e:r?e===""?NaN:e&&+e:t&&z(e)?new Date(e):a?a(e):e;function Ce(e){const r=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):r.disabled))return Te(r)?r.files:Pe(r)?ls(e.refs).value:as(r)?[...r.selectedOptions].map(({value:t})=>t):me(r)?is(e.refs).value:cs(F(r.value)?e.ref.value:r.value,e)}var Ms=(e,r,t,a)=>{const c={};for(const n of e){const g=m(r,n);g&&j(c,n,g._f)}return{criteriaMode:t,names:[...e],fields:c,shouldUseNativeValidation:a}},ue=e=>F(e)?e:Ne(e)?e.source:D(e)?Ne(e.value)?e.value.source:e.value:e,Bs=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ss(e,r,t){const a=m(e,t);if(a||Re(t))return{error:a,name:t};const c=t.split(".");for(;c.length;){const n=c.join("."),g=m(r,n),y=m(e,n);if(g&&!Array.isArray(g)&&t!==n)return{name:t};if(y&&y.type)return{name:n,error:y};c.pop()}return{name:t}}var Hs=(e,r,t,a,c)=>c.isOnAll?!1:!t&&c.isOnTouch?!(r||e):(t?a.isOnBlur:c.isOnBlur)?!e:(t?a.isOnChange:c.isOnChange)?e:!0,Ws=(e,r)=>!ge(m(e,r)).length&&k(e,r);const $s={mode:K.onSubmit,reValidateMode:K.onChange,shouldFocusError:!0};function Zs(e={}){let r={...$s,...e},t={submitCount:0,isDirty:!1,isLoading:ee(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},a={},c=D(r.defaultValues)||D(r.values)?H(r.defaultValues||r.values)||{}:{},n=r.shouldUnregister?{}:H(c),g={action:!1,mount:!1,watch:!1},y={mount:new Set,unMount:new Set,array:new Set,watch:new Set},R,T=0;const _={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Se(),array:Se(),state:Se()},te=Ye(r.mode),Y=Ye(r.reValidateMode),P=r.criteriaMode===K.all,ne=s=>i=>{clearTimeout(T),T=setTimeout(s,i)},C=async s=>{if(_.isValid||s){const i=r.resolver?q((await Q()).errors):await M(a,!0);i!==t.isValid&&v.state.next({isValid:i})}},G=(s,i)=>{(_.isValidating||_.validatingFields)&&((s||Array.from(y.mount)).forEach(l=>{l&&(i?j(t.validatingFields,l,i):k(t.validatingFields,l))}),v.state.next({validatingFields:t.validatingFields,isValidating:!q(t.validatingFields)}))},p=(s,i=[],l,f,u=!0,d=!0)=>{if(f&&l){if(g.action=!0,d&&Array.isArray(m(a,s))){const x=l(m(a,s),f.argA,f.argB);u&&j(a,s,x)}if(d&&Array.isArray(m(t.errors,s))){const x=l(m(t.errors,s),f.argA,f.argB);u&&j(t.errors,s,x),Ws(t.errors,s)}if(_.touchedFields&&d&&Array.isArray(m(t.touchedFields,s))){const x=l(m(t.touchedFields,s),f.argA,f.argB);u&&j(t.touchedFields,s,x)}_.dirtyFields&&(t.dirtyFields=ve(c,n)),v.state.next({name:s,isDirty:b(s,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else j(n,s,i)},$=(s,i)=>{j(t.errors,s,i),v.state.next({errors:t.errors})},I=s=>{t.errors=s,v.state.next({errors:t.errors,isValid:!1})},A=(s,i,l,f)=>{const u=m(a,s);if(u){const d=m(n,s,F(l)?m(c,s):l);F(d)||f&&f.defaultChecked||i?j(n,s,i?d:Ce(u._f)):O(s,d),g.mount&&C()}},h=(s,i,l,f,u)=>{let d=!1,x=!1;const w={name:s},E=!!(m(a,s)&&m(a,s)._f.disabled);if(!l||f){_.isDirty&&(x=t.isDirty,t.isDirty=w.isDirty=b(),d=x!==w.isDirty);const L=E||se(m(c,s),i);x=!!(!E&&m(t.dirtyFields,s)),L||E?k(t.dirtyFields,s):j(t.dirtyFields,s,!0),w.dirtyFields=t.dirtyFields,d=d||_.dirtyFields&&x!==!L}if(l){const L=m(t.touchedFields,s);L||(j(t.touchedFields,s,l),w.touchedFields=t.touchedFields,d=d||_.touchedFields&&L!==l)}return d&&u&&v.state.next(w),d?w:{}},S=(s,i,l,f)=>{const u=m(t.errors,s),d=_.isValid&&X(i)&&t.isValid!==i;if(e.delayError&&l?(R=ne(()=>$(s,l)),R(e.delayError)):(clearTimeout(T),R=null,l?j(t.errors,s,l):k(t.errors,s)),(l?!se(u,l):u)||!q(f)||d){const x={...f,...d&&X(i)?{isValid:i}:{},errors:t.errors,name:s};t={...t,...x},v.state.next(x)}},Q=async s=>{G(s,!0);const i=await r.resolver(n,r.context,Ms(s||y.mount,a,r.criteriaMode,r.shouldUseNativeValidation));return G(s),i},re=async s=>{const{errors:i}=await Q(s);if(s)for(const l of s){const f=m(i,l);f?j(t.errors,l,f):k(t.errors,l)}else t.errors=i;return i},M=async(s,i,l={valid:!0})=>{for(const f in s){const u=s[f];if(u){const{_f:d,...x}=u;if(d){const w=y.array.has(d.name);G([f],!0);const E=await es(u,n,P,r.shouldUseNativeValidation&&!i,w);if(G([f]),E[d.name]&&(l.valid=!1,i))break;!i&&(m(E,d.name)?w?Us(t.errors,E,d.name):j(t.errors,d.name,E[d.name]):k(t.errors,d.name))}x&&await M(x,i,l)}}return l.valid},ye=()=>{for(const s of y.unMount){const i=m(a,s);i&&(i._f.refs?i._f.refs.every(l=>!Ee(l)):!Ee(i._f.ref))&&_e(s)}y.unMount=new Set},b=(s,i)=>(s&&i&&j(n,s,i),!se(Ue(),c)),N=(s,i,l)=>Ts(s,y,{...g.mount?n:F(i)?c:z(s)?{[s]:i}:i},l,i),V=s=>ge(m(g.mount?n:c,s,e.shouldUnregister?m(c,s,[]):[])),O=(s,i,l={})=>{const f=m(a,s);let u=i;if(f){const d=f._f;d&&(!d.disabled&&j(n,s,cs(i,d)),u=pe(d.ref)&&U(i)?"":i,as(d.ref)?[...d.ref.options].forEach(x=>x.selected=u.includes(x.value)):d.refs?me(d.ref)?d.refs.length>1?d.refs.forEach(x=>(!x.defaultChecked||!x.disabled)&&(x.checked=Array.isArray(u)?!!u.find(w=>w===x.value):u===x.value)):d.refs[0]&&(d.refs[0].checked=!!u):d.refs.forEach(x=>x.checked=x.value===u):Te(d.ref)?d.ref.value="":(d.ref.value=u,d.ref.type||v.values.next({name:s,values:{...n}})))}(l.shouldDirty||l.shouldTouch)&&h(s,u,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&de(s)},Z=(s,i,l)=>{for(const f in i){const u=i[f],d=`${s}.${f}`,x=m(a,d);(y.array.has(s)||!we(u)||x&&!x._f)&&!ae(u)?Z(d,u,l):O(d,u,l)}},B=(s,i,l={})=>{const f=m(a,s),u=y.array.has(s),d=H(i);j(n,s,d),u?(v.array.next({name:s,values:{...n}}),(_.isDirty||_.dirtyFields)&&l.shouldDirty&&v.state.next({name:s,dirtyFields:ve(c,n),isDirty:b(s,d)})):f&&!f._f&&!U(d)?Z(s,d,l):O(s,d,l),ze(s,y)&&v.state.next({...t}),v.values.next({name:g.mount?s:void 0,values:{...n}})},oe=async s=>{const i=s.target;let l=i.name,f=!0;const u=m(a,l),d=()=>i.type?Ce(u._f):ks(s),x=w=>{f=Number.isNaN(w)||w===m(n,l,w)};if(u){let w,E;const L=d(),ie=s.type===Ke.BLUR||s.type===Ke.FOCUS_OUT,gs=!Bs(u._f)&&!r.resolver&&!m(t.errors,l)&&!u._f.deps||Hs(ie,m(t.touchedFields,l),t.isSubmitted,Y,te),Fe=ze(l,y,ie);j(n,l,L),ie?(u._f.onBlur&&u._f.onBlur(s),R&&R(0)):u._f.onChange&&u._f.onChange(s);const Ve=h(l,L,ie,!1),ys=!q(Ve)||Fe;if(!ie&&v.values.next({name:l,type:s.type,values:{...n}}),gs)return _.isValid&&C(),ys&&v.state.next({name:l,...Fe?{}:Ve});if(!ie&&Fe&&v.state.next({...t}),r.resolver){const{errors:$e}=await Q([l]);if(x(L),f){const xs=ss(t.errors,a,l),Ze=ss($e,a,xs.name||l);w=Ze.error,l=Ze.name,E=q($e)}}else G([l],!0),w=(await es(u,n,P,r.shouldUseNativeValidation))[l],G([l]),x(L),f&&(w?E=!1:_.isValid&&(E=await M(a,!0)));f&&(u._f.deps&&de(u._f.deps),S(l,E,w,Ve))}},ce=(s,i)=>{if(m(t.errors,i)&&s.focus)return s.focus(),1},de=async(s,i={})=>{let l,f;const u=De(s);if(r.resolver){const d=await re(F(s)?s:u);l=q(d),f=s?!u.some(x=>m(d,x)):l}else s?(f=(await Promise.all(u.map(async d=>{const x=m(a,d);return await M(x&&x._f?{[d]:x}:x)}))).every(Boolean),!(!f&&!t.isValid)&&C()):f=l=await M(a);return v.state.next({...!z(s)||_.isValid&&l!==t.isValid?{}:{name:s},...r.resolver||!s?{isValid:l}:{},errors:t.errors}),i.shouldFocus&&!f&&fe(a,ce,s?u:y.mount),f},Ue=s=>{const i={...c,...g.mount?n:{}};return F(s)?i:z(s)?m(i,s):s.map(l=>m(i,l))},Le=(s,i)=>({invalid:!!m((i||t).errors,s),isDirty:!!m((i||t).dirtyFields,s),isTouched:!!m((i||t).touchedFields,s),isValidating:!!m((i||t).validatingFields,s),error:m((i||t).errors,s)}),ds=s=>{s&&De(s).forEach(i=>k(t.errors,i)),v.state.next({errors:s?t.errors:{}})},qe=(s,i,l)=>{const f=(m(a,s,{_f:{}})._f||{}).ref;j(t.errors,s,{...i,ref:f}),v.state.next({name:s,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&f&&f.focus&&f.focus()},us=(s,i)=>ee(s)?v.values.subscribe({next:l=>s(N(void 0,i),l)}):N(s,i,!0),_e=(s,i={})=>{for(const l of s?De(s):y.mount)y.mount.delete(l),y.array.delete(l),i.keepValue||(k(a,l),k(n,l)),!i.keepError&&k(t.errors,l),!i.keepDirty&&k(t.dirtyFields,l),!i.keepTouched&&k(t.touchedFields,l),!i.keepIsValidating&&k(t.validatingFields,l),!r.shouldUnregister&&!i.keepDefaultValue&&k(c,l);v.values.next({values:{...n}}),v.state.next({...t,...i.keepDirty?{isDirty:b()}:{}}),!i.keepIsValid&&C()},Ie=({disabled:s,name:i,field:l,fields:f,value:u})=>{if(X(s)){const d=s?void 0:F(u)?Ce(l?l._f:m(f,i)._f):u;j(n,i,d),h(i,d,!1,!1,!0)}},Ae=(s,i={})=>{let l=m(a,s);const f=X(i.disabled);return j(a,s,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:s}},name:s,mount:!0,...i}}),y.mount.add(s),l?Ie({field:l,disabled:i.disabled,name:s,value:i.value}):A(s,!0,i.value),{...f?{disabled:i.disabled}:{},...r.progressive?{required:!!i.required,min:ue(i.min),max:ue(i.max),minLength:ue(i.minLength),maxLength:ue(i.maxLength),pattern:ue(i.pattern)}:{},name:s,onChange:oe,onBlur:oe,ref:u=>{if(u){Ae(s,i),l=m(a,s);const d=F(u.value)&&u.querySelectorAll&&u.querySelectorAll("input,select,textarea")[0]||u,x=Is(d),w=l._f.refs||[];if(x?w.find(E=>E===d):d===l._f.ref)return;j(a,s,{_f:{...l._f,...x?{refs:[...w.filter(Ee),d,...Array.isArray(m(c,s))?[{}]:[]],ref:{type:d.type,name:s}}:{ref:d}}}),A(s,!1,void 0,d)}else l=m(a,s,{}),l._f&&(l._f.mount=!1),(r.shouldUnregister||i.shouldUnregister)&&!(Ss(y.array,s)&&g.action)&&y.unMount.add(s)}}},Me=()=>r.shouldFocusError&&fe(a,ce,y.mount),fs=s=>{X(s)&&(v.state.next({disabled:s}),fe(a,(i,l)=>{let f=s;const u=m(a,l);u&&X(u._f.disabled)&&(f||(f=u._f.disabled)),i.disabled=f},0,!1))},Be=(s,i)=>async l=>{let f;l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let u=H(n);if(v.state.next({isSubmitting:!0}),r.resolver){const{errors:d,values:x}=await Q();t.errors=d,u=x}else await M(a);if(k(t.errors,"root"),q(t.errors)){v.state.next({errors:{}});try{await s(u,l)}catch(d){f=d}}else i&&await i({...t.errors},l),Me(),setTimeout(Me);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:q(t.errors)&&!f,submitCount:t.submitCount+1,errors:t.errors}),f)throw f},ms=(s,i={})=>{m(a,s)&&(F(i.defaultValue)?B(s,H(m(c,s))):(B(s,i.defaultValue),j(c,s,H(i.defaultValue))),i.keepTouched||k(t.touchedFields,s),i.keepDirty||(k(t.dirtyFields,s),t.isDirty=i.defaultValue?b(s,H(m(c,s))):b()),i.keepError||(k(t.errors,s),_.isValid&&C()),v.state.next({...t}))},He=(s,i={})=>{const l=s?H(s):c,f=H(l),u=q(s),d=u?c:f;if(i.keepDefaultValues||(c=l),!i.keepValues){if(i.keepDirtyValues)for(const x of y.mount)m(t.dirtyFields,x)?j(d,x,m(n,x)):B(x,m(d,x));else{if(Oe&&F(s))for(const x of y.mount){const w=m(a,x);if(w&&w._f){const E=Array.isArray(w._f.refs)?w._f.refs[0]:w._f.ref;if(pe(E)){const L=E.closest("form");if(L){L.reset();break}}}}a={}}n=e.shouldUnregister?i.keepDefaultValues?H(c):{}:H(d),v.array.next({values:{...d}}),v.values.next({values:{...d}})}y={mount:i.keepDirtyValues?y.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},g.mount=!_.isValid||!!i.keepIsValid||!!i.keepDirtyValues,g.watch=!!e.shouldUnregister,v.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:u?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!se(s,c)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:u?[]:i.keepDirtyValues?i.keepDefaultValues&&n?ve(c,n):t.dirtyFields:i.keepDefaultValues&&s?ve(c,s):{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},We=(s,i)=>He(ee(s)?s(n):s,i);return{control:{register:Ae,unregister:_e,getFieldState:Le,handleSubmit:Be,setError:qe,_executeSchema:Q,_getWatch:N,_getDirty:b,_updateValid:C,_removeUnmounted:ye,_updateFieldArray:p,_updateDisabledField:Ie,_getFieldArray:V,_reset:He,_resetDefaultValues:()=>ee(r.defaultValues)&&r.defaultValues().then(s=>{We(s,r.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:s=>{t={...t,...s}},_disableForm:fs,_subjects:v,_proxyFormState:_,_setErrors:I,get _fields(){return a},get _formValues(){return n},get _state(){return g},set _state(s){g=s},get _defaultValues(){return c},get _names(){return y},set _names(s){y=s},get _formState(){return t},set _formState(s){t=s},get _options(){return r},set _options(s){r={...r,...s}}},trigger:de,register:Ae,handleSubmit:Be,watch:us,setValue:B,getValues:Ue,reset:We,resetField:ms,clearErrors:ds,unregister:_e,setError:qe,setFocus:(s,i={})=>{const l=m(a,s),f=l&&l._f;if(f){const u=f.refs?f.refs[0]:f.ref;u.focus&&(u.focus(),i.shouldSelect&&u.select())}},getFieldState:Le}}function Ks(e={}){const r=W.useRef(),t=W.useRef(),[a,c]=W.useState({isDirty:!1,isValidating:!1,isLoading:ee(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:ee(e.defaultValues)?void 0:e.defaultValues});r.current||(r.current={...Zs(e),formState:a});const n=r.current.control;return n._options=e,Rs({subject:n._subjects.state,next:g=>{Os(g,n._proxyFormState,n._updateFormState,!0)&&c({...n._formState})}}),W.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),W.useEffect(()=>{if(n._proxyFormState.isDirty){const g=n._getDirty();g!==a.isDirty&&n._subjects.state.next({isDirty:g})}},[n,a.isDirty]),W.useEffect(()=>{e.values&&!se(e.values,t.current)?(n._reset(e.values,n._options.resetOptions),t.current=e.values,c(g=>({...g}))):n._resetDefaultValues()},[e.values,n]),W.useEffect(()=>{e.errors&&n._setErrors(e.errors)},[e.errors,n]),W.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),W.useEffect(()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})},[e.shouldUnregister,n]),r.current.formState=Cs(a,n),r.current}function Xs(){const[e,r]=xe.useState(null),[t,a]=xe.useState(null),c=hs(),g=he(vs),y=he(bs),R=he(ps),T=he(Ns),_=ws(),v=g.reduce((h,S)=>h+S.product.price*S.quantity,0),te=g.reduce((h,S)=>S.quantity+h,0),Y=h=>{c(_s(h)),ke.success("Item Deleted Successfully !")},P=(h,S)=>{c(As({id:S,quantity:h.target.value}))},{handleSubmit:ne,register:C,reset:G,formState:{errors:p}}=Ks(),$=h=>{r(y.addresses[h.target.value])},I=h=>{a({...t,[h.target.name]:h.target.value})},A=h=>{h.preventDefault();const S={items:g,user:y==null?void 0:y._id,totalAmount:v,paymentmethod:t==null?void 0:t.payments,totalItems:te,selectedAddress:e};c(Fs(S))};return xe.useEffect(()=>{R&&(ke.success(R.message),_("/userorder"))},[c,R]),xe.useEffect(()=>{T&&T.error&&ke.error(T.error.message)},[c,T]),o.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"grid grid-cols-1 gap-x-8  gap-y-10 lg:grid-cols-5 border",children:[o.jsx("div",{className:"lg:col-span-3 border p-2",children:o.jsx("form",{noValidate:!0,onSubmit:ne(h=>{c(js({addresses:[...y.addresses,h]}))}),className:"bg-white px-4 mt-10",children:o.jsxs("div",{className:"space-y-12",children:[o.jsxs("div",{className:"border-b border-gray-900/10 pb-12",children:[o.jsx("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Personal Information"}),o.jsx("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Use a permanent address where you can receive mail."}),o.jsxs("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[o.jsxs("div",{className:"sm:col-span-4",children:[o.jsx("label",{htmlFor:"name",className:"block text-sm font-medium leading-6 text-gray-900",children:"Full name"}),o.jsx("div",{className:"mt-2",children:o.jsx("input",{type:"text",id:"name",placeholder:"Full name",autoComplete:"given-name",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",...C("name",{required:"Name is Required."})})})]}),o.jsxs("div",{className:"sm:col-span-4",children:[o.jsx("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),o.jsx("div",{className:"mt-2",children:o.jsx("input",{id:"email",type:"email",placeholder:"Email address",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",...C("email",{required:"Email is Required."})})})]}),o.jsxs("div",{className:"sm:col-span-3",children:[o.jsx("label",{htmlFor:"phole",className:"block text-sm font-medium leading-6 text-gray-900",children:"Phone Number"}),o.jsx("div",{className:"mt-2",children:o.jsx("input",{id:"text",type:"tel",placeholder:"Phone Number",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",...C("phone",{required:"Phone Number is Required."})})})]}),o.jsxs("div",{className:"col-span-full",children:[o.jsx("label",{htmlFor:"street",className:"block text-sm font-medium leading-6 text-gray-900",children:"Street address"}),o.jsx("div",{className:"mt-2",children:o.jsx("input",{type:"text",placeholder:"Street address",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",...C("street",{required:"Street is Required."})})})]}),o.jsxs("div",{className:"sm:col-span-2 sm:col-start-1",children:[o.jsx("label",{htmlFor:"city",className:"block text-sm font-medium leading-6 text-gray-900",children:"City"}),o.jsx("div",{className:"mt-2",children:o.jsx("input",{type:"text",placeholder:"City",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",...C("city",{required:"city is Required."})})})]}),o.jsxs("div",{className:"sm:col-span-2",children:[o.jsx("label",{htmlFor:"state",className:"block text-sm font-medium leading-6 text-gray-900",children:"State / Province"}),o.jsx("div",{className:"mt-2",children:o.jsx("input",{type:"text",placeholder:"State / Province",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",...C("state",{required:" State / Province is Required."})})})]}),o.jsxs("div",{className:"sm:col-span-2",children:[o.jsx("label",{htmlFor:"pincode",className:"block text-sm font-medium leading-6 text-gray-900",children:"ZIP / Postal code"}),o.jsx("div",{className:"mt-2",children:o.jsx("input",{type:"text",placeholder:"ZIP / Postal code",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",...C("ZIP",{required:"ZIP /Postal code is required."})})})]})]})]}),o.jsxs("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:[o.jsx("button",{type:"reset",className:"rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Reset"}),o.jsx("button",{type:"submit",className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Save Address"})]}),o.jsxs("div",{className:"border-b border-gray-900/10 pb-12",children:[o.jsx("h2",{className:"text-base font-semibold leading-7 text-gray-900",children:"Address"}),o.jsx("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"Choose from Existing Address"}),o.jsx("ul",{role:"list",className:" gap-3 bg-green-100 text-black",children:(y==null?void 0:y.addresses.length)>0?y==null?void 0:y.addresses.map((h,S)=>o.jsxs("li",{className:"flex px-7 gap-4  justify-between gap-x-6 py-5 border-solid border-2 border-gray-200",children:[o.jsxs("div",{className:"flex gap-x-4",children:[o.jsx("input",{id:"cash",name:"address",type:"radio",value:S,onChange:Q=>$(Q),className:"h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"}),o.jsxs("div",{className:"min-w-0 flex-auto",children:[o.jsx("p",{className:"text-sm font-semibold leading-6 text-gray-900",children:h==null?void 0:h.name}),o.jsx("p",{className:"mt-1 truncate text-sm leading-5 text-gray-900",children:h==null?void 0:h.email})]})]}),o.jsxs("div",{className:" sm:flex sm:flex-col sm:justify-between",children:[o.jsx("p",{className:"text-sm leading-6 text-gray-900",children:h==null?void 0:h.phone}),o.jsx("p",{className:"text-sm leading-6 text-gray-900",children:"2233"})]})]},S)):o.jsx("p",{className:"text-green-700 font-bold",children:"Please Add Your Shipping Address."})}),o.jsx("div",{className:"mt-10 space-y-10",children:o.jsxs("fieldset",{children:[o.jsx("legend",{className:"text-sm font-semibold leading-6 text-gray-900",children:"Payment Methods"}),o.jsx("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:"These are delivered via SMS to your mobile phone."}),o.jsxs("div",{className:"mt-6 space-y-6",children:[o.jsxs("div",{className:"flex items-center gap-x-3",children:[o.jsx("input",{onChange:I,id:"cash",value:"cash",name:"payments",type:"radio",className:"h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"}),o.jsx("label",{htmlFor:"push-everything",className:"block text-sm font-medium leading-6 text-gray-900",children:"Cash on Delivery"})]}),o.jsxs("div",{className:"flex items-center gap-x-3",children:[o.jsx("input",{onChange:I,value:"card",id:"card",name:"payments",type:"radio",className:"h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"}),o.jsx("label",{htmlFor:"push-email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Card Payment"})]})]})]})})]})]})})}),o.jsx("div",{className:"lg:col-span-2",children:o.jsx("div",{className:"mx-auto mt-10 bg-white max-w-7xl px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"lg:col-span-2",children:[o.jsx("div",{className:"mx-auto mt-10 bg-white max-w-7xl px-4 sm:px-6 lg:px-8",children:o.jsx("ul",{className:"-my-7 divide-y divide-gray-200",children:g.map(h=>o.jsx("li",{className:"flex flex-col py-6 sm:flex-row sm:justify-between",children:o.jsxs("div",{className:"flex w-full space-x-2 sm:space-x-4",children:[o.jsx("img",{className:"h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32",src:h.product.thumbnail,alt:h.name}),o.jsxs("div",{className:"flex w-full flex-col justify-between pb-4",children:[o.jsxs("div",{className:"flex w-full justify-between space-x-2 pb-2",children:[o.jsxs("div",{className:"space-y-1",children:[o.jsx("h3",{className:"text-lg font-semibold leading-snug sm:pr-8",children:h.product.title}),o.jsx("p",{className:"text-sm",children:h.color})]}),o.jsx("div",{className:"text-right",children:o.jsxs("p",{className:"text-lg font-semibold",children:["$",h.product.price]})})]}),o.jsx("div",{className:"flex flex-1 items-end justify-between text-sm",children:o.jsxs("div",{className:"text-gray-500",children:[" ",o.jsx("label",{htmlFor:"qunatity",className:"inline mr-5 text-sm font-medium leading-6 text-gray-900",children:"OTY"}),o.jsxs("select",{onChange:S=>P(S,h._id),value:h.quantity,children:[o.jsx("option",{value:"1",children:"1"}),o.jsx("option",{value:"2",children:"2"}),o.jsx("option",{value:"3",children:"3"})]})]})}),o.jsx("div",{className:"flex divide-x text-sm",children:o.jsxs("button",{type:"button",onClick:()=>Y(h._id),className:"flex items-center space-x-2 px-2 py-1 pl-0",children:[o.jsx(Vs,{size:16}),o.jsx("span",{children:"Remove"})]})})]})]})},h.id))})}),o.jsx("hr",{className:"mt-6 border-gray-200"}),o.jsx("form",{action:"#",className:"mt-6",children:o.jsxs("div",{className:"sm:flex sm:space-x-2.5 md:flex-col md:space-x-0 lg:flex-row lg:space-x-2.5",children:[o.jsx("div",{className:"flex-grow",children:o.jsx("input",{className:"flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"text",placeholder:"Enter coupon code"})}),o.jsx("div",{className:"mt-4 sm:mt-0 md:mt-4 lg:mt-0",children:o.jsx("button",{type:"button",className:"rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Apply Coupon"})})]})}),o.jsxs("ul",{className:"mt-6 space-y-3",children:[o.jsxs("li",{className:"flex items-center justify-between text-gray-900",children:[o.jsx("p",{className:"text-sm font-medium ",children:"Total"}),o.jsxs("p",{className:"text-sm font-bold ",children:["₹",v]})]}),o.jsx("button",{onClick:A,type:"submit",className:"rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Order Now"})]})]})})})]})})}export{Xs as default};
