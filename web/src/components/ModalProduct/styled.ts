import styled from "styled-components";

export const Container = styled.div`
    max-width: 650px;
    width: 100%;
    padding: 20px;
`;

export const ProductArea = styled.div`
    display: flex;
    gap: 16px;

    img{
        width: 310px;
        border-radius: 10px;
    }
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ProductDetails = styled.div`
    height: 50px;
    color: ${props => props.theme.colors.LightGreen};

    p.name{
        font-size: 1.88rem;
        font-weight: bold;
    }
`;

export const ProductQuantityArea = styled.div`
    display: flex;
    justify-content: space-between;

    p.price{
        font-size: 1.88rem;
        font-weight: bold;
        color: ${props => props.theme.colors.LightGreen};
    }
`;

export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colors.DarkGreen};
    border-radius: 5px;

    img{
        width: 24px;
        height: auto;
        margin: 0 10px;
        cursor: pointer;
    }

    p{
        font-size: 1.57rem;
        font-weight: bold;
        color: ${props => props.theme.colors.White};
    }
`;

export const ProductButtons = styled.div`
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;

    button:first-child{
        font-size: 1rem;
        padding: 10px 15px;
    }

    button{
        border: 0;
        background-color: ${props => props.theme.colors.DarkGreen};
        box-shadow: 4px 5px 0px rgba(0, 0, 0, 0.16);
        border-radius: 5px;
        cursor: pointer;
        color: ${props => props.theme.colors.White};
        padding: 10px 20px;
        font-weight: bold;
        font-size: 1.38rem;
    }
`;