export interface AddressRequestData {
    userId: string;
    address: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
}

export interface AddressResponseData {
    status: string;
    message?: string;
    data: {
        address: string;
        number: string;
        neighborhood: string;
        city: string;
        state: string;
    }
}