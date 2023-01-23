import { Dispatch, FormEvent, SetStateAction } from 'react';
import { SubmitButton } from './styled';

type RegisterFormProps = {
    setName: Dispatch<SetStateAction<string>>;
    setEmail: Dispatch<SetStateAction<string>>;
    setPassword: Dispatch<SetStateAction<string>>;
    handleSignUp: (event: FormEvent) => void;
}

export function Register({ setName, setEmail, setPassword, handleSignUp }: RegisterFormProps){
    return(
        <form onSubmit={handleSignUp}>
            <div className="input-group register">
                <label htmlFor="name">Nome de usuário</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Digite seu nome..."
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="input-group register">
                <label htmlFor="email">E-mail</label>
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="Digite seu E-mail..."
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        
            <div className="input-group register">
                <label htmlFor="password">Senha</label>
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    placeholder="Digite sua senha..."
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
                
            <SubmitButton type="submit">Cadastrar</SubmitButton>
        </form>
    )
}