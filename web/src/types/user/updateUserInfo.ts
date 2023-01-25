import { userType } from "./";

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