import { createContext, useContext, useEffect, useState } from "react";

import Cookies from "js-cookie";

import { api } from '../services/api';
import { signInRequestData, signInResponseData, userType } from "../types/auth";

type AuthContextType = {
    test: boolean;
    isAuthenticated: boolean;
    user: userType | null;
    signIn: (data: signInRequestData) => Promise<signInResponseData>;
    loading: boolean;
    setUser: any;
    setTest: any;
}

export const Context = createContext({} as AuthContextType)

export const AuthContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [user, setUser] = useState<AuthContextType['user']>(null)
    const [loading, setLoading] = useState(true)
    const [test, setTest] = useState(false)

    useEffect(() => {
        (async () => {
            const token = Cookies.get('auth.token')

            if(token){
                const response = await api.checkLogin({ token })

                if(response.status === 'success'){
                    setUser(response.data.user)
                    
                    setTest(true)
                    console.log(response)
                }
            }
        })()

        setLoading(false)
    }, [])

    async function signIn({ email, password }: signInRequestData){
        const response = await api.signInRequest({
            email,
            password
        })

        if(response.status === 'success'){
            Cookies.set("auth.token", response.data.token.value, { expires: response.data.token.expiresAt })
            setUser(response.data.user)
            
            console.log(response)
            return response
        } else{
            return response
        }
    }

    const isAuthenticated = !!user

    return(
        <Context.Provider value={{ isAuthenticated, test, user, signIn, loading, setUser, setTest }}>
            {children}
        </Context.Provider>
    )
}

export const useAuth = () => useContext<AuthContextType>(Context)