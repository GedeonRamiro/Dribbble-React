import { useGlobalState, IAuth } from "context/GlobalContext"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { apiWithAuth } from "_common/services/api"
import UsersView from "./UsersView"
import { useUsersState } from '../context/UsersContext'



export interface IUsers {
    id: string
    name: string
    bio: string
    email: string
  }

const Users = () => {
    
    const { setUsersState }  = useUsersState() 
    const { usersState }  = useUsersState()
    console.log('CONTEXT: ', usersState)
    
    const { auth: { user: { id: idState }} } = useGlobalState() as {auth: IAuth}

    const [users, setUsers] = useState<IUsers[]>([] as IUsers[])

    useEffect(() => {

        const getUsers = async () => {
            try {
                const { data } = await apiWithAuth.get('/users')
                setUsers(data)
                setUsersState(data)
            } catch (error: any) {
                console.log({error})
                toast.error(error?.response?.data?.message)
            }
        }
        getUsers()

    }, [])


    return (
       <UsersView users={users} {...{idState}}  />
    )
}

export default Users