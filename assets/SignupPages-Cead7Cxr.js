import{u as h,r as l,a as o,s as j,S as b,b as N,_ as y,j as e,L as w,N as v,c as P,d as m,e as z,H as F,F as S}from"./index-CfAx32pH.js";import{A as C}from"./arrow-right-Je3Y1_Fw.js";const A=()=>{const i=h(),[a,x]=l.useState({userTypes:"",username:"",email:"",password:"",role:"",OrganizationsName:"",comformPassword:""}),[r,d]=l.useState({}),u=o(j),n=o(b),p=o(N),t=s=>{x({...a,[s.target.name]:s.target.value}),d({...r,[s.target.name]:""})},g=()=>{let s={};return a.userTypes||(s.userTypes="Please choose User Types"),a.userTypes==="organizations"&&!a.OrganizationsName&&(s.OrganizationsName="Please Enter Organization Name"),a.username?a.username.length<4?s.username="Username must be at least 4 characters":/^[a-zA-Z0-9_][a-zA-Z0-9_]*$/.test(a.username)||(s.username="Username must start with a letter, number, or underscore"):s.username="Username is Required.",a.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email)||(s.email="Invalid email address"):s.email="Email address is required",a.password?/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(a.password)||(s.password="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."):s.password="Password is required",a.password!==a.comformPassword&&(s.comformPassword="Passwords do not match"),d(s),Object.keys(s).length===0},f=s=>{s.preventDefault(),g()&&i(z(a))};return l.useEffect(()=>{n&&(n!=null&&n.error)&&y.error(n.error.message)},[i,n]),u?e.jsx(w,{}):e.jsxs(e.Fragment,{children:[p&&e.jsx(v,{to:"/login"}),e.jsx("section",{className:"rounded-md bg-[#F2F4F7]",children:e.jsx("div",{className:"flex items-center justify-center px-4 py-10 sm:px-6 sm:py-10 lg:px-8",children:e.jsxs("div",{className:"w-full max-w-md overflow-hidden border-2 p-6 mx-auto",children:[e.jsx("div",{className:"mb-2",children:e.jsx("img",{className:"h-9 rounded-full",src:P,alt:""})}),e.jsx("h2",{className:"text-2xl font-bold leading-tight text-black",children:"Sign up to create account"}),e.jsxs("p",{className:"mt-2 text-base text-gray-600",children:["Already have an account?"," ",e.jsx(m,{to:"/Login",title:"",className:"font-medium text-black transition-all duration-200 hover:underline",children:"Sign In"})]}),e.jsx("form",{onSubmit:f,className:"mt-8",children:e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-1",children:"Sign Up As"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("label",{className:"inline-flex items-center cursor-pointer",children:[e.jsx("input",{type:"radio",className:"form-radio",name:"role",value:"buyer",onChange:t}),e.jsx("span",{className:"ml-2",children:"Buyer"})]}),r&&e.jsx("p",{className:"text-red-600",children:r.role}),e.jsxs("label",{className:"inline-flex items-center cursor-pointer",children:[e.jsx("input",{type:"radio",className:"form-radio",name:"role",value:"provider",onChange:t}),e.jsx("span",{className:"ml-2",children:"Provider (Supplier)"})]})]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-1",children:"User Types"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("label",{className:"inline-flex items-center cursor-pointer",children:[e.jsx("input",{type:"radio",className:"form-radio",name:"userTypes",value:"individuals",onChange:t}),e.jsx("span",{className:"ml-2",children:"Individual"})]}),e.jsxs("label",{className:"inline-flex items-center cursor-pointer",children:[e.jsx("input",{type:"radio",className:"form-radio",name:"userTypes",value:"organizations",onChange:t}),e.jsx("span",{className:"ml-2",children:"Organization"})]})]})]}),(a==null?void 0:a.userTypes)==="organizations"&&e.jsxs("div",{children:[e.jsx("label",{htmlFor:"organizations",className:"text-base font-medium text-gray-900",children:"Organizations Name"}),e.jsx("div",{className:"mt-2",children:e.jsx("input",{className:"flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",type:"text",placeholder:"Organizations Name",name:"OrganizationsName",onChange:t})}),r&&e.jsx("p",{className:"text-red-600",children:r.OrganizationsName})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"text-base font-medium text-gray-900",children:"Full Name"}),e.jsxs("div",{className:"mt-2",children:[e.jsx("input",{className:`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${r.username?"border-red-600":""}`,type:"text",placeholder:"Full Name",name:"username",onChange:t}),r.username&&e.jsx("p",{className:"text-red-600",children:r.username})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"text-base font-medium text-gray-900",children:"Email address"}),e.jsxs("div",{className:"mt-2",children:[e.jsx("input",{className:`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${r.email?"border-red-600":""}`,type:"email",placeholder:"Email",name:"email",onChange:t}),r.email&&e.jsx("p",{className:"text-red-600",children:r.email})]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("label",{htmlFor:"password",className:"text-base font-medium text-gray-900",children:"Password"})}),e.jsxs("div",{className:"mt-2",children:[e.jsx("input",{className:`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${r.password?"border-red-600":""}`,type:"password",placeholder:"Password",name:"password",onChange:t}),r.password&&e.jsx("p",{className:"text-red-600",children:r.password})]}),e.jsx("p",{className:"ml-auto cursor-pointer font-md text-gray-900",children:e.jsx(m,{to:"/forget-password",children:"Forget Password ?"})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("label",{htmlFor:"password",className:"text-base font-medium text-gray-900",children:"Confirm Password"})}),e.jsxs("div",{className:"mt-2",children:[e.jsx("input",{className:`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${r.comformPassword?"border-red-600":""}`,type:"password",placeholder:"Confirm Password",name:"comformPassword",onChange:t}),r.comformPassword&&e.jsx("p",{className:"text-red-600",children:r.comformPassword})]})]}),e.jsx("div",{children:e.jsxs("button",{type:"submit",className:"inline-flex w-full items-center justify-center rounded-md bg-[#2A3342] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80",children:["Create Account ",e.jsx(C,{className:"ml-2",size:16})]})})]})})]})})})]})},E=()=>e.jsxs("div",{children:[e.jsx(F,{children:e.jsx(A,{})}),e.jsx(S,{})]});export{E as default};
