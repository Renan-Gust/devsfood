import styled from "styled-components";

export const Container = styled.div`
    max-width: 650px;
    width: 100%;

    padding: 20px;
    margin: 0 auto;

    display: flex;
    align-items: center;
`;

export const LoginArea = styled.div`
    width: 100%;
    min-width: 500px;
    padding: 32px;

    header{
        display: flex;
        gap: 16px;
        margin-bottom: 40px;

        button{
            border-radius: 5px;

            padding: 8px 40px;
            font-weight: 500;
            font-size: 1.38rem;

            background-color: ${props => props.theme.colors.DarkGreen};
            color: ${props => props.theme.colors.White};

            &:not(.active){
                background-color: transparent;
                border: 1px solid ${props => props.theme.colors.White};
                color: ${props => props.theme.colors.White};
                opacity: 0.7;
            }
        }
    }

    .input-group{
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;

        label{
            margin-bottom: 8px;
            font-weight: 500;
            font-size: 1.3rem;

            color: ${props => props.theme.colors.White};
        }

        input{
            border: none;
            outline: 0;
            border-radius: 10px;
            padding-left: 8px;

            font-size: 1rem;
            height: 40px;
        }
    }
`;

export const SubmitButton = styled.button`
    box-shadow: 4px 5px 0px rgb(0 0 0 / 16%);
    border-radius: 5px;

    width: 100%;
    margin-top: 16px;
    padding: 8px 32px;
    font-weight: 500;
    font-size: 1.38rem;

    background-color: ${props => props.theme.colors.DarkGreen};
    color: ${props => props.theme.colors.White};
`;