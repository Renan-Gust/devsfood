import { createContext, Dispatch, SetStateAction, useContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cartReducer";

import { ProductsDataType } from "../types/products";

interface ContextType {
    state: ProductsDataType[];
    dispatch: Dispatch<SetStateAction<any>>;
}

export const Context = createContext<ContextType>({
    state: cartInitialState,
    dispatch: () => null
})

export const ContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    return(
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}

export const useCart = () => useContext<ContextType>(Context)