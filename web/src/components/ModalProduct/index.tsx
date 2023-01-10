import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useCart } from '../../contexts/CartContext';

import { ProductsDataType } from '../../types/products';

import { Container, ProductArea, ProductButtons, ProductDetails, ProductInfoArea, ProductQuantity, ProductQuantityArea } from './styled';

import minus from '/assets/minus.png';
import plus from '/assets/plus.png';

interface ModalProductDataProps {
    data: ProductsDataType;
    setStatus: Dispatch<SetStateAction<boolean>>;
}

export function ModalProduct({ data, setStatus }: ModalProductDataProps){
    const { dispatch } = useCart()
    const [quantity, setQuantity] = useState<number>(1)

    function handleMinusQuantity(){
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    function handlePlusQuantity(){
        setQuantity(quantity + 1)
    }

    function handleAddToCart(product: ProductsDataType) {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity
            }
        })

        setStatus(false)
    }

    useEffect(() => {
        setQuantity(1)
    }, [data])

    return(
        <Container>
            <ProductArea>
                <img src={data.image} alt="Imagem do produto" />
                <ProductInfoArea>
                    <ProductDetails>
                        <p className="name">{data.name}</p>
                        <p className="ingredients">{data.ingredients}</p>
                    </ProductDetails>

                    <ProductQuantityArea>
                        <ProductQuantity>
                            <img src={minus} alt="ícone de menos" onClick={handleMinusQuantity} />
                            <p>{quantity}</p>
                            <img src={plus} alt="ícone de mais" onClick={handlePlusQuantity} />
                        </ProductQuantity>

                        <p className="price">R$ {(data.price! * quantity).toFixed(2)}</p>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>

            <ProductButtons>
                <button onClick={() => setStatus(false)}>Cancelar</button>
                <button onClick={() => handleAddToCart(data)}>Adicionar ao Carrinho</button>
            </ProductButtons>
        </Container>
    )
}