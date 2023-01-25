import { AddressRequestData, AddressResponseData } from "../types/address";
import { Categories } from "../types/categories";
import { Products } from "../types/products";
import { ResponseData } from "../types/user";
import { checkLoginRequestData, signInRequestData, signUpRequestData } from "../types/user/auth";
import { changePasswordRequestData, changePasswordResponseData } from "../types/user/changePassword";
import { updateUserInfoRequestData, updateUserInfoResponseData } from "../types/user/updateUserInfo";

const baseURL = 'http://localhost/projetos/devsfood/server/public'
// const baseURL = 'http://localhost/devsfood/server/public'

interface ApiType {
    getCategories: () => Promise<Categories>;
    getProducts: (search: string, page: number, category: number) => Promise<Products>;
    signInRequest: (data: signInRequestData) => Promise<ResponseData>;
    checkLogin: (data: checkLoginRequestData) => Promise<ResponseData>;
    signUpRequest: (data: signUpRequestData) => Promise<ResponseData>;
    updateUserInfoRequest: (data: updateUserInfoRequestData) => Promise<updateUserInfoResponseData>;
    changePasswordRequest: (data: changePasswordRequestData) => Promise<changePasswordResponseData>;
    getAddressRequest: (userId: number) => Promise<AddressResponseData>;
    addAddressRequest: (data: AddressRequestData) => Promise<AddressResponseData>;
}

interface FieldsType {
    search?: string;
    page?: number;
    category?: number;
}

export const api: ApiType = {
    getCategories: async () => {
        try{
            const response = await fetch(`${baseURL}/categories`)
            const json = await response.json()
    
            return json
        } catch (error) {
            console.log(error)
        }
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

        try{
            const response = await fetch(`${baseURL}/products?${queryString}`)
            const json = await response.json()
    
            return json
        } catch (error) {
            console.log(error)
        }
    },

    signInRequest: async (data: signInRequestData) => {
        try{
            const response = await fetch(`${baseURL}/login`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(data)
            })

            const json = await response.json()
            return json
        } catch (error) {
            console.log(error)
        }
    },

    // Check if you are logged
    checkLogin: async (data: checkLoginRequestData) => {
        try{
            const response = await fetch(`${baseURL}/check-login`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(data)
            })

            const json = await response.json()
            return json
        } catch (error) {
            console.log(error)
        }
    },

    signUpRequest: async (data: signUpRequestData) => {
        try{
            const response = await fetch(`${baseURL}/register`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(data)
            })

            const json = await response.json()
            return json
        } catch (error) {
            console.log(error)
        }
    },

    updateUserInfoRequest: async(data: updateUserInfoRequestData) => {
        try{
            const response = await fetch(`${baseURL}/user`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(data)
            })

            const json = await response.json()
            return json
        } catch (error) {
            console.log(error)
        }
    },

    changePasswordRequest: async(data: changePasswordRequestData) => {
        try{
            const response = await fetch(`${baseURL}/user/password`, {
                method: "PATCH",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(data)
            })

            const json = await response.json()
            return json
        } catch (error) {
            console.log(error)
        }
    },

    getAddressRequest: async(userId: number) => {
        try{
            const response = await fetch(`${baseURL}/address/${userId}`)
            const json = await response.json()
    
            return json
        } catch (error) {
            console.log(error)
        }
    },

    addAddressRequest: async(data: AddressRequestData) => {
        try{
            const response = await fetch(`${baseURL}/address`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(data)
            })

            const json = await response.json()
            return json
        } catch (error) {
            console.log(error)
        }
    }
}