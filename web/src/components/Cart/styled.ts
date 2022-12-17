import styled from 'styled-components';

export const CartArea = styled.div`
    background-color: ${props => props.theme.colors.LightGreen};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    position: fixed;
    bottom: 0;
    right: 30px;
`;

export const CartHeader = styled.div`
    width: 310px;
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const CartIcon = styled.img<{ src: string; }>`
    width: 23px;
    height: auto;
    margin: 0 10px;
`;

export const CartText = styled.p`
    color: ${props => props.theme.colors.White};
    font-size: 1.063rem;
    flex: 1;
`;

export const CartBody = styled.div<{ show: boolean; }>`
    display: ${props => props.show ? "flex" : "none"};
    flex-direction: column;
    color: ${props => props.theme.colors.White};
    padding: 10px;
`;

export const ProductsArea = styled.div`
    flex: 1;
`;

export const ProductItem = styled.div`
    display: flex;
    &:not(:last-child){
        margin-bottom: 12px;
    }

    img{
        width: 64px;
        height: auto;
        border-radius: 10px;
    }
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px;

    .name{
        font-weight: 700;
        font-size: 0.94rem;
    }

    .price{
        font-size: 0.82rem;
    }
`;

export const ProductQuantityArea = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 13px;
        height: auto;
        cursor: pointer;
    }

    p{
        font-size: 0.82rem;
        font-weight: 700;
        margin: 0 5px;
    }
`;

export const DeliveryArea = styled.div`
    margin-top: 24px;

    strong{
        display: inline-block;
        margin-bottom: 12px;
    }
`;

export const AddressArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Address = styled.div`
    p:not(:last-child) {
        margin-bottom: 2px;
        font-size: 0.875rem;
    }
`;

export const EditAddress = styled.div`
    img{
        cursor: pointer;
        width: 22px;
        height: auto;
    }
`;

export const CouponArea = styled.div`
    margin-top: 24px;

    strong{
        display: block;
        margin-bottom: 12px;
    }

    input{
        border: 0;
        outline: none;
        border-radius: 10px;
        width: 100%;
        height: 40px;
        padding-left: 10px;

        background-color: ${props => props.theme.colors.White};
        font-size: 1rem;
    }
`;

export const OrderArea = styled.div`
    margin-top: 24px;

    div{
        display: flex;
        justify-content: space-between;

        &:not(:last-child){
            margin-bottom: 12px;
        }
    }
`;

export const FinishOrderButton = styled.button`
    margin-top: 24px;
    padding: 10px 20px;

    background-color: ${props => props.theme.colors.DarkGreen};
    color: ${props => props.theme.colors.White};
    box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.16);
    border-radius: 20px;

    font-weight: bold;
    font-size: 1.2rem;
    text-transform: uppercase;
`;