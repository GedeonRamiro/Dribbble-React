import { Link } from "react-router-dom"
import { Container, InfoProfile, InfoUser, PhotoProfile, Posts } from "./styles"

interface IProps {
    userId: string
    name?: string;
    bio?: string;
    posts?: [
      {
        image_url: string,
        id: string,
        title: string,
      }
    ]
}

const CardProfile: React.FC<IProps> = ({userId, name, bio, posts}) => {



    return(
       <Container>
           <InfoProfile>
            <InfoUser>
                <img src={`http://lorempixel.com/400/400/cats/${name}/`} alt={name}  />
                <h2>{name}</h2>
                <h1>{bio}</h1>
            </InfoUser>
            <PhotoProfile>
                <img src={`http://lorempixel.com/400/400/cats/${name}/`} alt={name} />
            </PhotoProfile>
           </InfoProfile>
           <Posts>
            {posts && posts.map(post => (
                <Link to={{
                    pathname: '/post',
                    state: {id: post.id, user_id: userId}
                   
                }} key={post.id}>
                    <img src={post.image_url} alt={post.title} />
                </Link>

             
            ))} 
           </Posts>
       </Container>
    )
}

export default CardProfile