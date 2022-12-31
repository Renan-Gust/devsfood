import { Dispatch, MouseEvent, SetStateAction } from "react";
import { Container, ModalBody } from "./styled";

interface ModalProps {
    children: React.ReactNode;
    status: boolean;
    setStatus: Dispatch<SetStateAction<boolean>>;
}

export function Modal({ children, status, setStatus }: ModalProps) {
    function handleChangeModalStatus(e: MouseEvent<HTMLElement>){
        if((e.target as Element).classList.contains("overlay")){
            setStatus(false)
        }
    }

    return(
        <Container className="overlay" status={status} onClick={(e) => handleChangeModalStatus(e)}>
            <ModalBody bodyType="register">
                {children}
            </ModalBody>
        </Container>
    )
}