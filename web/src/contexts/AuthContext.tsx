import Cookies from "js-cookie";
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

import { api } from '../services/api';

import { ResponseData, userType } from "../types/user";
import { signInRequestData, signUpRequestData } from "../types/user/auth";
import { useAddress } from "./AddressContext";

type AuthContextType = {
    isAuthenticated: boolean;
    user: userType | null;
    setUser: Dispatch<SetStateAction<userType | null>>;
    signIn: (data: signInRequestData) => Promise<ResponseData>;
    signUp: (data: signUpRequestData) => Promise<ResponseData>;
    loading: boolean;
    pathname: string;
    setPathname: Dispatch<SetStateAction<string>>;
}

export const Context = createContext({} as AuthContextType)

export const AuthContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const { address, setAddress } = useAddress()
    const [user, setUser] = useState<AuthContextType['user']>(null)
    const [loading, setLoading] = useState(true)
    const [pathname, setPathname] = useState('')

    useEffect(() => {
        (async () => {
            const token = Cookies.get('auth.token')

            if(token){
                const response = await api.checkLogin({ token })
    
                if(response.status === 'success'){
                    setUser(response.data.user)
                }

                const addressResponse = await api.getAddressRequest(response.data.user.id)
    
                if(addressResponse.status === 'success'){
                    setAddress(addressResponse.data)
                }
            }

            setLoading(false)
        })()
    }, [])

    async function signIn({ email, password }: signInRequestData){
        const response = await api.signInRequest({
            email,
            password
        })

        if(response.status === 'success'){
            Cookies.set("auth.token", response.data.token.value, { expires: response.data.token.expiresAt })
            setUser(response.data.user)
            
            return response
        } else{
            return response
        }
    }

    async function signUp({ name, email, password }: signUpRequestData){
        const response = await api.signUpRequest({
            name,
            email,
            password
        })

        if(response.status === 'success'){
            Cookies.set("auth.token", response.data.token.value, { expires: response.data.token.expiresAt })
            setUser(response.data.user)
            
            return response
        } else{
            return response
        }
    }

    const isAuthenticated = !!user

    return(
        <Context.Provider value={{ isAuthenticated, user, setUser, signIn, signUp, loading, pathname, setPathname }}>
            {children}
        </Context.Provider>
    )
}

export const useAuth = () => useContext<AuthContextType>(Context)