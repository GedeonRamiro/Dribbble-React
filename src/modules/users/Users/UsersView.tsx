
import { IUsers } from './Users'

interface IProps {
    users: IUsers[]
}


const UsersView: React.FC<IProps> = ({users}) => {
    
    console.log(users?.map(user => user.name))

    return (
        <>
            <div className="grid my-20 gap-y-14 gap-x-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {users.map(user => (
                    <div className="relative flex flex-col items-center justify-center pt-20 bg-gray-400 rounded-md shadow-md hover:shadow-lg">
                        <div className="absolute z-10 p-2 transition bg-gray-100 rounded-full shadow-lg w-28 h-28 -top-8 hover:shadow-xl">
                            <div className="w-full h-full overflow-auto bg-black rounded-full">
                                <img src={`https://robohash.org/${user.name}`} alt={user.name} className='bg-pink-400' />
                            </div>
                        </div>
                        <div className='py-4 tracking-wider text-center'>
                            <h4 className="text-lg font-semibold text-gray-100 ">{user.name}</h4>
                            <h3 className="text-gray-100 ">{user.bio ? user.bio : <br/>}</h3>
                            <p className="text-gray-100 ">{user.email}</p>
                        </div>
                        <div className='flex flex-wrap content-end w-full '>
                                <button className='min-w-full p-2 tracking-widest text-white uppercase duration-300 bg-gray-500 rounded-b-md hover:bg-pink-500'>perfil</button>
                        </div>
                    </div>
            ))} 
           </div>
           
        </>
      
    )
}

export default UsersView