import { FaGoogle, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import accountbg from 'assets/images/account-bg.jpg'
import logo from 'assets/images/logo.png'

const Account: React.FC = ( {children} ) => {
    return (
        <>
        <div className='relative flex font-Inter'>
            <div className='hidden lg:block'><img className='bg-cover' src={accountbg} alt='account' /></div>
            <div className='flex flex-col justify-center mx-auto'>
                <div className='block w-20 mx-4 mt-10 mb-6 lg:hidden'><img src={logo} alt='logo' /></div>
                <h6 className='mx-4 mb-6 text-2xl font-bold' >Entre para Dribbble</h6>
                <div className='flex justify-between mx-4'>
                    <div className='flex items-center justify-start w-56 px-4 text-sm text-white bg-blue-500 rounded-md cursor-pointer sm:w-60'>
                        <FaGoogle size={18} />
                        <p className='ml-8'>Inscreva-se no oogle</p>
                    </div>
                    <div className='flex items-center justify-center w-10 h-10 text-gray-500 bg-gray-200 rounded-md cursor-pointer '>
                        <FaTwitter size={18}/>
                    </div>
                    <div className='flex items-center justify-center w-10 h-10 text-gray-500 bg-gray-200 rounded-md cursor-pointer '>
                        <FaFacebookSquare size={19}/>
                    </div>
                </div>
                <div className='flex items-center mx-4 my-4'>
                    <div className='w-full mr-6 border-b-2'></div>
                    <div>Our</div>
                    <div className='w-full ml-6 border-b-2 '></div>
                </div>
                {children}
            </div>
        </div>
        
        </>
    )
}

export default Account