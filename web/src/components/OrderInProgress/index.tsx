import { OrderStatus, Container, OrderStatusArea, ProductArea, Products, DeliveryAddress, Payment } from "./styled"

import { OrderData } from "../../types/orders/ordersResponseData"
import { formatDate } from "../../utils/formatDate"

interface OrderInProgressProps {
    order: OrderData;
}

export function OrderInProgress({ order }: OrderInProgressProps){
    let status = 0
    let width = 0

    if(order.status === "dispatched"){
        status = 1
    } else if(order.status === "delivered"){
        status = 2
    }

    if(status === 0){
        width = 30
    } else if(status === 1){
        width = 75
    } else if(status === 2){
        width = 100
    }

    return(
        <Container>
            <OrderStatusArea status={width}>
                <OrderStatus className={`orderReceived ${status === 0 || status > 0 ? "reached" : ""}`}>
                    <div>
                        <span></span>
                        <p>Pedido Recebido</p>
                    </div>
                </OrderStatus>
                <OrderStatus className={`orderDispatched ${status === 1 || status > 1 ? "reached" : ""}`}>
                    <div>
                        <span></span>
                        <p>Pedido Enviado</p>
                    </div>
                </OrderStatus>
                <OrderStatus className={`orderDelivered ${status === 2 && "reached"}`}>
                    <div>
                        <span></span>
                        <p>Pedido Entregue</p>
                    </div>
                </OrderStatus>
            </OrderStatusArea>

            <ProductArea>
                <Products>
                    {order.products.map((product, index) => (
                        <div className="product" key={index}>
                            <img src={product.image} alt={product.name} />

                            <div className="info">
                                <p>{product.name}</p>
                                <p>R$ {product.price}</p>
                            </div>
                        </div>
                    ))}
                </Products>

                <DeliveryAddress>
                    <div className="orderDate">
                        <p>Data do pedido:</p>
                        <p>{formatDate(order.created_at)}</p>
                    </div>

                    <div className="address">
                        <p>Endereço de Entrega:</p>
                        <p>{order.address.neighborhood}</p>
                        <p>{order.address.address}, {order.address.number}</p>
                        <p>{order.address.city}, {order.address.state}</p>
                    </div>
                </DeliveryAddress>

                <Payment>
                    <div className="discount">
                        <p>Desconto</p>
                        <p>R$ 0.00</p>
                    </div>

                    <div className="deliveryFee">
                        <p>Taxa de Entrega</p>
                        <p>R$ {order.delivery_fee}</p>
                    </div>

                    <div className="total">
                        <p>Total</p>
                        <p>R$ {order.total}</p>
                    </div>
                </Payment>
            </ProductArea>
        </Container>
    )
}