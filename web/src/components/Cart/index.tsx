import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAddress } from '../../contexts/AddressContext'
import { useCart } from '../../contexts/CartContext'

import { Address, AddressArea, CartArea, CartBody, CartHeader, CartIcon, CartText, CouponArea, DeliveryArea, EditAddress, FinishOrderButton, OrderArea, ProductInfoArea, ProductItem, ProductQuantityArea, ProductsArea } from './styled'

import cartImage from '/assets/cart.png'
import down from '/assets/down.png'
import edit from '/assets/edit.png'
import minus from '/assets/minus.png'
import plus from '/assets/plus.png'

export function Cart() {
    const {state, dispatch} = useCart()
    const {address} = useAddress()

    const [show, setShow] = useState<boolean>(false)

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

    const total = state.reduce((total, product) => {
        return total + (product.price! * product.quantity!)
    }, 0)

    return(
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

                <FinishOrderButton>
                    Finalizar Compra
                </FinishOrderButton>
            </CartBody>
        </CartArea>
    )
}