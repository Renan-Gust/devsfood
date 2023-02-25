import { useEffect, useState } from "react"

import { OrderInProgress } from "../../components/OrderInProgress"
import { useAuth } from "../../contexts/AuthContext"
import { api } from "../../services/api"
import { GetCompletedOrdersResponseData } from "../../types/orders/getCompletedOrders"

import { Container, OtherOrders, Order, OrdersArea } from "./styled"

export function Orders(){
    const { user } = useAuth()

    const [completedOrders, setCompletedOrders] = useState<GetCompletedOrdersResponseData['data']>([])

    console.log(user)

    useEffect(() => {
        async function getCompletedOrders(){
            const response = await api.getCompletedOrders(user?.id!)
            if(response.status === "success"){
                setCompletedOrders(response.data)
            }
        }
        
        getCompletedOrders()

        // console.log(completedOrders)
    }, [])

    return(
        <Container>
            <OrderInProgress />

            <OtherOrders>
                <h2>Outros pedidos</h2>

                <OrdersArea>
                    { completedOrders.length > 0 && completedOrders.map((order, index) => {
                        console.log(order.length)

                        let data = []

                        if(order.length >= 2){
                            let total = 0

                            order.map((item) => {
                                total += item.total
                            })

                            data.push({
                                total
                            })
                        } else {
                            data.push({
                                total: order.total
                            })
                        }

                        data.map((item) => {
                            console.log(item)

                            return(
                                <Order key={index}>
                                    <div className="top">
                                        <p className="date">25/02/203</p>
                                        <p className="status">Entregue</p>
                                    </div>

                                    <div className="middle">
                                        <div className="address">
                                            <p>Minha casa</p>
                                            <p>Rua santa luzia, 74</p>
                                            <p>Rio de Janeiro, RJ</p>
                                        </div>

                                        <p className="total">R$ {item.total}</p>
                                    </div>
                                </Order>
                            )
                        })
                    }) }
                </OrdersArea>
            </OtherOrders>
        </Container>
    )
}