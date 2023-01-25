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
`;

export const EditArea = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;

    img{
        cursor: pointer;
        width: 16px;
        height: auto;
    }

    input{
        border: 0;
        outline: none;
        border-radius: 10px;
        width: 260px;

        height: 30px;
        padding-left: 10px;

        background-color: ${props => props.theme.colors.White};
        font-size: 1rem;
    }
`;

export const UserArea = styled.div`
    width: 100%;
    margin-top: 24px;

    display: flex;
    justify-content: between;
    gap: 32px;

    .userAreaINner{
        padding: 20px;
        background-color: ${props => props.theme.colors.LightGreen};
        border-radius: 10px;
    }

    p{
        font-size: 2rem;
        font-weight: bold;
    }

    .inputGroup {
        margin-top: 16px;

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
    }

    button{
        box-shadow: 4px 5px 0px rgb(0 0 0 / 16%);
        border-radius: 5px;

        margin-top: 16px;
        padding: 8px 32px;
        font-weight: 500;
        font-size: 1.38rem;

        background-color: ${props => props.theme.colors.DarkGreen};
        color: ${props => props.theme.colors.White};
    }
`;