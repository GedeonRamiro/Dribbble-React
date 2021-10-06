import { Link, useHistory } from 'react-router-dom'
import {FiActivity} from 'react-icons/fi'
import { MdWork, MdEmail } from 'react-icons/md'
import {Container, IconInfo, InfoNavBar, LinkNavBar, ImageProfile} from './style'
import logo from '../../assets/images/logo.png'
import Button from '../Button'

import { useGlobalState } from "../../context/GlobalContext";


const NavBar:React.FC = ({ children }) => {

    const history = useHistory()

    const { auth, removeAuth } = useGlobalState()

    const logout = () => {
        removeAuth();
        history.push('/login')
    }

    return (
        <>
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
                    <IconInfo>
                        <i><MdEmail/></i>
                        <i> <MdWork/></i>
                        <i><FiActivity/></i>
                    </IconInfo>
                    <ImageProfile>
                            <img src={`http://lorempixel.com/400/400/cats/${auth?.user.name}/`} alt={auth?.user.name} />
                    </ImageProfile>
                    <Button onClick={logout}>Logout</Button>
                </InfoNavBar>
            </Container>
            {children}
           </>
    )
}

export default NavBar