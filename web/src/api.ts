import { Categories } from "./types/categories";
import { Products } from "./types/products";

let BASE = "http://localhost/projetos/devsfood/api/public"

interface ApiType {
    getCategories: () => Promise<Categories>;
    getProducts: (search: string, page: number, category: number) => Promise<Products>;
}

interface FieldsType {
    search?: string;
    page?: number;
    category?: number;
}

export const api: ApiType = {
    getCategories: async () => {
        const response = await fetch(`${BASE}/categories`)
        const json = await response.json()

        return json
    },

    getProducts: async (search: string, page: number, category: number) => {
        let fields: FieldsType = {}

        if(category !== 0){
            fields.category = category
        }

        if(page > 0){
            fields.page = page
        }

        if(search !== ''){
            fields.search = search
        }

        const toString = JSON.stringify(fields)
        const queryString = new URLSearchParams(JSON.parse(toString)).toString()

        const response = await fetch(`${BASE}/products?${queryString}`)
        const json = await response.json()

        return json
    }
}