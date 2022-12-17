export interface CategoriesType {
    id: number;
    name: string;
    image: string;
}

export interface Categories {
    error: string;
    result: CategoriesType[];
}