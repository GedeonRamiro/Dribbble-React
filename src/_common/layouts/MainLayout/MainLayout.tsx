import MainLayoutView from "./MainLayoutView"
import { useGlobalState } from 'context/GlobalContext'
import { useHistory } from "react-router-dom"

const MainLayout: React.FC = ({ children }) => {

    const history = useHistory()

    const { auth, removeAuth } = useGlobalState()

    const username = auth?.user.name

    const logout = () => {
        removeAuth()
        history.push('/login')
    }
    

    return (
        <MainLayoutView {...{children, logout, username}}  />
    )
}

export default MainLayout