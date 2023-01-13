import Cookies from "js-cookie";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { api } from "../services/api";

interface PrivateRouteProps {
    children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { isAuthenticated, setUser, test, setTest, user } = useAuth()

    // console.log(test)

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
    }, [])

    console.log(test, user)

    if(!test){
        return <Navigate to="/authentication" />
    }

    return(
        <>
            {children}
        </>
    )
}