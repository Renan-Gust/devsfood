import styled from "styled-components";

export const Container = styled.div<{ active: number; idCategory: number; }>`
    width: 80px;
    height: 80px;
    background-color: ${props => props.active === props.idCategory ? props.theme.colors.White : props.theme.colors.VeryLightGreen};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: all ease .3s;
`;

export const CategoryImage = styled.img`
    width: 55px;
    height: 55px;
`;