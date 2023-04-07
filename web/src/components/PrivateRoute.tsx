import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface PrivateRouteProps {
    children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { isAuthenticated, setPathname, loading } = useAuth()
    const location = useLocation()

    if(loading){
        return <h1>Carregando...</h1>
    }

    if(!isAuthenticated){
        setPathname(location.pathname)
        return <Navigate to="/authentication" />
    }

    return(
        <>
            {children}
        </>
    )
}