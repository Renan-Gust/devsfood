import { OrderInProgress } from "../../components/OrderInProgress"
import { useAuth } from "../../contexts/AuthContext"

import { Container, OtherOrders, Order, OrdersArea } from "./styled"

export function Orders(){
    const { user } = useAuth()

    console.log(user)

    return(
        <Container>
            <OrderInProgress />

            <OtherOrders>
                <h2>Outros pedidos</h2>

                <OrdersArea>
                    <Order>
                        <div className="top">
                            <p className="date">20/01/2023</p>
                            <p className="status">Entregue</p>
                        </div>

                        <div className="middle">
                            <div className="address">
                                <p>Minha casa</p>
                                <p>Rua santa luzia, 74</p>
                                <p>Rio de Janeiro, RJ</p>
                            </div>

                            <p className="total">R$ 124.31</p>
                        </div>
                    </Order>

                    <Order>
                        <div className="top">
                            <p className="date">20/01/2023</p>
                            <p className="status">Entregue</p>
                        </div>

                        <div className="middle">
                            <div className="address">
                                <p>Minha casa</p>
                                <p>Rua santa luzia, 74</p>
                                <p>Rio de Janeiro, RJ</p>
                            </div>

                            <p className="total">R$ 124.31</p>
                        </div>
                    </Order>

                    <Order>
                        <div className="top">
                            <p className="date">20/01/2023</p>
                            <p className="status">Entregue</p>
                        </div>

                        <div className="middle">
                            <div className="address">
                                <p>Minha casa</p>
                                <p>Rua santa luzia, 74</p>
                                <p>Rio de Janeiro, RJ</p>
                            </div>

                            <p className="total">R$ 124.31</p>
                        </div>
                    </Order>

                    <Order>
                        <div className="top">
                            <p className="date">20/01/2023</p>
                            <p className="status">Entregue</p>
                        </div>

                        <div className="middle">
                            <div className="address">
                                <p>Minha casa</p>
                                <p>Rua santa luzia, 74</p>
                                <p>Rio de Janeiro, RJ</p>
                            </div>

                            <p className="total">R$ 124.31</p>
                        </div>
                    </Order>

                    <Order>
                        <div className="top">
                            <p className="date">20/01/2023</p>
                            <p className="status">Entregue</p>
                        </div>

                        <div className="middle">
                            <div className="address">
                                <p>Minha casa</p>
                                <p>Rua santa luzia, 74</p>
                                <p>Rio de Janeiro, RJ</p>
                            </div>

                            <p className="total">R$ 124.31</p>
                        </div>
                    </Order>
                </OrdersArea>
            </OtherOrders>
        </Container>
    )
}