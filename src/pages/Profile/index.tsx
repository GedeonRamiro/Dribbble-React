import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import CardProfile from "../../components/CardProfile"
import { apiWithAuth } from "../../service/api"

interface IProfile{
  id: string
  name: string
  bio: string
  email: string
  posts: [
    {
      id: string
      image_url: string,

    }
  ],
}


interface Istate {
    userId: string;
 }


const Profile = () => {

    const { state } = useLocation<Istate>()
    const userId = state.userId
    console.log("ID post: ", userId)

    const [profile, setProfile] = useState<IProfile>()

    const getPrtofile = async () => {
        const { data } = await apiWithAuth.get(`/users/${userId}`)
        setProfile(data)
    }

    useEffect(() => {
        getPrtofile()
    }, [])
    


    return (
        <CardProfile
          name={profile?.name}
          bio={profile?.bio}  
          posts={profile?.posts}
          userId={userId}
        
        />
    )
}

export default Profile