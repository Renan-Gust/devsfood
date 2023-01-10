import { useRef } from 'react';

import { Container, Content, Inner, Loading } from './styled';

type ToastProps = {
    text: string;
}

export function Toast({ text }: ToastProps){
    const toastRef = useRef<HTMLDivElement>(null)

    setTimeout(() => {
        toastRef.current?.remove()
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