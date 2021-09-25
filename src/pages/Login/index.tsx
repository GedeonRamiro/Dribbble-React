import { Link } from 'react-router-dom'
import BackgroundAccount from '../../components/BackgroundAccount'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { Text } from './style'


const Login = () => {
    
    return (
        <>
            <Text>
                <h2>Not a member? <span> 
                        <Link style={{ textDecoration: 'none' }} to='/create-account'>
                            Sign up now 
                        </Link>
                   </span></h2>
            </Text> 
            <BackgroundAccount>
                <h4>Email Address</h4>
                <Input />
                <h4>Password</h4>
                <Input />
                <Button height='48px' width='185px'>Create Account</Button>
            </BackgroundAccount>
        </> 
    )
}

export default Login