import { useRouteMatch } from 'react-router'
import { apiWithAuth } from '_common/services/api';
import { useEffect, useState } from 'react'
import PostView from './PostView'
import { useHistory } from 'react-router-dom';
import { IAuth, useGlobalState } from 'context/GlobalContext'

interface MatchParams {
    id: string;
  }

export interface IPost {
    title: string
    description: string;
    image_url: string;
    user: {
        id: string
        name: string;
        image_url: string
        bio: string
    }
 }

const Post = () => {
    const RouteMatch = useRouteMatch<MatchParams>("/post/:id");
    const history = useHistory()

    const idParams = RouteMatch?.params?.id

    const { auth: { user: { id: idState }} } = useGlobalState() as {auth: IAuth}

    const [postInfo, setpostInfo] = useState<IPost>({} as IPost) 

    console.log(postInfo)

    useEffect(() => {

        const getPost = async () => {
       
            try {
                const { data } = await apiWithAuth.get<IPost>(`/posts/${idParams}`)
                setpostInfo(data)
            
            } catch (error: any) {
                if(error?.response?.data?.statusCode === 400){
                    history.push('/')
                }
        }
    }

        getPost()

      // eslint-disable-next-line react-hooks/exhaustive-deps        
     }, [idParams])

    return (
        <PostView postInfo={postInfo} {...{idState}} />
    )
}

export default Post