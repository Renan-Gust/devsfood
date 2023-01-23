import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.LightGreen};
    border-radius: 10px;

    width: 360px;
    height: 70px;
    position: absolute;
    bottom: 20px;
`;

export const Inner = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    height: 100%;
    color: ${props => props.theme.colors.White};

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
`;

export const Loading = styled.div`
    height: 8px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.White};
    animation: loading 3s linear;

    @keyframes loading {
        0%{
            width: 0%;
        }
        25%{
            width: 25%;
        }
        50%{
            width: 50%;
        }
        75%{
            width: 75%;
        }
        100%{
            width: 100%;
        }
    }
`;