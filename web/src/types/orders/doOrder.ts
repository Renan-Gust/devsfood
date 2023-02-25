export interface OrderRequestData {
    userId: number;
    total: number;
    deliveryFee: number;
    productsId: number[];
}

export interface OrderResponseData {
    status: string;
    message?: string;
    data: {
        order: {
            status: string;
            created_at: Date;
            total: number;
            deliveryFee: number;
        };
        address: {
            address: string;
            number: string;
            neighborhood: string;
            city: string;
            state: string;
        };
        products: {
            id: number;
            name: string;
            image: string;
            price: number;
            ingredients: string;
        }[];
    }
}