import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { apiWithAuth } from "_common/services/api"
import UsersView from "./UsersView"

export interface IUsers {
    id: string
    name: string
    bio: string
    email: string
  }

const Users = () => {

    const [users, setUsers] = useState<IUsers[]>([] as IUsers[])

    useEffect(() => {

        const getUsers = async () => {
            try {
                const { data } = await apiWithAuth.get('/users')
                setUsers(data)
            } catch (error: any) {
                console.log({error})
                toast.error(error?.response?.data?.message)
            }
        }
        getUsers()

    }, [])


    return (
       <UsersView users={users}  />
    )
}

export default Users