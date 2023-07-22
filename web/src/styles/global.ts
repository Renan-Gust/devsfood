import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Helvetica, Arial;
    }

    body{
        overflow-y: hidden;
        -webkit-font-smoothing: antialiased;
    }

    html {
        scroll-behavior: smooth;
        
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        
        @media (max-width: 768px) {
            font-size: 87.5%;
        }
    }

    button{
        border: none;
        outline: none;
        cursor: pointer;
        position: relative;

        &:disabled{
            height: 46px;
            cursor: not-allowed;
            opacity: 0.8;
        }
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        max-width: 100%;
        display: block;
        -webkit-user-drag: none;
    }
`;