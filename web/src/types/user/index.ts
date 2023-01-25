export interface ResponseData {
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

export interface userType{
    id: number;
    name: string;
    email: string;
}

export interface FormActiveType  {
    type: 'login' | 'register';
}