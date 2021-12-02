
import { createContext, useState, useContext } from 'react'

export interface IAuth {
    access_token: string,
    user: {
        id: string,
        name: string,
        email: string,
      }
}

interface IGlobalState {
    auth?: IAuth
    setAuth: (auth: IAuth) => void
    removeAuth: () => void
}

function getLocalStorage(){
    const auth = localStorage.getItem("@dribbble:auth") || undefined
    return auth ? JSON.parse(auth) : auth
}

export const GlobalContext = createContext({} as IGlobalState )

export const GlobalStateProvider: React.FC = ({ children }) => {
    
    const [auth, setAuthState] = useState<IAuth | undefined>(getLocalStorage)

    const setAuth = (auth: IAuth) => {
        localStorage.setItem("@dribbble:auth", JSON.stringify(auth));
        return setAuthState(auth)
    }

    const removeAuth = () => {
        localStorage.removeItem("@dribbble:auth")
        setAuthState(undefined)
    }
    return(
        <GlobalContext.Provider value={ {auth, setAuth, removeAuth} }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalState = () => {
    const context = useContext(GlobalContext)
    return context
}

