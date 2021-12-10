
import { Link } from 'react-router-dom'
import { IUsers } from './Users'

interface IProps {
    users: IUsers[]
    idState: string
}


const UsersView: React.FC<IProps> = ({users, idState}) => {
    

    return (
        <>
            <div className="grid my-20 gap-y-14 gap-x-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {users.map(user => (
                    <div key={user.id} className="relative flex flex-col items-center justify-center pt-20 bg-gray-100 rounded-md shadow-md hover:shadow-lg">
                        <div className="absolute z-10 p-2 transition bg-gray-400 rounded-full shadow-lg w-28 h-28 -top-8 hover:shadow-xl">
                            <div className="w-full h-full overflow-auto bg-black rounded-full">
                                <img src={`https://robohash.org/${user.name}`} alt={user.name} className='bg-pink-400' />
                            </div>
                        </div>
                        <div className='py-4 tracking-wider text-center'>
                            <h4 className="text-lg font-semibold ">{user.name}</h4>
                            <h3 className="">{user.bio ? user.bio : <br/>}</h3>
                            <p className="">{user.email}</p>
                        </div>
                        <div className='w-full '>
                            <Link className=''  to={{ pathname: `${user?.id === idState ? '/profile' : `/profile/${user?.id}`}`, state: user?.id }} >
                                <button className='min-w-full p-2 tracking-widest text-white uppercase duration-300 bg-gray-400 outline-none rounded-b-md hover:bg-pink-500'>perfil</button>
                            </Link> 
                        </div>
                    </div>
            ))} 
           </div>
           
        </>
      
    )
}

export default UsersView