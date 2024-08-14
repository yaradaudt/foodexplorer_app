import { Container, Form } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import logoSVG from '../../assets/logo.svg'


export function SignUp(){
    return(
        <Container>
            <div className="wrapper">
                <img src={logoSVG} 
                alt="Food Explorer Logo" 
                />
            </div>

            <Form>

                <h1>Crie sua conta</h1>

                <h2>Seu nome</h2>

                <Input 
                placeholder="Exemplo: Maria da Silva"
                type="text"
                />

                <h2>Email</h2>

                <Input
                placeholder="Exemplo: usuário@exemplo.com"
                type="text"
                />

                <h2>Senha</h2>

                <Input
                placeholder="No mínimo 6 caracteres"
                type="text"
                />

                <Button 
                className="logIn"
                title="Criar conta"/>

                <a href="#">Já tenho uma conta</a>
            </Form>
        </Container>
    )
}