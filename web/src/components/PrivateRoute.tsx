import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface PrivateRouteProps {
    children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { loading, isAuthenticated } = useAuth()

    if(loading && !isAuthenticated){
        return <Navigate to="/authentication" />
    }

    return {children}
}