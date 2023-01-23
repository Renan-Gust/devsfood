import { Dispatch, SetStateAction, useRef } from 'react';

import { Container, Content, Inner, Loading } from './styled';

type ToastProps = {
    text: string;
    setToastText: Dispatch<SetStateAction<string>>;
}

export function Toast({ text, setToastText }: ToastProps){
    const toastRef = useRef<HTMLDivElement>(null)

    setTimeout(() => {
        setToastText('')
    }, 3000)

    return(
        <Container ref={toastRef}>
            <Inner>
                <Content>
                    <p>{text}</p>
                </Content>

                <Loading />
            </Inner>
        </Container>
    )
}