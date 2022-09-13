import { useAuthStore } from './useAuthStore';
import { useEffect } from 'react';

export const useCheckAuth = () => {

    const { status, checkAuth } = useAuthStore();

    useEffect(() => {
        checkAuth()
    }, [])

    return {
        status
    }

}