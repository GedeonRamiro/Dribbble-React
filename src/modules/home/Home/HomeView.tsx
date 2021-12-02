import { IPosts } from './Home'
import ContainerCard from "_common/components/ContainerCard"

interface IProps {
    posts: IPosts[]
} 

const HomeView: React.FC<IProps> = ( { posts } ) => {

    return (
            <ContainerCard {...{posts}} />
    )
}

export default HomeView