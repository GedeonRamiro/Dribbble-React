import { Container, BackgroundAccountImage, ContentAccount, FormAccount } from './style'
import accountbg from '../../assets/images/account-bg.jpg'
import Button from '../Button'
import Input from '../Input'

const BackgroundAccount = () => {
    return (
       <Container>
           <BackgroundAccountImage>
                <img src={accountbg} />
           </BackgroundAccountImage>
           <ContentAccount>
               <FormAccount>
                 <h1>Sign up to Dribbble</h1>
                  <Input />
                  <Button  height='48px' width='185px'>Create Account</Button>  
               </FormAccount>
           </ContentAccount>
       </Container>
    )
}

export default BackgroundAccount

