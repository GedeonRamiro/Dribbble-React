import { Link } from 'react-router-dom'
import logo from 'assets/images/logo.png'
import Button from '_common/components/Button'
import { FaUpload } from 'react-icons/fa'



interface IProps {
  username?: string
  logout: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

const MainLayoutView: React.FC<IProps> = ( {children, logout, username} ) => {

    return (
      <div className='container mx-auto my-8'>
        <div className='mx-4'>
          <nav className='flex items-center justify-between'>
            
            <div className='block outline-none lg:hidden'>
              <button className="flex flex-col outline-none ">
                  <span className="w-6 h-2 border-b-2 border-gray-500"></span>
                  <span className="w-6 h-2 border-b-2 border-gray-500"></span>
                  <span className="w-6 h-2 border-b-2 border-gray-500"></span>
              </button>  
            </div> 
                
            <div className='flex text-base text-gray-500 lg:flex'>
                <Link to='/' className='pr-4 ml-10 lg:ml-0'>
                      <img className='w-20' src={logo} alt="logo" />
                </Link>
              <div className='hidden lg:flex'>
                  <Link to='/' className='mx-4'>
                      Inspiration
                  </Link>
                  <Link to='/' className='mx-4'>
                      Find Work
                  </Link>
                  <Link to='/' className='mx-4'>
                      Learn Design
                  </Link>
                  <Link to='/' className='mx-4'>
                      Go Pro
                  </Link>
                  <Link to='/' className='ml-4'>
                      Hire Designers
                  </Link>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <Link to={`/profile`} className='mr-4 text-gray-500 cursor-pointer'>
                <img className='w-10 bg-pink-400 border-2 border-pink-200 rounded-full md:w-11' src={`https://robohash.org/${username}/`} alt={username} />
              </Link>
              <Link to='/upload' className='p-2 mr-3 bg-pink-500 rounded'>
                    <FaUpload className='text-white duration-500 ease-in-out transform translate hover:-translate-y-1' />
              </Link> 
              <Button text='Logout' width='w-20' hover='bg-pink-400' onClick={logout}/>
            </div>
          </nav>
            {children}
        </div>
        <footer>
          <div className='text-center text-gray-500'>
            <h4>© 2021 Dribbble. All rights reserved.</h4>
            <p><span className='font-semibold text-black'>16,874,499</span> shots dribbbled</p>
          </div>
        </footer>
      </div>
    )
}

export default MainLayoutView