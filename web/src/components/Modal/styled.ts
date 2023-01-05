import styled from "styled-components";

export const Container = styled.div<{ status: boolean; }>`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 900;

    background-color: rgba(0, 0, 0, 0.7);
    display: ${props => props.status ? "flex" : "none"};
    align-items: center;
    justify-content: center;
`;

export const ModalBody = styled.div`
    max-width: 100vw;
    max-height: 90vh;
    overflow: auto;

    background-color: ${props => props.theme.colors.White};
    border-radius: 20px;
    box-shadow: 0px 0px 50px black;
`;