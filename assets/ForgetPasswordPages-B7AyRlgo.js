import{r as l,u as h,a as o,E as g,k as p,_ as f,j as e,c as j,d as b,R as y,H as N,F as v}from"./index-CfAx32pH.js";import{A as w}from"./arrow-right-Je3Y1_Fw.js";const E=()=>{const[a,d]=l.useState({email:""}),[t,i]=l.useState({}),n=h(),r=o(g),c=o(p),m=s=>{d({...a,[s.target.name]:s.target.value}),i({...t,[s.target.name]:""})},x=()=>{let s={};return a.email||(s.email="Email is Required."),i(s),Object.keys(s).length===0},u=s=>{s.preventDefault(),x()&&n(y(a))};return l.useEffect(()=>{r&&f.error(r.error.message)},[n,r]),e.jsx("section",{className:"rounded-md  bg-[#F2F4F7] ",children:e.jsx("div",{className:"flex items-center justify-center    px-4 py-24 sm:px-6 sm:py-24 lg:px-8",children:e.jsxs("div",{className:"w-full max-w-md overflow-hidden border-2 p-6 mx-auto",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{className:"h-9 rounded-full",src:j,alt:""})}),e.jsx("h2",{className:"text-2xl font-bold leading-tight text-black",children:"Forget Your Password."}),e.jsxs("p",{className:"mt-2text-sm text-gray-600 ",children:["Try Again?"," ",e.jsx(b,{to:"/Login",title:"",className:"font-semibold text-black transition-all duration-200 hover:underline",children:"SIGN IN"})]}),e.jsx("form",{onSubmit:u,className:"mt-8",children:e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsxs("label",{htmlFor:"email",className:"text-base font-medium text-gray-900",children:[" ","Email address"," "]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("input",{className:`
                    ${t.email?"border-red-700":""}
                    flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50`,type:"email",placeholder:"Email",id:"email",name:"email",onChange:m}),t&&e.jsx("p",{className:"text-red-700",children:t.email})]})]}),e.jsxs("div",{children:[e.jsxs("button",{type:"submit",disabled:a.value==="",className:"inline-flex w-full items-center justify-center rounded-md bg-[#2A3342] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80",children:["Sent ",e.jsx(w,{className:"ml-2",size:16})]}),c&&e.jsx("p",{className:"text-green-600 font-medium",children:"Reset Link has been Sent SuccessFully"})]})]})})]})})})},S=()=>e.jsxs("div",{children:[e.jsx(N,{children:e.jsx(E,{})}),e.jsx(v,{})]});export{S as default};
