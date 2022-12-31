import { FormRegister } from './styles/register';
// import { FormLogin } from './styles/login';
import { Container, LoginArea, SubmitButton } from './styles/styled';

export function ModalLogin(){
    return(
        <Container>
            <LoginArea>
                <header>
                    <button className="login">Login</button>
                    <button className="register active">Cadastrar</button>
                </header>

                <div className="formArea">
                    {/* <FormLogin action="">
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
                            <label htmlFor="remember-me">Lembrar me</label>
                        </RememberMe>

                        <SubmitButton type="button">Entrar</SubmitButton>
                    </FormLogin> */}

                    <Register />
                </div>
            </LoginArea>
        </Container>
    )
}

function Register(){
    return(
        <FormRegister action="">
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
        </FormRegister>
    )
}