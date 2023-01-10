import { createContext, useContext, useState } from "react";

import { api } from '../services/api';
import { signInRequestData, userType } from "../types/auth";

type AuthContextType = {
    isAuthenticated: boolean;
    user: userType | null;
    signIn: (data: signInRequestData) => Promise<void>;
}

export const Context = createContext({} as AuthContextType)

export const AuthContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [user, setUser] = useState<AuthContextType['user']>(null)

    const isAuthenticated = !!user

    async function signIn({ email, password }: signInRequestData){
        const { token, user } = await api.signInRequest({
            email,
            password
        })

        // Definir o token no cookies
        
        setUser(user)
    }

    return(
        <Context.Provider value={{ isAuthenticated, user, signIn }}>
            {children}
        </Context.Provider>
    )
}

export const useAuth = () => useContext<AuthContextType>(Context)