import { Link, useHistory } from 'react-router-dom'
import {FiActivity} from 'react-icons/fi'
import { MdWork, MdEmail } from 'react-icons/md'
import {Container, IconInfo, InfoNavBar, LinkNavBar, ImageProfile} from './style'
import logo from '../../assets/images/logo.png'
import Input from '../Input'
import Button from '../Button'

import { useGlobalState } from "../../context/GlobalContext";


const NavBar: React.FC = ({ children }) => {

    const history = useHistory()

    const { removeAuth } = useGlobalState()

    const logout = () => {
        removeAuth();
        history.push('/login')
    }

    return (
       <Container>
           <LinkNavBar>
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
                <Link to='/'>
                    Inspiration
                </Link>
                <Link to='/'>
                    Find Work
                </Link>
                <Link to='/'>
                    Learn Design
                </Link>
                <Link to='/'>
                    Go Pro
                </Link>
                <Link to='/'>
                    Hire Designers
                </Link>
           </LinkNavBar>
           <InfoNavBar>
               <Input placeholder='Search' width='113px'  />
               <IconInfo>
                   <i><MdEmail/></i>
                   <i> <MdWork/></i>
                   <i><FiActivity/></i>
               </IconInfo>
               <ImageProfile>
                   {children}
               </ImageProfile>
               <Button onClick={logout}>Logout</Button>
           </InfoNavBar>
       </Container>
    )
}

export default NavBar