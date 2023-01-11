import { createContext, useContext, useState } from "react";


import { api } from '../services/api';
import { signInRequestData, userType } from "../types/auth";

type AuthContextType = {
    isAuthenticated: boolean;
    user: userType | null;
    signIn: (data: signInRequestData) => Promise<void>;
    loading: boolean;
}

export const Context = createContext({} as AuthContextType)

export const AuthContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [user, setUser] = useState<AuthContextType['user']>(null)
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
        // Verificar se tem algum cookies salvo
        // if(Cookie.get('auth.token')){
            // const { token: { value, expiresAt }, user } = await api.signInRequest({
            //     email,
            //     password
            // })
        // }

        // true
        // api.verifyLogin

        // setUser(infoRecuperada)

        // setLoading(false)
    // }, [])

    async function signIn({ email, password }: signInRequestData){
        // const { token: { value, expiresAt }, user } = await api.signInRequest({
        //     email,
        //     password
        // })

        // console.log(value, expiresAt, user)

        // Cookies.set("auth.token", value, { expires: expiresAt })
        // setUser(user)
        try{
            const resp = await api.signInRequest({
                email,
                password
            })

            console.log(resp)
        } catch(err){
            console.log(err)
        }
    }

    const isAuthenticated = !!user

    return(
        <Context.Provider value={{ isAuthenticated, user, signIn, loading }}>
            {children}
        </Context.Provider>
    )
}

export const useAuth = () => useContext<AuthContextType>(Context)