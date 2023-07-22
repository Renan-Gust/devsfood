import { FormEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { Toast } from '../../components/Toast';
import { useAuth } from '../../contexts/AuthContext';
import { FormActiveType } from '../../types/user';
import { handleChangeForm } from '../../utils/auth';
import { Loading } from '../../components/Loading';

import { Container, LoginArea, SubmitButton } from './styled';

export function Login(){
    const [formActive, setFormActive] = useState<FormActiveType['type']>('login')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [toastText, setToastText] = useState('')
    const [loading, setLoading] = useState(false)

    const { signIn, signUp, isAuthenticated, pathname } = useAuth()

    async function handleSignIn(event: FormEvent){
        event.preventDefault()

        if(!email || !password){
            setToastText("Email e senha precisam ser preenchidos")
            return
        }

        setLoading(true)
        const response = await signIn({ email, password })
        setLoading(false)

        if(response.status === 'failed'){
            setToastText(response.message ?? 'Ocorreu algum erro!')
            return
        }
    }

    async function handleSignUp(event: FormEvent){
        event.preventDefault()

        if(!email || !password || !name){
            setToastText("Nome, Email e senha precisam ser preenchidos")
            return
        }

        setLoading(true)
        const response = await signUp({ name, email, password })
        setLoading(false)

        if(response.status === 'failed'){
            setToastText(response.message ?? 'Ocorreu algum erro!')
            return
        }
    }

    if(isAuthenticated){
        return <Navigate to={pathname ? pathname : "/"} />
    }

    return(
        <Container>
            <LoginArea>
                <header>
                    <button 
                        className="login active"
                        onClick={(e) => handleChangeForm({ type: 'login', e, setFormActive })}
                        >
                        Login
                    </button>

                    <button 
                        className="register"
                        onClick={(e) => handleChangeForm({ type: 'register', e, setFormActive })}
                        >
                        Cadastrar
                    </button>
                </header>

                <div className="formArea">
                    <form onSubmit={ formActive === 'login' ? handleSignIn : handleSignUp}>
                        {formActive === 'register' &&
                            <div className="input-group">
                                <label htmlFor="name">Nome de usuário</label>
                                <input
                                    type="text" 
                                    id="name" 
                                    name="name"
                                    placeholder="Digite seu nome..."
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        }
                        <div className="input-group">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                placeholder="Digite seu E-mail..."
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Senha</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password"
                                placeholder="Digite sua senha..."
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <SubmitButton type="submit" disabled={loading}>
                            {formActive === 'login' && !loading && 'Entrar'}
                            {formActive === 'register' && !loading && 'Cadastrar'}
                            {loading && <Loading /> }
                        </SubmitButton>
                    </form>
                </div>
            </LoginArea>

            {toastText && <Toast text={toastText} setToastText={setToastText} />}
        </Container>
    )
}