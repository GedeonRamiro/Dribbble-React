import ProfileView from './ProfileView'
import { useHistory, useRouteMatch } from "react-router-dom"
import { useGlobalState } from 'context/GlobalContext'
import { IAuth } from 'context/GlobalContext'
import { useEffect, useState } from 'react'
import { apiWithAuth } from '_common/services/api'
import toast from 'react-hot-toast'


export interface IProfile {
    id: string
    name: string
    bio: string
    email: string
    posts: [
      {
        id: string
        image_url: string,
        title: string
  
      }
    ],
  }

 interface MatchParams {
    id: string;
  }



const Profile = () => {

    const RouteMatch = useRouteMatch<MatchParams>("/profile/:id");
    const idParams = RouteMatch?.params?.id
    
    const history = useHistory()

    const { auth: 
            { user: 
                { id: idState } 
            } 
        } = useGlobalState() as {auth: IAuth}

    const isMyProfile = !idParams || idParams === idState

    const [profile, setProfile] = useState<IProfile>({} as IProfile)
    const [myProfile, setMyProfile] = useState<IProfile>({} as IProfile)
    const [modal, setModal] = useState(false)


    useEffect(() => {
        const getProfile = async () => {
            
            try {
                const { data } = await apiWithAuth.get<IProfile>(isMyProfile ? '/profile' : `/users/${idParams}`)
                setProfile(data)
                
            } catch (error: any) {
                if(error?.response?.data?.statusCode === 400){
                    history.push('/')
                    toast.error('Usuário não encontrado!')
                }
            }
                
        }
        getProfile()

    const myProfile = async () => {
        try {
            const { data } = await apiWithAuth.get<IProfile>(`/users/${idState}`)
            setMyProfile(data)

        } catch (error: any) {
            if(error?.response?.data?.statusCode === 400){
                history.push('/')
                toast.error('Erro Perfil')
            }
        }
    }   
    
    myProfile()
    

     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idParams])

    if( profile.id === myProfile.id){
        profile.posts = myProfile.posts 
    } 


    const openModal = () => setModal(true)

    const removeProfile = async () => {
        try {
            await apiWithAuth.delete('/profile')
            toast.success('perfil excluir com sucesso!')
            history.push('/login')
        } catch (error: any) {
            console.log({error})
            toast.error('Erro ao excluir perfil!')
            setModal(false)
            //toast.error(error?.response?.data?.message)
        }
    }

  
    return (
        <>
            <ProfileView profile={profile} {...{isMyProfile, removeProfile, modal, openModal, setModal}} />
        </>
    )
}

export default Profile