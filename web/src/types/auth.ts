export interface signInRequestData {
    email: string;
    password: string;
}

export interface signInResponseData extends ResponseData {}

export interface checkLoginRequestData {
    token: string;
}

export interface checkLoginResponseData extends ResponseData {}

export interface signUpRequestData extends signInRequestData {
    name: string;
}

export interface signUpResponseData extends ResponseData {}

interface ResponseData {
    status: string;
    message?: string;
    data: {
        token: {
            value: string;
            expiresAt: number;
        };
        user: userType;
    }
}

export interface updateUserInfoRequestData {
    id: number;
    name: string;
    email?: string;
}

export interface updateUserInfoResponseData {
    status: string;
    message?: string;
    data: {
        user: userType;
    }
}

export interface userType{
    id: number;
    name: string;
    email: string;
}

export interface FormActiveType  {
    type: 'login' | 'register';
}