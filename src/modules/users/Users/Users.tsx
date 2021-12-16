import { useGlobalState, IAuth } from "context/GlobalContext"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { apiWithAuth } from "_common/services/api"
import UsersView from "./UsersView"
import useDebounce from '_common/hooks/useDebounce'


export interface IUsers {
    id: string
    name: string
    bio: string
    email: string
  }

const Users = () => {
    
    const { auth: { user: { id: idState }} } = useGlobalState() as {auth: IAuth}

    const [users, setUsers] = useState<IUsers[]>([] as IUsers[])
    const [searchTerm, setSerachTerm] = useState('');
    const [filterUsers, setFilterUsers] = useState([])

    const debouncedSearchTerm = useDebounce(searchTerm)

    const handleChangeSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSerachTerm(event.target.value);
    }

    useEffect(() => {
        
        const getUsers = async () => {
            try {
                const { data } = await apiWithAuth.get('/users')
                setUsers(data)
                setFilterUsers(data)
            } catch (error: any) {
                console.log({error})
                toast.error(error?.response?.data?.message)
            }
        }
        getUsers()
        
    }, [debouncedSearchTerm, setFilterUsers])
    

    useEffect(() => {
       
        if(users){
            const result = users.filter(
                (user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()) 
            )
            console.log('debouncedSearchTerm', result)    
            setUsers(result)
        };

    },[filterUsers])


    return (
       <UsersView users={users} {...{idState, handleChangeSearchTerm}}  />
    )
}

export default Users