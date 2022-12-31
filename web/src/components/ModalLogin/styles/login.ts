import styled from "styled-components";

export const FormLogin = styled.form`
    label{
        color: ${props => props.theme.colors.DarkGreen};
    }

    input{
        border: 1px solid ${props => props.theme.colors.DarkGreen};
    }

    button{
        background-color: ${props => props.theme.colors.DarkGreen};
        color: ${props => props.theme.colors.White};
    }
`;

export const RememberMe = styled.div`
    label{
        margin-left: 8px;
        color: ${props => props.theme.colors.DarkGreen};
    }

    input{
        border-radius: 5px;
        width: 16px;
        height: 16px;
        position: relative;
    }

    input:checked{
        &::after{
            content: "";
            position: absolute;
            width: 16px;
            height: 16px;
            background-color: ${props => props.theme.colors.DarkGreen};
            border-radius: 5px;
        }
    }
`;