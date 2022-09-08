export interface AuthState {
    status: Status;
    user: User;
    errorMsg: string | null
}

type Status = | 'checking' | 'authenticated' | 'not-authenticated'

export interface User {
    names: string;
    lastnames: string;
    email: string;
    idStudent: string;
    idUser: string;
    token: string;
}

export type authActionType =
    | { type: 'AUTH-check' }
    | { type: 'AUTH-login', payload: User }
    | { type: 'AUTH-logout', payload: string | null }
    | { type: 'AUTH-clear-errorMsg' }
