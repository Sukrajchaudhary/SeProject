import{k as f,f as y,r as a,j as e,w as v,x as N,u as w,a as u,y as k,p as C,z as A,_ as g,B as T}from"./index-CQy9ox8C.js";import{q as p,k as b}from"./transition-K5aC8bvi.js";/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=f("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=f("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),S=({title:o,message:r,action:c,cancelOption:i,showModal:l,onClose:s})=>{const m=y(),n=a.useRef(null);a.useEffect(()=>{},[l]);const x=()=>{m("/login")};return e.jsx(p.Root,{show:l,as:a.Fragment,children:e.jsx(b,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",onClose:s,initialFocus:n,children:e.jsxs("div",{className:"flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[e.jsx(p.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx(b.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"​"}),e.jsx(p.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e.jsxs("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[e.jsx("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:e.jsxs("div",{className:"sm:flex sm:items-start",children:[e.jsx("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:e.jsx(F,{size:28,color:"#2c14e1"})}),e.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[e.jsx(b.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:o}),e.jsx("div",{className:"mt-2",children:e.jsx("p",{className:"text-sm text-gray-500",children:r})})]})]})}),e.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[e.jsx("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700   sm:ml-3 sm:w-auto sm:text-sm",onClick:x,ref:n,children:c}),e.jsx("button",{type:"button",className:"mt-3 text-white w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-res-700 hover:bg-red-700 sm:mt-0 sm:w-auto sm:text-sm",onClick:s,children:i})]})]})})]})})})},_=()=>{const{isAuth:o}=v(),r=N(),[c,i]=a.useState(!1),l=w(),s=u(k),m=u(C);a.useEffect(()=>{l(A(r.id))},[r.id]);const n=()=>{var t;if(o)if(m.find(d=>(d==null?void 0:d.product._id)===s._id))g.error("Item Already added !");else{const j={productOwner:(t=s.owner[0])==null?void 0:t._id,product:s._id};l(T(j)),g.success("Cart Added Successfully")}else i(!0)},x=()=>{i(!1)};return e.jsxs("div",{className:"mx-auto max-w-7xl px-4 md:px-8 2xl:px-16",children:[e.jsxs("div",{className:"block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20",children:[e.jsx("div",{className:"col-span-5 grid grid-cols-2 gap-2.5",children:(s==null?void 0:s.images)&&(s==null?void 0:s.images.map((t,h)=>e.jsx("div",{className:"col-span-1 transition duration-150 ease-in hover:opacity-90",children:e.jsx("img",{src:t,alt:`Product Image ${h+1}`,className:"w-full object-cover"})},h)))}),e.jsxs("div",{className:"col-span-4 pt-8 lg:pt-0",children:[e.jsxs("div",{className:"mb-7 border-b border-gray-300 pb-7",children:[e.jsx("h2",{className:"text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl",children:s==null?void 0:s.title}),e.jsx("p",{className:"text-body text-sm leading-6  lg:text-base lg:leading-8",children:s==null?void 0:s.description}),e.jsxs("div",{className:"mt-5 flex items-center ",children:[e.jsxs("div",{className:"text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl",children:["$",s==null?void 0:s.price]}),e.jsxs("span",{className:"font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl",children:["$",s==null?void 0:s.discountPercentage]})]})]}),e.jsxs("div",{className:"border-b border-gray-300 pb-3  ",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-heading mb-2.5 text-base font-semibold capitalize md:text-lg",children:"size"}),e.jsx("ul",{className:"colors -mr-3 flex flex-wrap",children:["S","M","L","XL"].map(t=>e.jsx("li",{className:"text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm ",children:t},t))})]}),e.jsxs("div",{className:"mb-4 ",children:[e.jsx("h3",{className:"text-heading mb-2.5 text-base font-semibold capitalize md:text-lg",children:"color"}),e.jsx("ul",{className:"colors -mr-3 flex flex-wrap",children:["bg-orange-400","bg-pink-400","bg-violet-600","bg-red-500"].map(t=>e.jsx("li",{className:"text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm",children:e.jsx("span",{className:`block h-full w-full rounded ${t}`})},t))})]})]}),e.jsxs("div",{className:"space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32",children:[e.jsxs("div",{className:"group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12",children:[e.jsx("button",{className:"text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12",disabled:!0,children:"+"}),e.jsx("span",{className:"duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24",children:"1"}),e.jsx("button",{className:"text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12",children:"-"})]}),e.jsx("button",{onClick:n,className:"h-11 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Add to cart"})]}),e.jsx("div",{className:"py-6 ",children:e.jsxs("ul",{className:"space-y-5 pb-1 text-sm",children:[e.jsxs("li",{children:[e.jsx("span",{className:"text-heading inline-block pr-2 font-semibold",children:"SKU:"}),"N/A"]}),e.jsxs("li",{children:[e.jsx("span",{className:"text-heading inline-block pr-2 font-semibold",children:"Category:"}),e.jsx("a",{className:"hover:text-heading transition hover:underline",href:"#",children:s==null?void 0:s.category})]}),e.jsxs("li",{className:"productTags",children:[e.jsx("span",{className:"text-heading inline-block pr-2 font-semibold",children:"Tags:"}),e.jsx("a",{className:"hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline",href:"#",children:s==null?void 0:s.brand})]})]})}),e.jsxs("div",{className:"shadow-sm ",children:[e.jsxs("header",{className:"flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6",children:[e.jsx("h2",{className:"text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg",children:"Product Details"}),e.jsxs("div",{className:"relative flex h-4 w-4 flex-shrink-0 items-center justify-center",children:[e.jsx("div",{className:"bg-heading h-0.5 w-full rounded-sm"}),e.jsx("div",{className:"bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out"})]})]}),e.jsx("div",{children:e.jsx("div",{className:"pb-6 text-sm leading-7 text-gray-600 md:pb-7",children:"Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!."})})]}),e.jsx("div",{children:e.jsxs("header",{className:"flex cursor-pointer items-start flex-col justify-between border-t border-gray-300 py-5 transition-colors md:py-6",children:[e.jsx("h2",{className:"text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg",children:"Additional Information"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"h-10 w-10 flex-shrink-0",children:e.jsx("img",{className:"h-10 w-10 rounded-full object-cover",src:"https://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png",alt:""})}),e.jsxs("div",{className:"ml-4",children:[e.jsxs("div",{className:"text-md flex font-medium text-black",children:[e.jsx("p",{children:"sukraj chaudhary"}),e.jsx("span",{children:e.jsx(z,{size:24,color:"#2c14e1"})})]}),e.jsx("div",{className:"text-sm text-gray-500",children:"sukrajchaudhary90@gmail.com"})]})]})]})}),e.jsx("div",{className:"",children:e.jsx("header",{className:"flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6",children:e.jsx("h2",{className:"text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg",children:"Customer Reviews"})})})]})]}),e.jsx(S,{message:"You need to Login!",action:"Login",cancelOption:"Cancel",showModal:c,onClose:x})]})};export{_ as default};
