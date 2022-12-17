import styled from 'styled-components';

export const LinkArea = styled.div<{ active: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;

    background-color: ${props => props.active ? props.theme.colors.DarkGreen2 : "transparent"};
    border-radius: 10px;

    margin-bottom: 10px;
`;

export const LinkIcon = styled.img`
    height: auto;
    width: 34px;
`;