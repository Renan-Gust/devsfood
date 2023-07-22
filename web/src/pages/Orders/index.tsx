import { useEffect, useState } from "react"

import { OrderInProgress } from "../../components/OrderInProgress"
import { useAuth } from "../../contexts/AuthContext"
import { api } from "../../services/api"
import { OrdersResponseData, OrderData } from "../../types/orders/ordersResponseData"
import { formatDate } from "../../utils/formatDate"

import { Container, OtherOrders, Order, OrdersArea } from "./styled"

export function Orders(){
    const { user } = useAuth()

    const [orders, setOrders] = useState<OrdersResponseData['data']>([])
    const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null)

    useEffect(() => {
        async function getOrders(){
            const response = await api.getOrders(user?.id!)
            if(response.status === "success"){
                setOrders(response.data)
            }
        }

        async function getOrderInProgress(){
            const response = await api.getOrderInProgress(user?.id!)
            if(response.status === "success"){
                setSelectedOrder(response.data)
            }
        }
        
        getOrders()
        getOrderInProgress()
    }, [])

    function handleShowOrder(order: OrderData){
        setSelectedOrder(order)
    }

    return(
        <Container>
            {selectedOrder !== null && <OrderInProgress order={selectedOrder} />}

            <OtherOrders>
                <h2>Outros pedidos</h2>

                <OrdersArea>
                    { orders.map((order, index) => {
                        let status = "Recebido"

                        if(order.status === "delivered"){
                            status = "Entregue"
                        } else if(order.status === "received"){
                            status = "Recebido"
                        } else{
                            status = "Enviado"
                        }

                        return(
                            <Order key={index} onClick={() => handleShowOrder(order)}>
                                <div className="top">
                                    <p className="date">{ formatDate(order.created_at) }</p>
                                    <p className="status">{ status }</p>
                                </div>

                                <div className="middle">
                                    <div className="address">
                                        <p>{order.address.neighborhood}</p>
                                        <p>{order.address.address}, {order.address.number}</p>
                                        <p>{order.address.city}, {order.address.state}</p>
                                    </div>

                                    {/* {order.products.map((product, index) => (
                                        <p key={index}>{product.name}</p>
                                    ))} */}

                                    <p className="total">R$ { order.total }</p>
                                </div>
                            </Order>
                        )
                    }) }
                </OrdersArea>
            </OtherOrders>
        </Container>
    )
}