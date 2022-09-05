import { User } from "../context/auth";


export interface ApiAuthResponse {
    user: User
    ok: boolean;
    errorMsg: string | null;
}

export interface ApiAuthRequest {
    email: string;
    password: string;
}