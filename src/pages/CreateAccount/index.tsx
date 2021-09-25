import { Link } from 'react-router-dom'
import BackgroundAccount from '../../components/BackgroundAccount'
import Button from '../../components/Button'
import Input from '../../components/Input'

import { DivBlock, InputName, Text, Terms } from './style'

const CreateAccount = () => {
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
                      <InputName>
                      <h4>Full Name</h4>
                        <Input width='185px' />
                      </InputName>
                      <InputName>
                      <h4>Username</h4>
                        <Input width='185px' />
                      </InputName>  
                  </DivBlock>
                  <h4>Email Address</h4>
                  <Input />
                  <h4>Password</h4>
                  <Input />
                  <Terms>
                      <input type='checkbox'/>
                      <p>Creating an account means you’re okey with <span> Terms of <br />
                      Service, Privacy Policy</span> and our defult <span>Notification Settings.</span></p>
                  </Terms>
                  <Button height='48px' width='185px'>Create Account</Button>
                  <Terms>
                      <h2>This site is protected by reCAPTCHA and the google <span><br /> 
                      TPrivacy Policy </span> aand the <span>Terms of Service apply</span></h2>
                  </Terms>
                  
         </BackgroundAccount>
      </>
    )
}

export default CreateAccount