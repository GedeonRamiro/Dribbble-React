
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import BackgroundAccount from '../../components/BackgroundAccount'
import Button from '../../components/Button'
import Input from '../../components/Input'
import api from '../../service/api'
import  validationAccount  from '../../utils/validationAccount';
import { Text, DivPassword } from './style'
import { useGlobalState } from '../../context/GlobalContext'
import loadingg from '../../assets/images/loading.svg'


const Login = () => {
    
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { setAuth } = useGlobalState()

    const isDisabled = email === '' || password === '' || loading
    const isLoading = loading

    const loginAccount = async () => {

        const validation = validationAccount(email, password)
        
        if(typeof validation === 'string') {
            return toast.error(validation)
        }

        try {
            setLoading(true)
            const { data } = await api.post('/login', {
                email, 
                password,
            })
            setAuth(data)
            history.push("/")
        } catch (error) {
            if(error?.response?.data?.message){
                toast.error('Verifique seu e-mail e senha e tente novamente!')
            }
            setLoading(false)
        }
       
    }

    
    return (
        <>
            <Text>
                <h2>Not a member? 
                    <Link style={{ textDecoration: 'none' }} to='/create-account'>
                       <span>  Sign up now </span>
                    </Link>
                   </h2>
            </Text> 
            <BackgroundAccount>
                <h4>Email Address</h4>
                <Input 
                    value={email} 
                    onChange={event => setEmail(event.target.value)}
                />
                  <DivPassword>
                    <h4>Password</h4>
                    <span>Forgot password?</span>
                  </DivPassword>  
                <Input type='password' 
                    value={password} 
                    onChange={event => setPassword(event.target.value)}
                />
                <Button 
                    height='48px' 
                    width='185px' 
                    onClick={loginAccount} 
                    isDisabled={isDisabled} isLoading={isLoading}> 
                        <img src={loadingg} /> 
                        Sign In
                </Button>
            </BackgroundAccount>
        </> 
    )
}

export default Login