export interface OrderRequestData {
    userId: number;
    total: number;
    deliveryFee: number;
    productsId: number[];
}

export interface OrderResponseData {
    status: string;
    message?: string;
}