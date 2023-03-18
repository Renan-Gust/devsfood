import { Dispatch, MouseEvent, SetStateAction } from "react";
import { FormActiveType } from "../types/user";

type handleChangeFormProps = {
    type: FormActiveType['type'];
    e: MouseEvent<HTMLButtonElement>;
    setFormActive: Dispatch<SetStateAction<FormActiveType['type']>>;
}

export function handleChangeForm({ type, e, setFormActive }: handleChangeFormProps){
    const target = e.target as HTMLButtonElement
    const buttonActiveClassName = "active"

    if(type === 'login'){
        setFormActive('login')

        target.classList.add(buttonActiveClassName)
        target.parentNode?.children[1].classList.remove(buttonActiveClassName)
    } else{
        setFormActive('register')

        target.classList.add(buttonActiveClassName)
        target.parentNode?.children[0].classList.remove(buttonActiveClassName)
    }
}