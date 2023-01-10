import { signInRequestData, signInResponseData } from "../types/auth";
import { Categories } from "../types/categories";
import { Products } from "../types/products";
import { callFetch } from "./helpers";

let BASE = "http://localhost/projetos/devsfood/server/public"

interface ApiType {
    getCategories: () => Promise<Categories>;
    getProducts: (search: string, page: number, category: number) => Promise<Products>;
    signInRequest: (data: signInRequestData) => Promise<signInResponseData>;
}

interface FieldsType {
    search?: string;
    page?: number;
    category?: number;
}

export const api: ApiType = {
    getCategories: async () => {
        const response = await callFetch("GET", `${BASE}/categories`)
        const json = await response?.json()

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

        const response = await callFetch("GET", `${BASE}/products?${queryString}`)
        const json = await response?.json()

        return json
    },

    signInRequest: async (data: signInRequestData) => {
        const response = await callFetch("POST", `${BASE}/users`, data)
        const json = await response?.json()

        return json
    }
}