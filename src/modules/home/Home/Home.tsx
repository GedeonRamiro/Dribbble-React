import HomeView from './HomeView'
import { apiWithAuth } from '_common/services/api'
import { useState, useEffect } from 'react'
import useDebounce from '_common/hooks/useDebounce'

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
    const [searchTerm, setSerachTerm] = useState('');
    const [filterPosts, setFilterPosts] = useState([])

    const debouncedSearchTerm = useDebounce(searchTerm)

    const handleChangeSearchTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSerachTerm(event.target.value);
    } 
  
    useEffect(() => {
        const getPosts = async () => {
            const { data } = await apiWithAuth.get('/posts')
            setPosts(data)
            setFilterPosts(data)
        }

        getPosts()
        
    }, [debouncedSearchTerm, setFilterPosts])

    useEffect(() =>{
        const result = posts.filter(
          (post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()) 
        )

      setPosts(result)
      
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[filterPosts])


    return (
         <HomeView posts={posts} {...{handleChangeSearchTerm, searchTerm}} />
    )
} 

export default Home