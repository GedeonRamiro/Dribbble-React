
import { useGlobalState } from "../../context/GlobalContext";
import { apiWithAuth } from "../../service/api";
import NavBar from '../../components/NavBar'
import { useEffect, useState } from "react";
import { Main } from './style'
import Card from '../../components/Card'


interface IPosts{
  id: string,
  title:string,
  description: string
  image_url: string
  image_id: string
  user: {
    id: string,
    name: string
    bio: string
    email: string
    created_at: string
    updated_at: string
  }
  created_at: string
  updated_at: string
  
}


const Home = () => {

  const { auth } = useGlobalState()
  console.log(auth?.user.name)

  const [posts, setPosts] = useState<IPosts[]>([])
  console.log(posts)

  const getPosts = async () => {
    const { data } = await apiWithAuth.get<IPosts[]>('/posts')
    setPosts(data) 
  }

  useEffect(() => {
    getPosts()
  }, [])


  return (

    <Main>
      { posts.map( post => (
        <Card
          key={post.id}
          id={post.id}
          image_url={post.image_url}
          title={post.title}
          username ={post.user.name}
        />
      ))}
    </Main>

  );
}

export default Home;
