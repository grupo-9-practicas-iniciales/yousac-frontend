import { createContext } from 'react';
import { AuthState, User } from './';

interface ContextProps extends AuthState {
    login: (user: User, token: string) => void;
    logout: (errorMsg: string | null) => void;
    clearErrorMsg: () => void;
    checkingAuth: () => void;
    updateUserInfo: (user: User) => void;
}

export const AuthContext = createContext({} as ContextProps);