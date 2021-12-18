import { IPosts } from './Home'
import ContainerCard from "_common/components/ContainerCard"
import { FaHeart } from 'react-icons/fa'
import { BsEyeFill } from 'react-icons/bs'

import { Link } from 'react-router-dom'
import { IAuth, useGlobalState } from 'context/GlobalContext'

interface IProps {
    posts: IPosts[]
} 

const HomeView: React.FC<IProps> = ( { posts } ) => {

    const { auth: { user: { id: idState }} } = useGlobalState() as {auth: IAuth}

    return (
            <ContainerCard>
                 {posts.map((post) => (
                    <div className='my-2' key={post.id}>
                        <Link to={`/post/${post.id}`}>
                            <div className='duration-500 ease-in-out transform cursor-pointer hover:-translate-y-1 hover:scale-105'>
                                <img className='rounded-md shadow-lg ' src={post.image_url} alt={post.title} />
                            </div>
                        </Link>
                        <p className='my-1 text-gray-600'>{post.title}</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center cursor-pointer '>
                                <Link  to={{ pathname: `${post.user.id === idState ? '/profile' : `/profile/${post.user.id}`}`, state: post.user.id }} >
                                    <img className='w-8 duration-500 ease-in-out transform bg-pink-100 rounded-full shadow-lg hover:scale-105 hover:rotate-12' src={`https://robohash.org/${post.user.name}/`} alt={post.user.name} />
                                </Link> 
                                <div className='ml-2 text-sm font-semibold text-gray-600'>{post.user.name}</div>
                            </div>
                            <div className='flex text-sm text-gray-400'>
                                <div className='flex items-center mx-1'>
                                    <FaHeart className="cursor-pointer" />
                                    <p className='ml-1 font-semibold text-gray-600'>205</p>    
                                </div>
                                <div className='flex items-center mx-1'>
                                    <BsEyeFill className="cursor-pointer" />
                                    <p className='ml-1 font-semibold text-gray-600'>28.2k</p>    
                                </div>
                            </div>
                        </div>
                    </div>
            ))}
            </ContainerCard>
    )
}

export default HomeView