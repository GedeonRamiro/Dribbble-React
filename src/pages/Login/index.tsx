import BackgroundAccount from '../../components/BackgroundAccount'
import Button from '../../components/Button'
import Input from '../../components/Input'

const Login = () => {
    return (
        <BackgroundAccount>
            <h1>Sign up to Dribbble</h1>
            <h4>Email Address</h4>
            <Input />
            <h4>Password</h4>
            <Input />
            <Button height='48px' width='185px'>Create Account</Button>
         </BackgroundAccount>
    )
}

export default Login