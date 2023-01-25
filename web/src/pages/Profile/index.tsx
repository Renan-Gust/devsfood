import { useEffect, useState } from "react"
import { Toast } from "../../components/Toast"
import { useAuth } from "../../contexts/AuthContext"
import { api } from "../../services/api"
import { updateUserInfoRequestData } from "../../types/auth"
import { Container, EditArea, Group, InputGroup, ProfileArea, UserArea } from "./styled"

import editImage from '/assets/edit.png'
import profileImage from '/assets/profile.png'

let searchTimer: any = null

export function Profile() {
    const { user, setUser } = useAuth()
    const id = user?.id!

    const [toastText, setToastText] = useState('')
    const [editName, setEditName] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    async function changeUserInfo() {
        const data: updateUserInfoRequestData = {
            id,
            name,
        }

        if(email !== user?.email){
            data.email = email
        }

        console.log(name, email, user?.email)

        const result = await api.updateUserInfoRequest(data)
        if(result.status === "success"){
            setUser(result.data.user)

            setName(result.data.user.name)
            setEmail(result.data.user.email)

            setEditName(false)
            setEditEmail(false)

            setToastText("Alteração feita com sucesso")
        } else {
            setToastText(result.message ? result.message : "Email e senha precisam ser preenchidos")
            return
        }
    }

    function handleEditUserInfo(info: "name" | "email") {
        setEditName(false)
        setEditEmail(false)

        if(info === "name"){
            setEditName(!editName)
        } else {
            setEditEmail(!editEmail)
        }
    }

    useEffect(() => {
        setName(user?.name!)
        setEmail(user?.email!)
    }, [])

    useEffect(() => {
        clearTimeout(searchTimer)

        if(name && email){
            searchTimer = setTimeout(() => {
                if(name !== user?.name || email !== user?.email) {
                    changeUserInfo()
                }
            }, 2000)
        }
    }, [name, email])

    return(
        <Container>
            <div className="userArea">
                <ProfileArea>
                    <div className="imageArea">
                        <img src={profileImage} alt={name} />
                    </div>

                    <div>
                        <EditArea>
                            {!editName
                                ?
                                <p>{name}</p>
                                : 
                                <input 
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            }

                            <img 
                                src={editImage}
                                alt="Ícone de um lápis para editar"
                                onClick={() => handleEditUserInfo("name")}
                            />
                        </EditArea>
                        <EditArea>
                            {!editEmail
                                ?
                                <p className="email">{email}</p>
                                :
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            }
                            <img
                                src={editImage}
                                alt="Ícone de um lápis para editar"
                                onClick={() => handleEditUserInfo("email")}
                            />
                        </EditArea>
                    </div>
                </ProfileArea>

                <UserArea>
                    <div className="changePassword userAreaINner">
                        <p>Alterar senha</p>

                        <InputGroup>
                            <strong>Senhta atual</strong>
                            <input type="password" readOnly />
                        </InputGroup>

                        <InputGroup>
                            <strong>Nova Senha</strong>
                            <input type="password" readOnly />
                        </InputGroup>
                    </div>

                    <div className="addressArea userAreaINner">
                        <p>Endereço</p>

                        <Group>
                            <InputGroup>
                                <strong>Endereço</strong>
                                <input type="text" value="Rua santa luzia" readOnly />
                            </InputGroup>

                            <InputGroup>
                                <strong>Número</strong>
                                <input type="number" value="74" readOnly />
                            </InputGroup>

                            <InputGroup>
                                <strong>Bairro</strong>
                                <input type="text" value="Inhaúma" readOnly />
                            </InputGroup>

                            <InputGroup>
                                <strong>Cidade</strong>
                                <input type="text" value="Rio de Janeiro" readOnly />
                            </InputGroup>

                            <InputGroup>
                                <strong>Estado</strong>
                                <input type="text" value="Rio de Janeiro" readOnly />
                            </InputGroup>
                        </Group>
                    </div>
                </UserArea>
            </div>

            {toastText && <Toast text={toastText} setToastText={setToastText} />}
        </Container>
    )
}