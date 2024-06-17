import{R as S,r as s,j as e,A as y}from"./index-D3PN5aAM.js";const w=S.forwardRef((t,o)=>{console.log(t,"RefChild.tsx::4行");const c=()=>{console.log("doSomething","RefChild.tsx::5行")};return s.useImperativeHandle(o,()=>({doSomething:c})),e.jsx("div",{children:"this is RefChild"})}),I="/react-starter/assets/pix-Cqf_tP2M.png",A=(t,o)=>{switch(o.type){case"increment":return{count:t.count+1};case"decrement":return{count:t.count-1};default:throw new Error}},L=()=>{console.log("函数组件重新执行----");const[t,o]=s.useState(0),[c,a]=s.useState(Date.now()),x=s.useMemo(()=>(console.log("重新计算doubleCount"),t*2),[t]);s.useEffect(()=>{const n=setTimeout(()=>{console.log(t,"common-hooks.tsx::21行"),o(h=>(console.log(h,"common-hooks.tsx::23行"),h+1))},0);return o(t+1),()=>{console.log("页面卸载,移除定时器"),clearTimeout(n)}},[]);const f=()=>{let n=document.getElementById("test-img");n&&(n.style.width="300px",n.style.height="300px")};s.useEffect(()=>{console.log("useEffect执行")}),s.useLayoutEffect(()=>{console.log("useLayoutEffect执行"),f()});const j=s.useCallback(()=>{console.log(t)},[]),C=s.useCallback(()=>{console.log(c)},[t]),i=s.useRef(null),p=()=>{var n;(n=i.current)==null||n.doSomething()},l=s.useRef(null),m=()=>{var n;(n=l.current)==null||n.focus()};let r=1;const d=s.useRef(1),g=()=>{r++,d.current++},[b,v]=s.useReducer(A,{count:0}),k=()=>{v({type:"increment"})},{appConfig:u,updateAppConfig:R}=s.useContext(y),E=()=>{R({isSidebarOpen:!u.isSidebarOpen})};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsxs("label",{children:["时间:",c]}),e.jsx("button",{onClick:()=>a(Date.now()),children:"更新时间"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"1.useState"}),e.jsxs("label",{children:["useState-",t]}),e.jsx("button",{onClick:()=>o(t+1),children:"设置count"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"2.useMemo"}),e.jsxs("label",{children:["doubleCount:",x]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"3.useCallback"}),e.jsx("button",{onClick:j,children:"测试useCallback"}),e.jsx("button",{onClick:C,children:"测试useCallback2"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"4.useRef"}),e.jsx(w,{ref:i}),e.jsx("button",{onClick:p,children:"执行RefChild的方法"}),e.jsxs("div",{children:[e.jsx("input",{type:"text",ref:l}),e.jsx("button",{onClick:m,children:"输入框聚焦"})]}),e.jsxs("div",{children:[e.jsxs("div",{children:["函数里常规变量:",r]}),e.jsxs("div",{children:["ref定义的变量:",d.current]}),e.jsx("button",{onClick:g,children:"递增"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"5.useEffectLayout Vs useEffect"}),e.jsx("div",{children:e.jsx("img",{src:I,id:"test-img"})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"6.useReducer"}),e.jsxs("div",{children:[e.jsxs("div",{children:["reducerInfo-",b.count]}),e.jsx("button",{onClick:k,children:"触发reducer的dispatch"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"7.useContext"}),e.jsxs("div",{children:[e.jsxs("div",{children:["appConfig-",""+u.isSidebarOpen]}),e.jsx("button",{onClick:E,children:"触发reducer的dispatch"})]})]})]})};export{L as default};