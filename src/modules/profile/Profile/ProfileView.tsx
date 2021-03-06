import { IProfile } from './Profile'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { BsEyeFill } from 'react-icons/bs'
import  Modal from '_common/components/Modal'
import { RiEditBoxFill } from 'react-icons/ri'
import { MdDeleteSweep } from 'react-icons/md'
import ContainerCard from '_common/components/ContainerCard'




interface IProps {
    profile: IProfile
    isMyProfile: boolean
    removeProfile: (ev: React.MouseEvent<HTMLButtonElement>) => void
    removePost: (ev: React.MouseEvent<HTMLButtonElement>) => void
    modalProfile: boolean
    setModalProfile: (modal: boolean) => void
    modalPost: boolean
    setModalPost: (modalPost: boolean) => void
    openModalProfile: () => void
    openModalPost: (id: string, title: string) => void
    onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void
    titlePost: string

}

const ProfileView: React.FC<IProps> = ( { 
    profile,
    isMyProfile, 
    removeProfile, removePost,
    modalProfile, setModalProfile, openModalProfile, 
    modalPost, setModalPost, openModalPost,
    titlePost
} ) => {      



    return (
        <>
        {modalProfile &&  
            <Modal 
                title='Tem certeza que quer deletar sua conta? Este processo não pode ser desfeito'
                onClick={removeProfile} 
                textBtn='Deletar'
                isOpenModal={setModalProfile}
                
            /> }
        {modalPost &&  
            <Modal 
                title='Tem certeza que quer deletar o post?'
                onClick={removePost} 
                textBtn='Deletar'
                isOpenModal={setModalPost}
                titlePost={titlePost}
                
            /> }
            <div className='relative flex-wrap my-20 md:flex md:justify-between'>
                {profile.name && (
                    <>
                        <div className='relative flex order-1 object-contain md:order-2 md:mr-32'>
                            <img className='top-0 right-0 z-10 mt-10 mr-32 ' src={`https://picsum.photos/600/400?${profile.name}`} alt={profile.name} />
                            <div className='absolute top-0 right-0 w-40 h-64 mt-4 bg-pink-500 sm:mb-0 sm:w-72 sm:h-96'></div> 
                        </div>
                        <div className='order-2 mt-10 md:max-w-lg md:mt-0 md:order-1'>
                            <img className='w-20 bg-pink-100 rounded-full' src={`https://robohash.org/${profile.name}/`} alt={profile.name} />
                            <h6 className='text-xl font-semibold my-y-2 md:my-4 md:text-4xl '>{profile.name}</h6>
                            <h3 className='text-3xl font-bold md:text-5xl'>{profile.bio}</h3>
                                {isMyProfile && (
                                <>
                                    <Link to={{ pathname:'/editprofile', state: profile }} >
                                        <button 
                                            className='px-3 py-2 mt-6 text-xs font-semibold duration-300 bg-gray-100 border rounded-md outline-none md:mt-10 md:text-sm md:px-4 md:py-2 hover:shadow'>
                                            Editar Perfil
                                            
                                        </button>
                                    </Link>
                                    <span className='mx-3 text-xl text-pink-500'> | </span>
                                    <button 
                                        className='px-3 py-2 mt-6 text-xs font-semibold duration-300 bg-gray-100 border rounded-md outline-none md:mt-10 md:text-sm md:px-4 md:py-2 hover:shadow' 
                                        onClick={openModalProfile}>
                                        Excluir Perfil
                                    </button>
                                </>
                                )}
                        </div>
                    </>
                )}
            </div>

            {profile.posts &&  (
                 <ContainerCard>
                    {profile.posts.map(post => (
                        <div className='my-2' key={post.id}>
                            <Link to={`/post/${post.id}`}>
                                <div className='duration-500 ease-in-out transform cursor-pointer hover:-translate-y-1 hover:scale-100'>
                                    <img className='rounded-md shadow-lg ' src={post.image_url} alt={post.title} />
                                </div>
                            </Link>
                            <div className='flex justify-between'>
                             <p className='my-1 text-gray-600'>{post.title}</p>
                                <div className='flex items-center justify-between text-sm text-gray-400'>
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
                           {isMyProfile && (
                            <>
                                <div className='flex items-center'>
                                    <Link to={{ pathname: `/upload`, state: post }}>
                                        <button className='flex items-center p-1 text-white bg-blue-500 rounded outline-none'>
                                            <span className='mr-1 text-sm'>Editar</span>
                                            <RiEditBoxFill  />
                                        </button>
                                    </Link>
                                    <span className='mx-3 text-xl text-gray-800'> | </span>
                                    <button key={post.id} className='flex items-center p-1 text-white bg-red-500 rounded outline-none' onClick={() => openModalPost(post.id, post.title)} >
                                        <span className='mr-1 text-sm'>Deletar</span>
                                        <MdDeleteSweep size={20} />
                                    </button>
                                </div>
                           </>
                           )}
                    </div>
                    ))}
                </ContainerCard>
            )} 
              
            {profile.posts && profile.posts.length < 1 && (
                <div className='flex flex-col items-center'>
                     <div className='mb-10 text-lg font-semibold text-center'>Nenhum post cadastrado</div>
                 </div>
            )}

            {profile.posts && profile.posts.length < 1 && isMyProfile && (
               <div className='flex items-center justify-center mb-10'>
                    <p className='mr-2'>Ainda não tem post?</p>
                    <Link to='/upload'>
                        <button className='p-1 font-semibold bg-gray-200 border rounded ai animate-pulse'>click aqui!</button>
                    </Link>
                </div>
            )}

            
               
           
        </>    
    )
}

export default ProfileView