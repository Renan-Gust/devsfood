import { userType } from "./";

export interface changePasswordRequestData {
    id: number;
    password: string;
    newPassword: string;
}

export interface changePasswordResponseData {
    status: string;
    message?: string;
    data: {
        user: userType;
    }
}