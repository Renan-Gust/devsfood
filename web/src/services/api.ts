import axios from "axios";

import { signInRequestData } from "../types/auth";

const server = axios.create({
    baseURL: 'http://localhost/projetos/devsfood/server/public',
})

server.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
server.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

interface ApiType {
    // getCategories: () => Promise<Categories>;
    // getProducts: (search: string, page: number, category: number) => Promise<Products>;
    // signInRequest: (data: signInRequestData) => Promise<signInResponseData>;
    signInRequest: (data: signInRequestData) => Promise<any>;
}

interface FieldsType {
    search?: string;
    page?: number;
    category?: number;
}

export const api: ApiType = {
    // getCategories: async () => {
    //     const response = await callFetch("GET", `${baseURL}/categories`)
    //     const json = await response?.json()

    //     return json
    // },

    // getProducts: async (search: string, page: number, category: number) => {
    //     let fields: FieldsType = {}

    //     if(category !== 0){
    //         fields.category = category
    //     }

    //     if(page > 0){
    //         fields.page = page
    //     }

    //     if(search !== ''){
    //         fields.search = search
    //     }

    //     const toString = JSON.stringify(fields)
    //     const queryString = new URLSearchParams(JSON.parse(toString)).toString()

    //     const response = await callFetch("GET", `${baseURL}/products?${queryString}`)
    //     const json = await response?.json()

    //     return json
    // },

    signInRequest: async (data: signInRequestData) => {
        const data2 = {
            email: "rnena@gmail.com",
            password: "dadadaddasd"
        }



        try{
            const t = await server.post('/login', {
                email: "Renan@gmail.com",
                password: "1234"
            })

            console.log(t)
        } catch (error) {
            console.log(error);
        }
        
        // console.log(response)


        return []
    }
}