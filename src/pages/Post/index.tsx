import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { apiWithAuth } from "../../service/api"
import  InfoPost from "../../components/InfoPost"
import loadingg from '../../assets/images/loadingPage.svg'
import { Loading } from '../../components/Loading'


interface Istate {
    id: string
    user_id: string;
 }

 interface IPost {
    title: string
    description: string;
    image_url: string;
    user: {
        name: string;
    }
 }

const Post = () => {

    const {state} = useLocation<Istate>()
    const idState = state.id
    const userId = state.user_id

    
    const [infoPost, setInfoPost] = useState<IPost>()


    const getPost = async () => {
        const { data } = await apiWithAuth.get<IPost>(`/posts/${idState}`)
        setInfoPost(data)
    }



    useEffect(() => {
        getPost()
    }, )

    
    
    return (
        <>
        {infoPost ? (
            <InfoPost 
                title={infoPost?.title}
                description={infoPost?.description}
                image={infoPost?.image_url}
                user={infoPost?.user?.name}
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

export default Post