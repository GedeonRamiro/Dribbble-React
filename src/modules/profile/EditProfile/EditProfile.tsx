import { useLocation } from 'react-router'
import EditProfileView from './EditProfileView'
import { IAuth, useGlobalState } from 'context/GlobalContext'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import toast from 'react-hot-toast'
import { apiWithAuth } from '_common/services/api'

export interface IProfile {
    id: string
    name: string
    bio: string
    password: string
  }

const EditProfile = () => {

    const history = useHistory()
    const { state: profileState } = useLocation<IProfile>()
    const { auth : { user: { id: idState }} } = useGlobalState() as {auth: IAuth}

    const [profile, setProfile] = useState<IProfile>({} as IProfile)
    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    
  
    const getProfile = async () => {
        
        try {
            const { data } = await apiWithAuth.get<IProfile>(`/users/${idState}`)
            setProfile(data)
            
        } catch (error: any) {
            if(error?.response?.data?.statusCode === 400){
                history.push('/')
                toast.error('Usuário não encontrado!')
            }
        }
        
    }
    
    useEffect(() => {
            if(!profileState){
                getProfile()
            }
            setProfile(profileState)

         // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

            

    return (
        <EditProfileView profile={profile}  {...{name, setName, bio, setBio}}  />
    )
}

export default EditProfile