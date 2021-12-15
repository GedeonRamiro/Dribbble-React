import { createContext, useContext, useState } from "react"

export interface IUsers {
    id: string
    name: string
    bio: string
    email: string
  }


export interface IUsersState {
    usersState?: IUsers[]
    setUsersState: (usersState: []) => void
}


export const UsersContext = createContext({} as IUsersState)

export const UsersStateProvider: React.FC = ({ children }) => {

    const [usersState, setUsersState] = useState<IUsers[]>()

    return(
        <UsersContext.Provider value={ {usersState, setUsersState} }>
            {children}
        </UsersContext.Provider>
    )
}

export const useUsersState = () => {
    const context = useContext(UsersContext)
    return context
}