

import { apiWithAuth } from "../../service/api";
import { useEffect, useState } from "react";
import { Main } from './style'
import Card from '../../components/Card'


interface IPosts{
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
          user_id={post.user.id}
        />
      ))}
    </Main>

  );
}

export default Home;
