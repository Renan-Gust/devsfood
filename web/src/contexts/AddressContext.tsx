import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

import { AddressResponseData } from "../types/address";

interface AddressContextType {
    address: AddressResponseData['data'] | null;
    setAddress: Dispatch<SetStateAction<AddressContextType['address']>>;
    loading: boolean;
    setLoading: any;
}

export const Context = createContext({} as AddressContextType)

export const AddressContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [address, setAddress] = useState<AddressContextType['address'] | null>(null)
    const [loading, setLoading] = useState(true)

    return(
        <Context.Provider value={{ address, setAddress, loading, setLoading }}>
            {children}
        </Context.Provider>
    )
}

export const useAddress = () => useContext<AddressContextType>(Context)