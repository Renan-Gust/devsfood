import { FormEvent, MouseEvent, useState } from 'react';
import { Toast } from '../../components/Toast';
import { useAuth } from '../../contexts/AuthContext';

import { Container, LoginArea, SubmitButton } from './styled';

type FormActiveType = {
    type: 'login' | 'register';
}

type RegisterFormProps = {
    handleSignUp: () => void;
}

export function Auth(){
    const [formActive, setFormActive] = useState<FormActiveType['type']>('login')
    const [toastText, setToastText] = useState<string>('')
    const buttonActiveClassName = "active"

    const { signIn } = useAuth()

    function handleChangeForm(type: FormActiveType['type'], e: MouseEvent){
        const target = e.target as HTMLButtonElement

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

    function handleSignIn(event: FormEvent){
        event.preventDefault()

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        if(!data.email || !data.password){
            setToastText("Email e senha precisam ser preenchidos")
        }

        console.log(data)
    }

    function handleSignUp(){}

    return(
        <Container>
            <LoginArea>
                <header>
                    <button className="login active" onClick={(e) => handleChangeForm('login', e)}>Login</button>
                    <button className="register" onClick={(e) => handleChangeForm('register', e)}>Cadastrar</button>
                </header>

                <div className="formArea">
                    {formActive === 'login' ?
                        <form onSubmit={handleSignIn}>
                            <div className="input-group login">
                                <label htmlFor="email">E-mail</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    placeholder="Digite seu E-mail..."
                                />
                            </div>

                            <div className="input-group login">
                                <label htmlFor="password">Senha</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password"
                                    placeholder="Digite sua senha..."
                                />
                            </div>

                            <SubmitButton type="submit">Entrar</SubmitButton>
                        </form>
                        :
                        <Register handleSignUp={handleSignUp} />
                    }
                </div>
            </LoginArea>

            {toastText && <Toast text={toastText} />}
        </Container>
    )
}

function Register({ handleSignUp }: RegisterFormProps){
    return(
        <form action="">
            <div className="input-group register">
                <label htmlFor="name">Nome de usuário</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Digite seu nome..."
                />
            </div>

            <div className="input-group register">
                <label htmlFor="email">E-mail</label>
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="Digite seu E-mail..."
                />
            </div>
        
            <div className="input-group register">
                <label htmlFor="password">Senha</label>
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    placeholder="Digite sua senha..."
                />
            </div>
                
            <SubmitButton type="submit">Cadastrar</SubmitButton>
        </form>
    )
}