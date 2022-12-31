import styled from "styled-components";

export const FormRegister = styled.form`
    label{
        color: ${props => props.theme.colors.White};
    }

    input{
        border: 1px solid ${props => props.theme.colors.White};
        color: ${props => props.theme.colors.DarkGreen};

        &::placeholder{
            color: ${props => props.theme.colors.DarkGreen};
        }
    }

    button{
        background-color: ${props => props.theme.colors.White};
        color: ${props => props.theme.colors.DarkGreen};
    }
`;