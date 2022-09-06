import { createContext } from 'react';
import { AuthState, User } from './';

interface ContextProps extends AuthState {
    login: (user: User) => void;
    logout: (errorMsg: string | null) => void;
    clearErrorMsg: () => void;
    checkingAuth: () => void;
}

export const AuthContext = createContext({} as ContextProps);