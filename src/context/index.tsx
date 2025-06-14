import {createContext, type FC, type ReactNode, useContext, useState} from "react";

export interface AuthContextProps {
    isAuth?: boolean,
    setIsAuth?: React.Dispatch<React.SetStateAction<boolean>>,
}

const AuthContext = createContext<AuthContextProps>({})

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({children}) => {
    const [isAuth, setIsAuth] = useState(true)

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);