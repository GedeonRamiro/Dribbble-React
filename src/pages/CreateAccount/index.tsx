import BackgroundAccount from '../../components/BackgroundAccount'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { DivBlock, InputName } from './style'

const CreateAccount = () => {
    return (
       
         <BackgroundAccount>
                  <h1>Sign up to Dribbble</h1>
                  <DivBlock>
                      <InputName>
                      <h4>Full Name</h4>
                        <Input width='185px' />
                      </InputName>
                      <InputName>
                      <h4>Full Name</h4>
                        <Input width='185px' />
                      </InputName>  
                  </DivBlock>
                  <h4>Email Address</h4>
                  <Input />
                  <h4>Password</h4>
                  <Input />
                  <Button height='48px' width='185px'>Create Account</Button>
         </BackgroundAccount>

    )
}

export default CreateAccount