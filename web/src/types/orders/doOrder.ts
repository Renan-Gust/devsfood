import { Status } from "./status";

export interface OrderRequestData {
    userId: number;
    total: number;
    deliveryFee: number;
    productsId: number[];
}

export interface OrderResponseData {
    status: Status['status'];
    message?: string;
}