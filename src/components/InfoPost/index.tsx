import { Link } from "react-router-dom"
import { Container, TextDescription, TextName, Photo, PhotoProfile, InfoUser } from "./style"


 interface IPost {
    title?: string
    description?: string;
    image?: string;
    user?: string;
    userId: string
    
 }

const InfoPost: React.FC<IPost> = ({ userId, title, description, image, user }) => {

    return (
        <Container>
            <InfoUser>
                <Link to={{
                    pathname: '/profile',
                    state: {userId}

                }}>
                    <PhotoProfile>
                        <img src={`http://lorempixel.com/400/400/cats/${user}/`} alt={user} />
                    </PhotoProfile>
                </Link>
                <TextName>
                    <h1>{title}</h1>
                    <h2>{user}</h2>
                </TextName>
            </InfoUser>  
            <Photo>
                    <img src={image} alt={title} />
            </Photo>    
            <TextDescription>
                {description}
            </TextDescription>
        </Container>
    )
}

export default InfoPost