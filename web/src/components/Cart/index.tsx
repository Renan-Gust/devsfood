import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAddress } from '../../contexts/AddressContext'
import { useCart } from '../../contexts/CartContext'
import { useAuth } from '../../contexts/AuthContext'
import { OrderRequestData } from '../../types/orders/doOrder'
import { api } from '../../services/api'
import { Toast } from '../Toast'
import { Loading } from '../Loading'

import { Address, AddressArea, CartArea, CartBody, CartHeader, CartIcon, CartText, CouponArea, DeliveryArea, EditAddress, Button, OrderArea, ProductInfoArea, ProductItem, ProductQuantityArea, ProductsArea } from './styled'

import cartImage from '/assets/cart.png'
import down from '/assets/down.png'
import edit from '/assets/edit.png'
import minus from '/assets/minus.png'
import plus from '/assets/plus.png'

export function Cart() {
    const { state, dispatch } = useCart()
    const { address } = useAddress()
    const { isAuthenticated, user } = useAuth()
    const navigate = useNavigate()

    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [toastText, setToastText] = useState('')

    const total = state.reduce((total, product) => {
        return total + (product.price! * product.quantity!)
    }, 0)

    function handleCartClick() {
        setShow(!show)
    }

    function handleQuantityChange(id: number, type: string){
        dispatch({
            type: "CHANGE_PRODUCT_QUANTITY",
            payload: {
                id,
                type
            }
        })
    }

    async function handleDoOrder(){
        const products: OrderRequestData['productsId'] = []
        let order: OrderRequestData | {} = {}

        if(state.length !== 0){
            setLoading(true)

            state.map((product) => {
                products.push({
                    quantity: product.quantity!,
                    id: product.id!
                })

                order = {
                    userId: user?.id!,
                    total: Number(total.toFixed(2)),
                    deliveryFee: 8.99,
                    productsId: products
                }
            })

            const response = await api.doOrder(order)
            if(response.status === 'success'){
                setToastText("Pedido feito com sucesso")
            } else {
                setToastText(response.message ?? 'Ocorreu algum erro ao completar o pedido!')
                return
            }

            setLoading(false)
            setShow(!show)
            dispatch({ type: "CLEAR_CART" })

            navigate("/orders")
        } else{
            setToastText("Carrinho está vazio!")
        }
    }

    return(
        <>
            <CartArea>
                <CartHeader onClick={handleCartClick}>
                    <CartIcon src={cartImage} />
                    <CartText>Meu carrinho ({state.length})</CartText>

                    {show && <CartIcon src={down} />}
                </CartHeader>

                <CartBody show={show}>
                    <ProductsArea>
                        {state.map((item, index) => (
                            <ProductItem key={index}>
                                <img src={item.image} alt={item.name} />
                                <ProductInfoArea>
                                    <p className="name">{item.name}</p>
                                    <p className="price">R$ {item.price!}</p>
                                </ProductInfoArea>

                                <ProductQuantityArea>
                                    <img 
                                        src={minus} alt="ícone de menos"
                                        onClick={() => handleQuantityChange(item.id!, 'decreaseQuantity')}
                                    />
                                    <p>{item.quantity}</p>
                                    <img 
                                        src={plus} alt="ícone de mais" 
                                        onClick={() => handleQuantityChange(item.id!, 'increaseQuantity')}
                                    />
                                </ProductQuantityArea>
                            </ProductItem>
                        ))}
                    </ProductsArea>

                    <DeliveryArea>
                        <strong>Entrega</strong>
                        <AddressArea>
                            {address ?
                                <>
                                    <Address>
                                        <p>{address.address}, {address.number}</p>
                                        <p>Bairro: {address.neighborhood}</p>
                                        <p>Cidade: {address.city}</p>
                                        <p>Estado: {address.state}</p>
                                    </Address>

                                    <EditAddress>
                                        <Link to="/profile">
                                            <img src={edit} alt="Ícone de um lápis para editar" />
                                        </Link>
                                    </EditAddress>
                                </>
                            :
                                <EditAddress createAddress={true}>
                                    <Link to="/profile" className="createAddress">
                                        Cadastrar um endereço
                                    </Link>
                                </EditAddress>
                            }
                        </AddressArea>
                    </DeliveryArea>

                    <CouponArea>
                        <strong>Cupom de desconto</strong>
                        <input type="text" />
                    </CouponArea>

                    <OrderArea>
                        <div className="discount">
                            <strong>Desconto</strong>
                            <strong>R$ 0.00</strong>
                        </div>
                        
                        <div className="deliveryFee">
                            <strong>Taxa de entrega</strong>
                            <strong>R$ 8.99</strong>
                        </div>

                        <div className="total">
                            <strong>Total</strong>
                            <strong>R$ {total.toFixed(2)}</strong>
                        </div>
                    </OrderArea>

                    { !isAuthenticated ?
                        <Button onClick={handleCartClick}>
                            <Link to="/authentication">Fazer login</Link>
                        </Button>
                    :
                        <Button onClick={handleDoOrder} disabled={state.length === 0 || loading && true}>
                            {!loading && "Finalizar Compra"}
                            {loading && <Loading />}
                        </Button>
                    }
                </CartBody>
            </CartArea>

            {toastText && <Toast text={toastText} setToastText={setToastText} />}
        </>
    )
}