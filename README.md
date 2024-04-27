# React开发

### 1.使用vite命令创建项目

```
npm init vite@latest
```

依次输入或者选择:
```
✔ Project name: … react-steps
✔ Select a framework: › React
✔ Select a variant: › TypeScript
```

安装依赖:
cnpm install

执行:
npm run dev

### 2.删除不必要的文件和代码,调整成日常实际开发项目结构
src 目录下结构如下:

```
--src/
----assets/
----components/
----pages/
----styles/
------basic.scss
----App.tsx
----main.tsx
----vite-env.d.ts
```

### React基本用法和写法
```tsx
import { ChangeEvent, useState } from "react"

function App() {
  const formTitle = "React管理中心"

  const [loginForm, setLoginForm] = useState({
    accout: "admin",
    password: ""
  })

  const handleLoginFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setLoginForm({ ...loginForm, [name]: value })
  }

  const handleLoginSubmit = () => {
    console.log(loginForm, "登录表单信息");
  }

  return (
    <>
      <h1>{formTitle}</h1>
      <div><input type="text" name="accout" value={loginForm.accout} placeholder="请输入账号" onChange={handleLoginFormChange} /></div>
      <div><input type="password" name="password" value={loginForm.password} placeholder="请输入密码" onChange={handleLoginFormChange} /></div>
      <div>
        <button onClick={handleLoginSubmit}>登录</button>
      </div>
    </>
  )
}

export default App
```

以上代码演示了:
* 变量怎么渲染到对应DOM位置
* 表单值的绑定以及输入后的更新操作,类似vue的v-model
* 事件的绑定和触发

### 3.引入路由,将刚写的登录表单从App.tsx移动到pages/login下
1. 安装路由依赖:
```
cnpm install react-router-dom --save
```

2. 在src/App.tsx中引入路由:
```tsx
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from "./pages/login/login"
import "./styles/basic.scss"

function App() {
  return (
    <Router>
      <div>
        <Link to="/login">跳转登录</Link>
      </div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
```

3. pages/login/login.tsx
```tsx
import React from 'react';

interface ILoginFormState {
    accout: string,
    password: string
}
interface ILoginPageState {
    formTitle: string,
    loginForm: ILoginFormState
}

class LoginPage extends React.Component {
    state: ILoginPageState = {
        formTitle: "React管理中心",
        loginForm: {
            accout: "admin",
            password: ""
        }
    }

    componentDidMount(): void {
        console.log('componentDidMount----');
        this.setState({
            "formTitle": "React管理中心新"
        })
    }

    handleLoginFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        this.setState((prevState: ILoginPageState) => ({
            ...prevState,
            loginForm: {
                ...prevState.loginForm,
                [name]: value,
            },
        }));
    }

    handleLoginSubmit = () => {
        console.log(this.state.loginForm, "登录表单信息");
    }

    render(): React.ReactNode {
        const { formTitle, loginForm } = this.state
        return (
            <div>
                <h1>{formTitle}</h1>
                <div>
                    <div><input type="text" name="accout" value={loginForm.accout} placeholder="请输入账号" onChange={this.handleLoginFormChange} /></div>
                    <div><input type="password" name="password" value={loginForm.password} placeholder="请输入密码" onChange={this.handleLoginFormChange} /></div>
                </div>
                <div>
                    <button onClick={this.handleLoginSubmit}>登录</button>
                </div>
            </div>
        )
    }
}

export default LoginPage
```
页面级的组件,因为可能需要监听生命周期,所以都统一使用类组件.

#### 函数组件
```tsx
import { useState } from "react"
function FuncCpt(){
    const [title,setTitle] = useState("默认标题")
    return (
        <div>
            <div>{title}</div>
            <button onClick={()=>setTitle("新标题")}>修改标题</button>
        </div>
    )
}
```

#### 类组件
```tsx
import React from "react"
class ClassCpt extends React.Component {
    state = {
        title: "默认标题"
    }

    setTitleData = () => {
        this.setState({
            title: "新标题"
        })
    }
    render(): React.ReactNode {
        return (
            <div>
                <div>{this.state.title}</div>
                <button onClick={()=>this.setTitleData()}
                    修改标题
                </button>
            </div>
        )
    }
}
```
以上,同样的效果,函数组件和类组件的定义和处理响应数据`title`的方式的不一样

