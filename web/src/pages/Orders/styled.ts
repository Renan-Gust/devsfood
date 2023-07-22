import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 15px;
    color: ${props => props.theme.colors.LightGreen};
`;

export const OtherOrders = styled.div`
    h2{
        color: ${props => props.theme.colors.White};
        font-weight: 400;
        font-size: 1.2rem;
        margin-bottom: 12px;
    }
`;

export const OrdersArea = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 32px;
`;

export const Order = styled.div`
    border-radius: 10px;
    background-color: ${props => props.theme.colors.White};
    padding: 20px;
    cursor: pointer;

    .top{
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
    }

    .middle{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .address{}

        .total{
            font-weight: bold;
        }
    }
`;