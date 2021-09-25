
import { FaGoogle, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { ButtonGoogle, StartIcon, ButtonSocial, ButtonTwitter, DivLine, Line } from "./style";


const SocialAccount = () => {
    return (
        <>
        <ButtonSocial>
          <ButtonSocial>
            <ButtonGoogle>
                <StartIcon>
                    <FaGoogle size={18} />
                </StartIcon>
                <p>Sign up with google</p>
            </ButtonGoogle>
            <ButtonTwitter>
                    <FaTwitter size={20}/>
            </ButtonTwitter>
            <ButtonTwitter>
                    <FaFacebookSquare size={21}/>
            </ButtonTwitter>
          </ButtonSocial>
        </ButtonSocial>
        <DivLine>
            <Line/> 
              <p>Our</p> 
            <Line/>
        </DivLine>
        </>
    )
}

export default SocialAccount;