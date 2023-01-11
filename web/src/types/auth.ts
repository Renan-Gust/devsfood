export interface signInRequestData {
    email: string;
    password: string;
}

export interface signInResponseData {
    token: {
        value: string;
        expiresAt: number;
    };
    user: {
        name: string;
    }
}

export interface userType{
    name: string;
}