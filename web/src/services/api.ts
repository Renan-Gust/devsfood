import axios from "axios";

import { signInRequestData } from "../types/auth";

const server = axios.create({
    // baseURL: 'http://localhost/projetos/devsfood/server/public',
    baseURL: 'http://localhost/devsfood/server/public',
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
            password: "dadadaddasd",
            token: `Bearer 37r27dbadbasydboad732q9qadk-d49t[s]`
        }



        // try{
            // server.defaults.headers['Authorization'] = `Bearer 37r27dbadbasydboad732q9qadk-d49t[s]`

            // const t = await server.post('/login', {
            //     email: "rnena@gmail.com",
            //     password: "dadadaddasd"
            // })
            let t: any = {}

            await fetch('http://localhost/devsfood/server/public/login', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(data2)
            }).then((response) => response.json()).then((r) => t = r)
            console.log(t.email)
            console.log(t.email2)
        // } catch (error) {
        //     console.log(error);
        // }
        
        // console.log(response)


        return []
    }
}