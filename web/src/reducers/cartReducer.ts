import { ProductsDataType } from "../types/products";
import { reducerActionType } from "../types/reducerAction";

let products: ProductsDataType[] = []

if(localStorage.getItem("cart") !== null){
    products = JSON.parse(localStorage.getItem("cart")!)
}

export const cartInitialState: ProductsDataType[] = products

export function cartReducer(state: ProductsDataType[], action: reducerActionType){
    let newState = [...state]

    switch(action.type){
        case 'ADD_TO_CART':
            const thereAreProductsInTheCart = localStorage.getItem("cart")

            if(thereAreProductsInTheCart === null){
                localStorage.setItem("cart", JSON.stringify([action.payload]))
            } else {
                const products: ProductsDataType[] = JSON.parse(thereAreProductsInTheCart)

                const productExistInTheCart = products.find(product => product.id === action.payload.id)

                if(productExistInTheCart){
                    const filteredProducts = products.filter(product => product.id !== action.payload.id)
                    const newProducts = []

                    const updateProduct = {
                        id: action.payload.id,
                        name: action.payload.name,
                        image: action.payload.image,
                        price: action.payload.price,
                        quantity: action.payload.quantity + productExistInTheCart.quantity
                    }
                    newProducts.push(updateProduct)

                    filteredProducts.map((item) => {
                        newProducts.push({
                            id: item.id,
                            name: item.name,
                            image: item.image,
                            price: item.price,
                            quantity: item.quantity
                        })
                    })

                    localStorage.removeItem("cart")
                    localStorage.setItem("cart", JSON.stringify(newProducts))
                } else{
                    localStorage.setItem("cart", JSON.stringify([...JSON.parse(thereAreProductsInTheCart), action.payload]))
                }           
            }

            if(thereAreProductsInTheCart){
                newState = JSON.parse(localStorage.getItem("cart")!)
            } else{
                newState.push(action.payload as ProductsDataType)
            }

            return newState
            // return [...state, action.payload.handleAddToCart]
        break;
        
        case 'CHANGE_PRODUCT_QUANTITY':
            const products: ProductsDataType[] = JSON.parse(localStorage.getItem("cart")!)

            const product = products.find(product => product.id === action.payload.id)
            const filteredProducts = products.filter(product => product.id !== action.payload.id)

            let newProducts: ProductsDataType[] = []

            const updateProduct = {
                id: product?.id,
                name: product?.name,
                image: product?.image,
                price: product?.price,
                quantity: product?.quantity
            }

            newProducts.push(updateProduct)

            filteredProducts.map((item: ProductsDataType) => {
                newProducts.push({
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    price: item.price,
                    quantity: item.quantity
                })
            })

            switch(action.payload.type){
                case "decreaseQuantity":
                    updateProduct.quantity!--

                    if(updateProduct.quantity! <= 0){
                        const filteredProducts = newProducts.filter(newProduct => newProduct.id !== updateProduct.id)

                        newProducts = []

                        filteredProducts.map((item: ProductsDataType) => {
                            newProducts.push({
                                id: item.id,
                                name: item.name,
                                image: item.image,
                                price: item.price,
                                quantity: item.quantity
                            })
                        })
                    }
                break;

                case "increaseQuantity":
                    updateProduct.quantity!++
                break;
            }

            localStorage.removeItem("cart")
            localStorage.setItem("cart", JSON.stringify(newProducts))

            newState = JSON.parse(localStorage.getItem("cart")!)

            return newState
        break;

        case 'CLEAR_CART':
            const cart = localStorage.getItem("cart")
            if(cart !== null){
                localStorage.removeItem("cart")
            }

            newState = []

            return newState
        break;
    }

    return state
}