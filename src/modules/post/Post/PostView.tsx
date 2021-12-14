
import { Link } from 'react-router-dom'
import { IPost } from './Post'
import { AiFillSave } from 'react-icons/ai'
import { AiFillLike } from 'react-icons/ai'
import formatDate from '_common/utils/formatDate'

interface IProps {
    postInfo: IPost
    idState: string
} 

const PostView:React.FC<IProps> = ( {postInfo, idState} ) => {


    return (
        <>
        {postInfo.title && (
            <div className='flex items-center justify-center my-20'>
                <div className='flex flex-col lg:w-8/12'>
                    <div className='flex justify-between md:justify-around'>
                        <div className='flex items-center'>
                            <div>
                                <Link  to={{ pathname: `${postInfo.user?.id === idState ? '/profile' : `/profile/${postInfo.user?.id}`}`, state: postInfo.user?.id }} >
                                    <img className='bg-pink-100 rounded-full shadow-lg w-14' src={`https://robohash.org/${postInfo.user?.name}/`} alt={postInfo.user?.name} />
                                </Link> 
                            </div>
                            <div className='ml-3'>
                                <h1 className='font-semibold'>{postInfo?.title}</h1>
                                <p>{postInfo.user?.name} {postInfo.user?.bio && ( '- '  + postInfo.user?.bio)}</p>
                            </div>
                        </div>
                        <div className='flex items-center text-sm'>
                            <div className='flex items-center p-3 mx-1 font-semibold duration-200 transform bg-gray-100 rounded-lg cursor-pointer md:p-2 hover:bg-gray-200'>
                            <span className='hidden md:flex'>Save</span>
                            <AiFillSave className='ml-0 text-xl text-gray-800 md:text-base md:ml-2' /> 
                            </div>
                            <div className='flex items-center p-3 mx-1 font-semibold duration-200 transform bg-gray-100 rounded-lg cursor-pointer md:p-2 hover:bg-gray-200'>
                            <span className='hidden md:flex'>Like</span>
                            <AiFillLike className='ml-0 text-xl text-gray-800 md:text-base md:ml-2' /> 
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center my-10'>
                        <img className='bg-contain rounded' src={postInfo.image_url} alt={postInfo.title} />
                    </div>
                    <div className='flex text-sm leading-relaxed tracking-wide text-gray-500 lg:leading-relaxed md:text-base lg:text-base'>
                        <p className='mb-4'>{formatDate(new Date(postInfo.created_at))}</p>
                        {postInfo.created_at !== postInfo.updated_at && (
                            <>
                            <span className='mx-2 font-semibold'> | </span>
                            <p className='mb-4'> Atualizado { formatDate(new Date(postInfo.updated_at))}</p>
                            </>
                        )}
                    </div>
                        <h3 className='leading-relaxed tracking-wide text-gray-500 lg:leading-relaxed md:text-base lg:text-lg'>{postInfo.description}</h3>
                </div>
            </div>
        )}
        </>
    )
}

export default PostView