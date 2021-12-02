import { useGlobalState } from 'context/GlobalContext'
import toast from 'react-hot-toast';
import { useEffect } from 'react'
import { Redirect, Route, RouteProps } from 'react-router'

const ProtectedRouter: React.FC<RouteProps> = ({ children, ...rest }) => {
    
    const { auth } = useGlobalState()

    useEffect(() => {
        if(!auth){
            toast.error('Faça o login novamente!', {
                style: {
                  border: '1px solid #DF2C89',
                  padding: '16px',
                  color: '#DF2C89',
                  background: '#fefafc',
                },
                iconTheme: {
                  primary: '#DF2C89',
                  secondary: '#FFFAEE',
                },
              });
        }
    }, [auth])

    if(auth){
        return <Route {...rest}>{ children }</Route>
    }
    
    return  <Redirect to='login' />
}

export default ProtectedRouter