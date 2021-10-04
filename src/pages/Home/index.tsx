
import { useGlobalState } from "../../context/GlobalContext";
import { apiWithAuth } from "../../service/api";
import NavBar from '../../components/NavBar'
import { useEffect, useState } from "react";
import { Main } from './style'
import Card from '../../components/Card'

interface IUserPost{
  user: {
    id: string,
    title: string
    description: string
    image_url: string
    image_id: string
    created_at: string
    updated_at: string
  }
} 

interface IPosts{
  id: string,
  title:string,
  description: string
  image_url: string
  image_id: string
  user:IUserPost,
  created_at: string
  updated_at: string
}


const Home = () => {

  const { auth } = useGlobalState()
  //console.log(auth)

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
    <>
    <NavBar>
        <img src={`http://lorempixel.com/400/400/cats/${auth?.user.name}/`} />
    </NavBar>

    <Main>
      { posts.map( post => (
        <Card
          key={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
    </Main>
    </>

  );
}

export default Home;
