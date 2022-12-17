import { Navigate } from "react-router-dom"

interface PrivateRouteProps {
    children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const token = null

    return(
        <>
            {token ? children : <Navigate to="/login" />}
        </>
    )
}