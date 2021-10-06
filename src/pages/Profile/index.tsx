import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import CardProfile from "../../components/CardProfile"
import { apiWithAuth } from "../../service/api"
import loadingg from '../../assets/images/loadingPage.svg'
import { Loading } from '../../components/Loading'

interface IProfile{
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


interface Istate {
    userId: string;
 }


const Profile = () => {

    const { state } = useLocation<Istate>()
    const userId = state.userId

    const [profile, setProfile] = useState<IProfile>()

    const getPrtofile = async () => {
        const { data } = await apiWithAuth.get(`/users/${userId}`)
        setProfile(data)
    }

    useEffect(() => {
        getPrtofile()
    }, )
    


    return (
      <>
      {profile ? (
        <CardProfile
          name={profile?.name}
          bio={profile?.bio}  
          posts={profile?.posts}
          userId={userId}
        
        />

      ) : (
        <Loading>
            <img src={loadingg} alt="loading" />
        </Loading>
      )}
      </>
    )
}

export default Profile