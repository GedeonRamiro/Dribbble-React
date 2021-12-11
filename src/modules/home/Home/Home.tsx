import HomeView from './HomeView'
import { apiWithAuth } from '_common/services/api'
import { useState, useEffect } from 'react'

export interface IPosts{
    id: string,
    title:string,
    image_url: string
    user: {
      id: string,
      name: string
    }
    
  }

const Home = () => {

    const [posts, setPosts] = useState<IPosts[]>([])
  
    useEffect(() => {
        const getPosts = async () => {
            const { data } = await apiWithAuth.get('/posts')
            setPosts(data)
        }

        getPosts()
        
    }, [])


    return (
         <HomeView posts={posts} />
    )
} 

export default Home