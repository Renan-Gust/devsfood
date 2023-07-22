import { Dispatch, FormEvent, SetStateAction, useState } from "react";

import { useAuth } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import { Loading } from "../Loading";

import { Container } from "./styled";

type ChangePasswordProps = {
    setToastText: Dispatch<SetStateAction<string>>;
}

export function ChangePassword({ setToastText }: ChangePasswordProps) {
    const { user, setUser } = useAuth()
    const id = user?.id!

    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleChangePassword(event: FormEvent){
        event.preventDefault()

        if(password && newPassword){
            setLoading(true)

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
            
            setLoading(false)
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
                    <strong>Senha atual</strong>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="inputGroup">
                    <strong>Nova Senha</strong>
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>

                <button type="submit" disabled={loading}>
                    {!loading && 'Alterar'}
                    {loading && <Loading />}
                </button>
            </form>
        </Container>
    )
}