
import { FaGoogle, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { ButtonGoogle, StartIcon, ButtonSocial, ButtonTwitterFace, DivLine, Line } from "./style";


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
            <ButtonTwitterFace>
                    <FaTwitter size={20}/>
            </ButtonTwitterFace>
            <ButtonTwitterFace>
                    <FaFacebookSquare size={21}/>
            </ButtonTwitterFace>
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