export interface signInRequestData {
    email: string;
    password: string;
}

export interface signInResponseData {
    token: string;
    user: {
        name: string;
    }
}

export interface userType{
    name: string;
}