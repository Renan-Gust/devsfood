import { Container, Group, InputGroup, ProfileArea, UserArea } from "./styled"

import profileImage from '/assets/profile.png'

export function Profile() {
    return(
        <Container>
            <div className="userArea">
                <ProfileArea>
                    <div className="imageArea">
                        <img src={profileImage} alt="Renan Gustavo" />
                    </div>

                    <div>
                        <p>Renan Gustavo</p>
                        <p className="email">renangustavo7429@gmail.com</p>
                    </div>
                </ProfileArea>

                <UserArea>
                    <div className="changePassword">
                        <p>Alterar senha</p>

                        <InputGroup>
                            <strong>Senhta atual</strong>
                            <input type="password" />
                        </InputGroup>

                        <InputGroup>
                            <strong>Nova Senha</strong>
                            <input type="password" />
                        </InputGroup>
                    </div>

                    <div className="addressArea">
                        <p>Endereço</p>

                        <Group>
                            <InputGroup>
                                <strong>Endereço</strong>
                                <input type="text" value="Rua santa luzia" />
                            </InputGroup>

                            <InputGroup>
                                <strong>Número</strong>
                                <input type="number" value="74" />
                            </InputGroup>

                            <InputGroup>
                                <strong>Bairro</strong>
                                <input type="text" value="Inhaúma" />
                            </InputGroup>

                            <InputGroup>
                                <strong>Cidade</strong>
                                <input type="text" value="Rio de Janeiro" />
                            </InputGroup>

                            <InputGroup>
                                <strong>Estado</strong>
                                <input type="text" value="Rio de Janeiro" />
                            </InputGroup>
                        </Group>
                    </div>
                </UserArea>
            </div>
        </Container>
    )
}