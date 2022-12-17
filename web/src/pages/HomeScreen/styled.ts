import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 15px;
`;

export const CategoryArea = styled.div`
    color: ${props => props.theme.colors.White};
    margin-top: 20px;
`;

export const CategoryList = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
`;

export const ProductArea = styled.div`
    margin: 20px 0;
`;

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
`;

export const ProductPaginationArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
`;

export const ProductPaginationItem = styled.div<{ active: number; current: number; }>`
    background-color: ${props => props.active === props.current ? "#136713" : "white"};
    color: ${props => props.active === props.current ? "white" : "initial"};
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;
`;