import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";

import { useAddress } from "../../contexts/AddressContext";
import { useAuth } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import { Loading } from "../Loading";

import { Container, Group } from "./styled";

type ChangePasswordProps = {
    setToastText: Dispatch<SetStateAction<string>>;
}

export function AddressArea({ setToastText }: ChangePasswordProps) {
    const { address, setAddress } = useAddress()
    const { user } = useAuth()

    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [neighborhood, setNeighborhood] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setStreet(address?.address ?? '')
        setNumber(address?.number ?? '')
        setNeighborhood(address?.neighborhood ?? '')
        setCity(address?.city ?? '')
        setState(address?.state ?? '')
    }, [])

    async function handleAddAddress(event: FormEvent){
        event.preventDefault()

        if(street && number && neighborhood && city && state){
            setLoading(true)

            const data = {
                userId: user?.id.toString()!,
                address: street,
                number: number,
                neighborhood,
                city,
                state
            }

            const response = await api.addAddressRequest(data)
            setLoading(false)

            if(response.status === 'success'){
                setAddress(response.data)
                setToastText("Alteração feita com sucesso")
            } else {
                setToastText(response.message ?? 'Ocorreu algum erro!')
                return
            }
        } else{
            setToastText("Todos os campos precisam ser preenchidos!")
            return
        }
    }

    async function handleUpdateAddress(event: FormEvent){
        event.preventDefault()

        const data = {
            userId: user?.id.toString()!,
            address: street,
            number: number,
            neighborhood,
            city,
            state
        }

        const response = await api.updateAddressRequest(data)
        if(response.status === 'success'){
            setAddress(response.data)
            setToastText("Alteração feita com sucesso")
        } else {
            setToastText(response.message ?? 'Ocorreu algum erro!')
            return
        }
    }

    return(
        <Container className="userAreaINner">
            <p>Endereço</p>

            <form onSubmit={ address ? handleUpdateAddress : handleAddAddress}>
                <Group>
                    <div className="inputGroup">
                        <strong>Endereço</strong>
                        <input 
                            type="text"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                        />
                    </div>

                    <div className="inputGroup">
                        <strong>Número</strong>
                        <input 
                            type="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>

                    <div className="inputGroup">
                        <strong>Bairro</strong>
                        <input 
                            type="text"
                            value={neighborhood}
                            onChange={(e) => setNeighborhood(e.target.value)}
                        />
                    </div>

                    <div className="inputGroup">
                        <strong>Cidade</strong>
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>

                    <div className="inputGroup">
                        <strong>Estado</strong>
                        <input
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                </Group>

                <button type="submit" disabled={loading}>
                    { address && !loading && "Alterar" }
                    { !address && !loading && "Adicionar" }
                    {loading && <Loading />}
                </button>
            </form>
        </Container>
    )
}