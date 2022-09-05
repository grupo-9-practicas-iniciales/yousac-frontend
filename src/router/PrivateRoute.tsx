import { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../hooks'

interface PrivateRouteProps {
    children: ReactNode
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {

    const { status } = useAuthStore();

    return status === 'authenticated'
        ? (
            <>{children}</>
        )
        : <Navigate to="/login" />
}
