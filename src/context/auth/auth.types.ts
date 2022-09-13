import { UserInterface } from "../../api";

export interface AuthState {
    status: Status;
    user: User;
    errorMsg: string | null
}

type Status = | 'checking' | 'authenticated' | 'not-authenticated'

export interface User extends UserInterface {
}

export type authActionType =
    | { type: 'AUTH-check' }
    | { type: 'AUTH-login', payload: User }
    | { type: 'AUTH-logout', payload: string | null }
    | { type: 'AUTH-clear-errorMsg' }
    | { type: 'AUTH-update-user-info', payload: User }