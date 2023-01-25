import { Container, Group } from "./styled"

export function AddressArea() {
    return(
        <Container className="userAreaINner">
            <p>Endereço</p>

            <form>
                <Group>
                    <div className="inputGroup">
                        <strong>Endereço</strong>
                        <input type="text" value="Rua santa luzia" readOnly />
                    </div>

                    <div className="inputGroup">
                        <strong>Número</strong>
                        <input type="number" value="74" readOnly />
                    </div>

                    <div className="inputGroup">
                        <strong>Bairro</strong>
                        <input type="text" value="Inhaúma" readOnly />
                    </div>

                    <div className="inputGroup">
                        <strong>Cidade</strong>
                        <input type="text" value="Rio de Janeiro" readOnly />
                    </div>

                    <div className="inputGroup">
                        <strong>Estado</strong>
                        <input type="text" value="Rio de Janeiro" readOnly />
                    </div>
                </Group>

                <button type="submit">Alterar</button>
            </form>
        </Container>
    )
}