
import { Container } from './style'

interface IProps {
    title: string
    description: string
}

const Card: React.FC<IProps> = ( {title, description} ) => {
    return (
        <div>{title} - {description}</div>
    )
}

export default Card