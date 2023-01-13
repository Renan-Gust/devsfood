export interface signInRequestData {
    email: string;
    password: string;
}

export interface signInResponseData {
    status: string;
    message?: string;
    data: {
        token: {
            value: string;
            expiresAt: number;
        };
        user: {
            name: string;
        }
    }
}

export interface checkLoginRequestData{
    token: string;
}

export interface checkLoginResponseData {
    status: string;
    message?: string;
    data: {
        token?: {
            value?: string;
            expiresAt?: number;
        }
        user: {
            name: string;
        }
    }
}

export interface userType{
    name: string;
}