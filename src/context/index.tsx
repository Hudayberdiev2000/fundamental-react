import {createContext, type FC, type ReactNode, useContext, useMemo, useState} from "react";

export interface AuthContextProps {
    isAuth?: boolean,
    setIsAuth?: React.Dispatch<React.SetStateAction<boolean>>,
    isLoading?: boolean,
    setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>,
}

const AuthContext = createContext<AuthContextProps>({})

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const value = useMemo(() => {
       return {
           isAuth,
           setIsAuth,
           isLoading,
           setIsLoading
       }
    }, [isAuth, isLoading])

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);