import { Link } from "react-router-dom"

import { Container, Wrapper, Form } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import logoSVG from '../../assets/logo.svg'


export function SignIn(){
    return(
        <Container>
            <Wrapper>
                <img src={logoSVG} 
                alt="Food Explorer Logo" 
                />
            </Wrapper>

            <Form>

                <h1>Faça login</h1>

                <h2>Email</h2>

                <Input
                placeholder="Exemplo: usuário@exemplo.com"
                type="text"
                />

                <h2>Senha</h2>

                <Input
                placeholder="No mínimo 6 caracteres"
                type="password"
                />

                <Button 
                className="logIn"
                title="Entrar"/>

                <Link to="/register">Criar uma conta</Link>

            </Form>
        </Container>
    )
}