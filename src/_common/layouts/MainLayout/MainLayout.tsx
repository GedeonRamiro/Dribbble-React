import MainLayoutView from './MainLayoutView'
import { useGlobalState } from 'context/GlobalContext'
import { useHistory } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useState } from "react"

const MainLayout: React.FC = ({ children }) => {

    const history = useHistory()
    const { pathname } = useLocation()

    const { auth, removeAuth } = useGlobalState()

    const [openMenu, setOpenMenu] = useState(false)

    const username = auth?.user.name

    const logout = () => {
        removeAuth()
        history.push('/login')
    }

    return (
        <MainLayoutView {...{children, logout, username, pathname, openMenu, setOpenMenu}}  />
    )
}

export default MainLayout