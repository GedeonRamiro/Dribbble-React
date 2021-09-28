import api from '../../service/api'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import BackgroundAccount from '../../components/BackgroundAccount'
import Button from '../../components/Button'
import Input from '../../components/Input'
import validationCreateAccount from '../../utils/validationCreateAccount'
import { DivBlock, DivInput, Text, Terms } from './style'


const CreateAccount = () => {

    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkbox, Setcheckbox] = useState(false)
    const [loading, setLoading] = useState(false)

    const isDisabled = name === '' || email === '' || password === '' || loading
    
    const history = useHistory()

    const createAccount = async () => {
      
      const validation = validationCreateAccount(name, email, password)

      if(typeof validation === 'string'){
         return toast.error(validation)
      }

      try {
        setLoading(true)
        await api.post('/users', {
          name, bio, email, password          
        })
        toast.success('Conta criada com sucesso!')
        history.push("/login")
      } catch (error) {
        toast.error(error?.response?.data?.message || 'Não foi possível criar a conta!')
      }
      setLoading(false)
    }

    return (
      <>  
           <Text>
                <h2>Already a member? 
                        <Link style={{ textDecoration: 'none' }} to='/login'>
                           <span> Sign in </span>
                        </Link>
                   </h2>
            </Text>   
         <BackgroundAccount >
                  <DivBlock>
                      <DivInput >
                      <h4>Full Name</h4>
                        <Input width='185px' 
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                      </DivInput>
                      <DivInput>
                      <h4>Username</h4>
                        <Input width='185px' 
                             value={bio}
                             onChange={event => setBio(event.target.value)}
                        />
                      </DivInput>  
                  </DivBlock>
                  <h4>Email Address</h4>
                  <Input 
                        value={email}
                        onChange={event => setEmail(event.target.value)} 
                  />
                  <h4>Password</h4>
                  <Input type='password' 
                       value={password}
                       onChange={event => setPassword(event.target.value)}
                  />
                  <Terms>
                      <input type='checkbox' 
                             onChange={event => Setcheckbox(event.target.checked)}
                      />
                      <p>Creating an account means you’re okey with <span> Terms of<br />
                      Service, Privacy Policy</span> and our defult <span>Notification Settings.</span></p>
                  </Terms>
                  <Button height='48px' width='185px' onClick={createAccount} disabled={!checkbox} isDisabled={isDisabled} >Create Account</Button>
                  <Terms>
                      <h2>This site is protected by reCAPTCHA and the google <span><br /> 
                      TPrivacy Policy </span> aand the <span>Terms of Service apply</span></h2>
                  </Terms>
                  
         </BackgroundAccount>
      </>
    )
}

export default CreateAccount