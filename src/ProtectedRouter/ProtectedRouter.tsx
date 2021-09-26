import { useEffect } from "react"
import { Redirect, Route, RouteProps } from "react-router"
import { toast } from "react-toastify"
import { useGlobalState } from "../context/GlobalContext"


const ProtectedRouter: React.FC<RouteProps> = ({ children, ...rest }) => {

    const { auth } = useGlobalState()

   useEffect(() => {
       if(!auth) toast.warning('Faça o login!')
   }, [!auth])

    if(auth) {
        return <Route{...rest}>{children}</Route>
    }


    return<Redirect to='/login' />
}

export default ProtectedRouter