import { Container, TextDescription, TextName, Photo, PhotoProfile } from "./style"

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
              <PhotoProfile>
                <img src={`http://lorempixel.com/400/400/cats/${user}/`} />
              </PhotoProfile>
            <TextName>
                <h1>{user}</h1>
                <h1>{title}</h1>
            </TextName>
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