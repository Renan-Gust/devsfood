import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 15px;
    color: ${props => props.theme.colors.White};
`;

export const ProfileArea = styled.div`
    background-color: ${props => props.theme.colors.LightGreen};
    display: flex;
    gap: 16px;
    align-items: center;
    border-radius: 10px;
    padding: 20px;

    .imageArea{
        background-color: ${props => props.theme.colors.DarkGreen};
        padding: 20px;
        border-radius: 10px;

        img{
            height: auto;
            width: 68px;
        }
    }

    div p.email{
        margin-top: 8px;
    }
`;

export const UserArea = styled.div`
    width: 100%;
    margin-top: 24px;
    padding: 20px;
    background-color: ${props => props.theme.colors.LightGreen};
    border-radius: 10px;

    display: flex;
    justify-content: between;
    gap: 32px;

    .changePassword{
        width: 25%;
    }

    .address{
        flex: 1;
    }

    p{
        font-size: 2rem;
        font-weight: bold;
    }
`;

export const Group = styled.div`
    display: flex;
    gap: 16px;
`;

export const InputGroup = styled.div`
    margin-top: 16px;
    margin-bottom: 24px;

    strong{
        display: block;
        margin-bottom: 12px;
    }

    input{
        border: 0;
        outline: none;
        border-radius: 10px;
        width: 100%;

        height: 40px;
        padding-left: 10px;

        background-color: ${props => props.theme.colors.White};
        font-size: 1rem;
    }
`;