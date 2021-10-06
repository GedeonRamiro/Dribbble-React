
import { Link } from 'react-router-dom'
import { Container, ImgPost, InfoPost } from './style'


interface IProps {
    id: string
    username: string
    title: string
    image_url: string
    user_id: string
}

const Card: React.FC<IProps> = ( {id, user_id, username, title, image_url} ) => {

    return (
        <Container>
            <Link to={{
                    pathname: '/post', 
                    state: {id, user_id}
                }}>
                <ImgPost src={image_url} />
            </Link>
            <InfoPost>
                <img src={`http://lorempixel.com/400/400/cats/${username}/`} />
                <h1>{title}</h1>
            </InfoPost> 
        </Container>
    )
}

export default Card