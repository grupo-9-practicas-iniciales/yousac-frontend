

export interface ApiListError {
    msg: string,
    param?: string,
}

export interface ApiAuthLoginRequest {
    email: string;
    password: string;
}

export interface ApiAuthLoginResponse {
    ok: boolean;
    msg: string;
    token: string;
    user: UserInterface;
    errors: ApiListError[];
}

export interface ApiAuthRevalidateResponse extends ApiAuthLoginResponse { }

export interface UserInterface {
    idUser: number;
    idStudent: string;
    names: string;
    lastnames: string;
    email: string;
}

export interface ApiUserCreateRequest {
    idStudent: string;
    names: string;
    lastnames: string;
    email: string;
    password: string;
    password2: string;
}


export interface APIUserCreateResponse {
    ok: boolean;
    msg: string;
    user?: UserInterface;
    token?: string;
    errors: ApiListError[];
}


export interface ApiErrorInterface {
    ok: boolean;
    msg: string;
    errors: ApiListError[];
}
