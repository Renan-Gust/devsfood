export interface ProductsType {
    data: ProductsDataType[];
    page: number;
    pages: number;
    total: number;
}

export interface ProductsDataType {
    id?: number;
    name?: string;
    image?: string;
    price?: number;
    ingredients?: string;
    quantity?: number;
}

export interface Products {
    error: string;
    result: ProductsType;
}