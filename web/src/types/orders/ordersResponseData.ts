import { AddressResponseData } from "../address";
import { Products } from "./products";
import { Status } from "./status";

export interface OrdersResponseData {
    status: string;
    message?: string;
    data: OrderData[];
}

export interface OrderInProgressResponseData {
    status: string;
    message?: string;
    data: OrderData;
}

export interface OrderData {
    address: AddressResponseData['data'];
    total: number;
    delivery_fee: number;
    products: Products[];
    status: Status['status'];
    created_at: Date;
}