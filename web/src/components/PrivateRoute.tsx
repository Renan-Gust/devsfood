import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import { Loading } from "./Loading";

interface PrivateRouteProps {
    children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { isAuthenticated, setPathname, loading } = useAuth()
    const location = useLocation()

    if(loading){
        return <Loading fullPage={true} />
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