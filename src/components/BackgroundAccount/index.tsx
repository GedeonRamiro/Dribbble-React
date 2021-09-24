import { Container, BackgroundAccountImage, ContentAccount, FormAccount, Text } from './style'
import accountbg from '../../assets/images/account-bg2.jpg'

const BackgroundAccount: React.FC = ({ children }) => {
    return (
       <Container>
           <Text>
             <h2>Already a member? <span>Sign in</span></h2>
           </Text>
           <BackgroundAccountImage>
                <img src={accountbg} />
           </BackgroundAccountImage>
           <ContentAccount>
               <FormAccount>
                {children}
               </FormAccount>
           </ContentAccount>
       </Container>
    )
}

export default BackgroundAccount

