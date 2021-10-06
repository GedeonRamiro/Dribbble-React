import { Container, BackgroundAccountImage, ContentAccount, FormAccount } from './style'
import accountbg from '../../assets/images/account-bg2.jpg'
import SocialAccount from '../SocialAccount'

const BackgroundAccount: React.FC = ({ children }) => {
    return (
       <Container>
           <BackgroundAccountImage>
                <img src={accountbg} alt={accountbg} />
           </BackgroundAccountImage>
           <ContentAccount>
               <FormAccount>
                   <h1>Sign up to Dribbble</h1>
                   <SocialAccount />
                    {children}
               </FormAccount>
           </ContentAccount>
       </Container>
    )
}

export default BackgroundAccount

