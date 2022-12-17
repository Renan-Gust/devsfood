import styled from 'styled-components';

export const Container = styled.div`
    color: ${props => props.theme.colors.LightGreen};
    background-color: ${props => props.theme.colors.White};
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    padding: 10px;

    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const ProductPhotoArea = styled.div`
    width: 100px;

    img{
        width: 100%;
    }
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin: 0 10px;

    h1{
        font-size: 1.25rem;
        font-weight: bold;
    }

    p:last-child{
        font-size: 0.69rem;
    }
`;

export const ProductButtonArea = styled.div`
    img{
        width: 15px;
    }
`;