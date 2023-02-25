export interface GetCompletedOrdersResponseData {
    status: string;
    message?: string;
    data: {
        [key: number]: {
            deliveryFee: number;
            created_at: Date;
            name: string;
            image: string;
            price: number;
            status: string;
            total: number;
        }[]
        // deliveryFee: number;
        // created_at: Date;
        // name: string;
        // image: string;
        // price: number;
        // status: string;
        // total: number;
    }[];
}