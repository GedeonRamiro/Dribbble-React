import api from '../../service/api'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import BackgroundAccount from '../../components/BackgroundAccount'
import Button from '../../components/Button'
import Input from '../../components/Input'
import validadeCreateAccount from '../../utils/validadeCreateAccount'
import { DivBlock, DivInput, Text, Terms } from './style'

const CreateAccount = () => {

    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createAccount = async () => {
      const validade = validadeCreateAccount(name, email, password)

      if(typeof validade === 'string'){
        toast.error(validade)
      }

      try {
        await api.post('/users', {
          name, bio, email, password          
        })
        toast.success('Conta criada com sucesso!')
      } catch (error) {
        toast.error(error?.response?.data?.message || 'Não foi possível criar a conta!')
      }
    }


    return (
      <>  
           <Text>
                <h2>Already a member? <span> 
                        <Link style={{ textDecoration: 'none' }} to='/login'>
                           Sign in
                        </Link>
                   </span></h2>
            </Text>   
         <BackgroundAccount>
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
                      <input type='checkbox'/>
                      <p>Creating an account means you’re okey with <span> Terms of <br />
                      Service, Privacy Policy</span> and our defult <span>Notification Settings.</span></p>
                  </Terms>
                  <Button height='48px' width='185px' onClick={createAccount}>Create Account</Button>
                  <Terms>
                      <h2>This site is protected by reCAPTCHA and the google <span><br /> 
                      TPrivacy Policy </span> aand the <span>Terms of Service apply</span></h2>
                  </Terms>
                  
         </BackgroundAccount>
      </>
    )
}

export default CreateAccount