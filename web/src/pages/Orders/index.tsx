import { useEffect, useState } from "react"

import { OrderInProgress } from "../../components/OrderInProgress"
import { useAuth } from "../../contexts/AuthContext"
import { api } from "../../services/api"

import { GetCompletedOrdersResponseData } from "../../types/orders/getCompletedOrders"
import { formatDate } from "../../utils/formatDate"

import { Container, OtherOrders, Order, OrdersArea } from "./styled"

export function Orders(){
    const { user } = useAuth()

    const [completedOrders, setCompletedOrders] = useState<GetCompletedOrdersResponseData['data']>([])

    useEffect(() => {
        async function getCompletedOrders(){
            const response = await api.getCompletedOrders(user?.id!)
            if(response.status === "success"){
                setCompletedOrders(response.data)
            }
        }
        
        getCompletedOrders()
    }, [])

    return(
        <Container>
            <OrderInProgress />

            <OtherOrders>
                <h2>Outros pedidos</h2>

                <OrdersArea>
                    { completedOrders.map((order, index) => {
                        console.log(order)

                        let status = "Recebido"

                        if(order.status === "delivered"){
                            status = "Entregue"
                        } else if(order.status === "received"){
                            status = "Recebido"
                        } else{
                            status = "Enviado"
                        }

                        return(
                            <Order key={index}>
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