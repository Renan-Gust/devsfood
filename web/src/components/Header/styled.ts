import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.LightGreen};
    border-radius: 10px;
    padding: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img<{ src: string; }>`
    width: auto;
    height: 70px;
`;

export const SearchInput = styled.input<{ active: boolean; }>`
    border: 0;
    outline: none;
    border-radius: 25px;
    width: ${props => props.active ? '300px' : '0px'};
    height: 50px;
    padding-left: 50px;

    background-color: ${props => props.theme.colors.White};
    background-image: url('/assets/search.png');
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;

    font-size: 1rem;
    transition: all ease .2s;
    cursor: pointer;

    &:focus{
        cursor: initial;
    }
`;