import { FC, ReactNode } from "react"
import { useAuthStore } from "../hooks";
import { Navigate } from 'react-router-dom';


interface PublicRouteProps {
    children: ReactNode
}

export const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
    const { status } = useAuthStore();

    return status === 'authenticated'
        ? <Navigate to="/app" />
        : (
            <>
                {children}
            </>
        )
}
