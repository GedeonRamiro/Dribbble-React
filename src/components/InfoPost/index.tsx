import { Container, TextDescription, TextName, Photo, PhotoProfile, InfoUser } from "./style"

 interface IPost {
    title?: string
    description?: string;
    image?: string;
    user?: string;
    
 }

const InfoPost: React.FC<IPost> = ({ title, description, image, user }) => {

    console.log(title)
    return (
        <Container>
            <InfoUser>
                <PhotoProfile>
                    <img src={`http://lorempixel.com/400/400/cats/${user}/`} />
                </PhotoProfile>
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