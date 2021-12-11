
import { useState } from "react"
import toast from 'react-hot-toast';
import AccountService from '../../services/create-account.services'
import { useHistory } from 'react-router-dom'
import LoginView from "./LoginView"
import validationLogin from '_common/utils/validationLogin'
import { useGlobalState } from 'context/GlobalContext'


const Login = () => {

    const { setAuth } = useGlobalState() 

    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const isDisabled = email === '' || password === '' || loading
    const validation = validationLogin(email, password)
    
    const login = async () => {
      if(typeof validation ===  'string'){
        return toast.error(validation)
      }
      try {
        setLoading(true)
        const { data }  = await AccountService.postLogin({
          email, password
        })
        setAuth(data)
        toast.success('Login com sucesso!')
        history.push('/')

      } catch (error: any) {
        console.log({error})
          if(error?.response?.data?.message === 'Unauthorized'){
            console.log(error?.response?.data?.message)
            toast.error('Verifique seu e-mail e senha e tente novamente!');
        }
      }
      setLoading(false)
    }
  
    return (
        <LoginView {...{
          email, setEmail,
          password, setPassword,
          isDisabled,
          login,
          loading
        }}/>
    )
}

export default Login