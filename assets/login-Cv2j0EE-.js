import{r as n,U as i,u as c,j as s,L as m}from"./index-BerIFk4f.js";const g=()=>{n.useEffect(()=>{i.data&&o("/")},[]);const o=c(),[e,l]=n.useState({name:"jack",password:"123456"}),r=a=>{console.log(a,"login.tsx::22行"),l({...e,[a.target.name]:a.target.value})},t=()=>{localStorage.setItem("user",JSON.stringify(e)),o("/")};return s.jsx("div",{children:s.jsxs("div",{className:"login",children:[s.jsx("h1",{className:"login-title",children:"login"}),s.jsxs("div",{className:"form",children:[s.jsxs("div",{className:"form-row",children:[s.jsx("label",{className:"form-row__label",children:"账号:"}),s.jsx("input",{name:"name",className:"form-row__content",type:"text",value:e.name,onChange:r})]}),s.jsxs("div",{className:"form-row",children:[s.jsx("label",{className:"form-row__label",children:"密码:"}),s.jsx("input",{name:"password",className:"form-row__content",type:"password",value:e.password,onChange:r})]}),s.jsx("div",{className:"form-row form-action",children:s.jsx("button",{className:"form-action__item",onClick:t,children:"提交"})}),s.jsx("div",{className:"form-row form-more",children:s.jsx(m,{to:"/register",children:"没有账号，去注册"})})]})]})})};export{g as default};