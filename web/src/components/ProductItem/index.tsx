import { ProductsDataType } from "../../types/products"

import { Container, ProductPhotoArea, ProductInfoArea, ProductButtonArea } from './styled'

import next from '/assets/next.png'

interface ProductsProps {
    data: ProductsDataType;
    onClick: (data: ProductsDataType) => void;
}

export function ProductItem({ data, onClick }: ProductsProps){
    function handleClick(){
        onClick(data)
    }

    return(
        <Container onClick={handleClick}>
            <ProductPhotoArea>
                <img src={data.image} alt={data.name} />
            </ProductPhotoArea>

            <ProductInfoArea>
                <h1>{data.name}</h1>
                <p>R$ {data.price}</p>
                <p>{data.ingredients}</p>
            </ProductInfoArea>

            <ProductButtonArea>
                <img src={next} alt="uma seta pra direita" />
            </ProductButtonArea>
        </Container>
    )
}