import { AddressResponseData } from "../address";
import { Products } from "./products";

export interface GetCompletedOrdersResponseData {
    status: string;
    message?: string;
    data: {
        address: AddressResponseData['data'];
        total: number;
        delivery_fee: number;
        products: Products[];
        status: string;
        created_at: Date;
    }[];
}