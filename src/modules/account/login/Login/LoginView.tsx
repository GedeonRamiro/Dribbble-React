import { Link } from 'react-router-dom'
import Account from '_common/layouts/Account'
import Input from '_common/components/Input'
import Button from '_common/components/Button'
import React from 'react'

interface IProps {
    email: string
    setEmail: (email: string) => void
    password: string
    setPassword: (name: string) => void
    isDisabled: boolean
    login: (ev: React.MouseEvent<HTMLButtonElement>) => void
    loading: boolean
}


const LoginView: React.FC<IProps> = ({ 
        email, setEmail, 
        password, setPassword, 
        isDisabled,
        login,
        loading
 }) => {

    return (
      
            <Account>
              <div className='mx-4'>
                    <h4 className='mb-1 text-sm font-semibold'>Endereço de e-mail</h4>  
                    <Input 
                        type='text'
                        placeholder='E-mail'
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    
                    <div className='flex items-center justify-between mt-8'>
                        <h4 className='mb-1 text-sm font-semibold'>Senha</h4>
                        <p className='text-sm text-blue-700 cursor-pointer'>Esquece a senha?</p> 
                    </div> 
                    <Input 
                        type='password'
                        placeholder='Senha'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    
                    <div className='mt-6'>
                        < Button text='Login' onClick={login} {...{isDisabled, loading}} />
                    </div>
                    <div className='top-0 right-0 p-6 text-sm text-center lg:absolute'>
                        Não é um membro?
                        <Link to="/create-account">
                            <span className='text-blue-700 cursor-pointer'> Inscreva-se agora</span>
                        </Link>
                    </div>
              </div>
          </Account> 
    )
}

export default LoginView