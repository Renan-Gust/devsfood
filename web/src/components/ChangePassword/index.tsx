import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import { api } from "../../services/api";

import { Container } from "./styled";

type ChangePasswordProps = {
    setToastText: Dispatch<SetStateAction<string>>;
}

export function ChangePassword({ setToastText }: ChangePasswordProps) {
    const { user, setUser } = useAuth()
    const id = user?.id!

    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    async function handleChangePassword(event: FormEvent){
        event.preventDefault()

        if(password && newPassword){
            const response = await api.changePasswordRequest({ id, password, newPassword })
            if(response.status === 'success'){
                setUser(response.data.user)
                setPassword("")
                setNewPassword("")

                setToastText("Alteração feita com sucesso")
            } else {
                setToastText(response.message ?? 'Ocorreu algum erro!')
                return
            }
        } else{
            setToastText("Campos precisam ser preenchidos")
            return
        }
    }

    return(
        <Container className="userAreaINner">
            <p>Alterar senha</p>

            <form onSubmit={handleChangePassword}>
                <div className="inputGroup">
                    <strong>Senhta atual</strong>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="inputGroup">
                    <strong>Nova Senha</strong>
                    <input type="password" onChange={(e) => setNewPassword(e.target.value)} />
                </div>

                <button type="submit">Alterar</button>
            </form>
        </Container>
    )
}