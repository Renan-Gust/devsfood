export interface signInRequestData {
    email: string;
    password: string;
}

export interface signUpRequestData extends signInRequestData {
    name: string;
}

export interface checkLoginRequestData {
    token: string;
}