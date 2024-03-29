import styled from "styled-components";

export const SpinnerContainer = styled.div<{ fullPage?: boolean; }>`
    position: absolute;
    top: ${props => props.fullPage ? '50%' : '0'};
    left: 50%;
    transform: ${props => props.fullPage ? 'translate(-50%, -50%)' : 'translateX(-50%)'};
`;

export const Spinner = styled.div`
    display: inline-block;
    position: relative;
    width: 60px;
    height: 46px;

    div{
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 32px;
        height: 32px;
        margin: 8px;
        border: 4px solid ${props => props.theme.colors.White};
        border-radius: 50%;
        animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${props => props.theme.colors.White} transparent transparent transparent;
    }

    div:nth-child(1) {
        animation-delay: -0.45s;
    }

    div:nth-child(2) {
        animation-delay: -0.3s;
    }

    div:nth-child(3) {
        animation-delay: -0.15s;
    }

    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;