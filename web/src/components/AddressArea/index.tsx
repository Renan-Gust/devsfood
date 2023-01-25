import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";
import { useAddress } from "../../contexts/AddressContext";
import { useAuth } from "../../contexts/AuthContext";
import { api } from "../../services/api";

import { Container, Group } from "./styled";

type ChangePasswordProps = {
    setToastText: Dispatch<SetStateAction<string>>;
}

export function AddressArea({ setToastText }: ChangePasswordProps) {
    const { address, setAddress, loading, setLoading } = useAddress()
    const { user } = useAuth()

    const [street, setStreet] = useState('')
    const [number, setNumber] = useState<string | null>(null)
    const [neighborhood, setNeighborhood] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')

    useEffect(() => {
        (async () => {
            const response = await api.getAddressRequest(user?.id!)
    
            if(response.status === 'success'){
                setAddress(response.data)
            }
        })()

        setLoading(false)
    }, [])

    async function handleAddAddress(event: FormEvent){
        event.preventDefault()

        if(street && number && neighborhood && city && state){
            const data = {
                userId: user?.id.toString()!,
                address: street,
                number: number.toString(),
                neighborhood,
                city,
                state
            }

            const response = await api.addAddressRequest(data)
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

    function handleUpdateAddress(event: FormEvent){
        event.preventDefault()
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
                            value={!loading ? address?.address : ''}
                            onChange={(e) => setStreet(e.target.value)}
                        />
                    </div>

                    <div className="inputGroup">
                        <strong>Número</strong>
                        <input 
                            type="number"
                            value={!loading ? Number(address?.number) : ''}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>

                    <div className="inputGroup">
                        <strong>Bairro</strong>
                        <input 
                            type="text"
                            value={!loading ? address?.neighborhood : ''}
                            onChange={(e) => setNeighborhood(e.target.value)}
                        />
                    </div>

                    <div className="inputGroup">
                        <strong>Cidade</strong>
                        <input
                            type="text"
                            value={!loading ? address?.city : ''}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>

                    <div className="inputGroup">
                        <strong>Estado</strong>
                        <input
                            type="text"
                            value={!loading ? address?.state : ''}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                </Group>

                <button type="submit">
                    { address ? "Alterar" : "Adicionar" }
                </button>
            </form>
        </Container>
    )
}