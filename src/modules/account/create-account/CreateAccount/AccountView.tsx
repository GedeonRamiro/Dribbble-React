import { Link } from 'react-router-dom'
import Account from '_common/layouts/Account'
import Input from '_common/components/Input'
import Button from '_common/components/Button'



interface IProps {
    name: string
    setName: (name: string) => void
    bio: string
    setBio: (name: string) => void
    email: string
    setEmail: (name: string) => void
    password: string
    setPassword: (name: string) => void
    checkbox: boolean
    setCheckbox: (checkbox: boolean) => void
    loading: boolean
    setLoading: (loading: boolean) => void
    isDisabled: boolean
    createAccount: (ev: React.MouseEvent<HTMLButtonElement>) => void
}


const AccountView: React.FC<IProps> = ({ 
        name, setName,
        bio, setBio,
        email, setEmail,
        password, setPassword,
        setCheckbox,
        loading,
        isDisabled,
        createAccount,
    }) => {
    
    return (
        <Account>
        <div className='mx-4'>
              <h4 className='mb-1 text-sm font-semibold'>Nome</h4>  
               <Input 
                  type='text'
                  placeholder='Nome'
                  value={name}
                  onChange={event => setName(event.target.value)}
              />
           
              <h4 className='mt-8 mb-1 text-sm font-semibold'>Nome do usuário</h4>  
              <Input 
                  type='text'
                  placeholder='Nome do usuário'
                  value={bio}
                  onChange={event => setBio(event.target.value)}
                  
              />
              
              <h4 className='mt-8 mb-1 text-sm font-semibold'>Endereço de e-mail</h4>  
              <Input 
                  type='text'
                  placeholder='E-mail'
                  value={email}
                  onChange={event => setEmail(event.target.value)}
              />
              
              <h4 className='mt-8 mb-1 text-sm font-semibold'>Senha</h4>
              <Input 
                  type='password'
                  placeholder='Senha'
                  value={password}
                  onChange={event => setPassword(event.target.value)}
              />
                <div className='flex my-4 w-80 md:w-96'>
                    <input type="checkbox" onChange={event => setCheckbox(event.target.checked)} className="mr-2 text-indigo-600 form-checkbox" />
                    <p className='text-xs'>Creating an account means you’re okay with our 
                    <span className='text-blue-700'> Terms of Service, Privacy Policy, </span> 
                    and our default
                    <span className='text-blue-700'> Notification Settings. </span> </p>
                </div>

              <div className='mt-6'>
                  < Button text='Create Account' onClick={createAccount} {...{isDisabled, loading}} />
              </div>

              <div className='top-0 right-0 p-6 text-sm text-center lg:absolute'>
                    Já é um membro?
                    <Link to="/login">
                            <span className='text-blue-700 cursor-pointer'> Entrar</span>
                    </Link>
                </div>
            </div>
        </Account>

    )
}

export default AccountView