import { OrderStatus, Container, OrderStatusArea, ProductArea, Products, DeliveryAddress, Payment } from "./styled"

export function OrderInProgress(){
    return(
        <Container>
            <OrderStatusArea>
                <OrderStatus className="orderReceived reached">
                    <div>
                        <span></span>
                        <p>Pedido Recebido</p>
                    </div>
                </OrderStatus>
                <OrderStatus className="orderDispatched reached">
                    <div>
                        <span></span>
                        <p>Pedido Enviado</p>
                    </div>
                </OrderStatus>
                <OrderStatus className="orderDelivered">
                    <div>
                        <span></span>
                        <p>Pedido Entregue</p>
                    </div>
                </OrderStatus>
            </OrderStatusArea>

            <ProductArea>
                <Products>
                    <div className="product">
                        <img src="./assets/food-and-restaurant.png" alt="" />

                        <div className="info">
                            <p>Carry pie</p>
                            <p>R$ 13.65</p>
                        </div>
                    </div>

                    <div className="product">
                        <img src="./assets/food-and-restaurant.png" alt="" />

                        <div className="info">
                            <p>Carry pie</p>
                            <p>R$ 13.65</p>
                        </div>
                    </div>
                </Products>

                <DeliveryAddress>
                    <div className="orderDate">
                        <p>Data do pedido:</p>
                        <p>20/01/2023</p>
                    </div>

                    <div className="address">
                        <p>Endereço de Entrega:</p>
                        <p>Minha casa</p>
                        <p>Rua santa luzia, 74</p>
                        <p>Rio de Janeiro, RJ</p>
                    </div>
                </DeliveryAddress>

                <Payment>
                    <div className="discount">
                        <p>Desconto</p>
                        <p>R$ 0.00</p>
                    </div>

                    <div className="deliveryFee">
                        <p>Taxa de Entrega</p>
                        <p>R$ 7.99</p>
                    </div>

                    <div className="total">
                        <p>Total</p>
                        <p>R$ 124.31</p>
                    </div>
                </Payment>
            </ProductArea>
        </Container>
    )
}