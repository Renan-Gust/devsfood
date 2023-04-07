export interface OrderRequestData {
    userId: number;
    total: number;
    deliveryFee: number;
    productsId: {
        quantity: number;
        id: number;
    }[];
}

export interface OrderResponseData {
    status: string;
    message?: string;
}