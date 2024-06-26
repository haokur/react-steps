import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Button, { IExposeFunction } from "../../components/Button";

interface IUser {
    id: string,
    name: string,
    age: number,
}

const HomePage = function () {
    console.log(11111, "home.tsx::12行");

    useEffect(() => {
        getUserList()
    }, [])

    // 退出登录
    const navigate = useNavigate()

    // 获取用户列表
    const [userList, setUserList] = useState<IUser[]>([])
    const getUserList = () => {
        fetch('https://apifoxmock.com/m2/1967265-1456008-default/183574014?apifoxToken=meD3A0UHEeSKk8tHoVi6M3inyTcdKFig')
            .then(res => res.json())
            .then(res => {
                setUserList(res.data.list)
            })
    }

    const handleGoUserDetailPage = (user: IUser) => {
        let { id, age, name } = user
        navigate(`/user/detail/${id}?name=${name}&age=${age}`)
    }

    const buttonRef = useRef<IExposeFunction>(null)
    buttonRef.current?.doSomething()



    return (
        <div>
            <div>
                <Button config={{}} ref={buttonRef}></Button>
            </div>
            <h3>1.绑定navigate事件响应跳转</h3>
            <div className="user">
                <ul className="user-list">
                    {
                        userList.map(user => {
                            return <li key={user.id} className="user-item" onClick={() => handleGoUserDetailPage(user)}>{user.name}-{user.age}</li>
                        })
                    }
                </ul>
            </div>

            <h3>2.react-router-dom的Link链接跳转</h3>
            <div className="user">
                <ul className="user-list">
                    {
                        userList.map(user => {
                            return <li key={user.id} className="user-item">
                                <Link to={`/user/detail/${user.id}?name=${user.name}&age=${user.age}`}>{user.name}-{user.age}</Link>
                            </li>
                        })
                    }
                </ul>
            </div>

            <h3>3.a链接跳转</h3>
            <div className="user">
                <ul className="user-list">
                    {
                        userList.map(user => {
                            return <li key={user.id} className="user-item">
                                <a href={`?id=${user.id}#/user/detail/${user.id}?name=${user.name}&age=${user.age}`}>{user.name}-{user.age}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default HomePage