import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function UserList() {
    const navigate = useNavigate()

    const loginAdminInfo = useSelector((state: IStoreRoot) => state.user.userInfo)

    const userList: IUser[] = [
        { id: 1, name: "jack", age: 16 },
        { id: 2, name: "nancy", age: 18 }
    ]

    const handleGoUserDetail = (user: IUser) => {
        navigate(`/user-detail/${user.id}?name=${user.name}&age=${user.age}`)
    }

    return (
        <div className='user-list'>
            <div>当前登录用户: {loginAdminInfo.name}</div>
            {
                userList.map(item => {
                    return (
                        <div key={item.id} className="user-item">
                            <div>
                                ID: {item.id}, Name: {item.name}, Age: {item.age}
                            </div>
                            <div><button onClick={() => handleGoUserDetail(item)}>查看详情</button></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserList