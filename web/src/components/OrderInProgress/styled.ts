import styled from "styled-components";

export const Container = styled.div`
    border-radius: 10px;
    background-color: ${props => props.theme.colors.White};
    margin-bottom: 48px;
    padding: 20px;
`;

export const OrderStatusArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    &:after{
        content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        top: 14px;
        background-color: ${props => props.theme.colors.DarkGreen2};
    }

    &:before{
        content: "";
        width: 75%;
        height: 3px;
        position: absolute;
        top: 13px;
        background-color: ${props => props.theme.colors.DarkGreen2};
    }
`;

export const OrderStatus = styled.div`
    &.orderDispatched{
        span{
            margin: 0 auto;
        }
    }

    &.orderDelivered{
        span{
            margin-left: auto;
        }
    }

    &.reached{
        span{
            background-color: ${props => props.theme.colors.DarkGreen2};
        }

        p{
            font-weight: bold;
        }
    }

    span{
        display: block;
        height: 25px;
        width: 25px;

        background-color: ${props => props.theme.colors.White};
        border: 3px solid ${props => props.theme.colors.DarkGreen2};
        border-radius: 50%;

        position: relative;
        z-index: 1;
    }
`;

export const ProductArea = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
`;

export const Products = styled.div`
    .product:not(:last-child){
        margin-bottom: 16px;
    }

    .product{
        display: flex;
        gap: 12px;

        img{
            width: 64px;
            height: auto;
            border-radius: 10px;
        }

        .info p:first-child{
            font-weight: bold;
        }
    }
`;

export const DeliveryAddress = styled.div`
    .orderDate{
        margin-bottom: 24px;
    }

    .orderDate p:first-child{
        font-weight: bold;
    }

    .address p:first-child{
        font-weight: bold;
    }
`;

export const Payment = styled.div`
    div:not(:last-child){
        margin-bottom: 12px;
    }

    div{
        display: flex;
        justify-content: space-between;
        gap: 80px;

        p{
            font-weight: bold;
        }
    }
`;