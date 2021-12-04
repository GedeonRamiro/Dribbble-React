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

    console.log(name)


     
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

    const getEditProfile = async () => {
        
        try {
            await apiWithAuth.put('/profile', {name})
            toast.success('Perfil atualizado com sucesso!')
            history.push('/profile')
        } catch (error: any) {
            console.log({error})
            toast.error('Campo nome nçao pode ser vazio!')
            //toast.error(error?.response?.data?.message)
        }
    }
    
    useEffect(() => {
            if(!profileState){
                getProfile()
            }
            setProfile(profileState)
            setName(profile.name)

         // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

            

    return (
        <EditProfileView profile={profile}  {...{name, setName, getEditProfile}}  />
    )
}

export default EditProfile