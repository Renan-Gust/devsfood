import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    position: relative;
`;

export const Menu = styled.nav`
    background-color: ${props => props.theme.colors.LightGreen};
    width: 80px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PageBody = styled.div`
    display: flex;
    flex: 1;
    background-image: url('/assets/bg.png');
    background-color: ${props => props.theme.colors.Green};
    overflow-y: auto;
`;