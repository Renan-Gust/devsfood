import { MouseEvent, useState } from 'react';

import { Container, LoginArea, RememberMe, SubmitButton } from './styled';

type FormActiveType = {
    type: 'login' | 'register';
}

export function Login(){
    const [formActive, setFormActive] = useState<FormActiveType['type']>('login')
    const buttonActiveClassName = "active"

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

    return(
        <Container>
            <LoginArea>
                <header>
                    <button className="login active" onClick={(e) => handleChangeForm('login', e)}>Login</button>
                    <button className="register" onClick={(e) => handleChangeForm('register', e)}>Cadastrar</button>
                </header>

                <div className="formArea">
                    {formActive === 'login' ?
                        <form action="">
                            <div className="input-group login">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" id="email" placeholder="Digite seu E-mail..." />
                            </div>

                            <div className="input-group login">
                                <label htmlFor="password">Senha</label>
                                <input type="password" id="password" placeholder="Digite sua senha..." />
                            </div>

                            <RememberMe>
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me" className="remember-me">Lembrar me</label>
                            </RememberMe>

                            <SubmitButton type="button">Entrar</SubmitButton>
                        </form>
                        :
                        <Register />
                    }
                </div>
            </LoginArea>
        </Container>
    )
}

function Register(){
    return(
        <form action="">
            <div className="input-group register">
                <label htmlFor="name">Nome de usuário</label>
                <input type="text" id="name" placeholder="Digite seu nome..." />
            </div>

            <div className="input-group register">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Digite seu E-mail..." />
            </div>
        
            <div className="input-group register">
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Digite sua senha..." />
            </div>
                
            <SubmitButton type="button">Cadastrar</SubmitButton>
        </form>
    )
}