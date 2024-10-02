import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Container, Wrapper, Form } from "./styles"

import { api } from "../../services/api"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import logoSVG from '../../assets/logo.svg'


export function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
    if(!name || !email || !password) {
        return alert("Preencha todos os campos!")
    }

    if(password.length < 6) {
        return alert("Senha deve ter no mínimo 6 caracteres!")
    }

    api.post("/users", { name, email, password })
    .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
    })
    .catch(error => {
        if(error.response){
            alert(error.response.data.message)
        } else {
            alert("Não foi possível cadastrar usuário.")
        }
    })
}

    return(
        <Container>
            <Wrapper>
                <img src={logoSVG} 
                alt="Food Explorer Logo" 
                />
            </Wrapper>

            <Form>
                <h1>Crie sua conta</h1>
                <h2>Seu nome</h2>

                <Input 
                placeholder="Exemplo: Maria da Silva"
                type="text"
                onChange={ e => setName(e.target.value)}
                />

                <h2>Email</h2>

                <Input
                placeholder="Exemplo: usuário@exemplo.com"
                type="text"
                onChange={ e => setEmail(e.target.value)}
                />

                <h2>Senha</h2>

                <Input
                placeholder="No mínimo 6 caracteres"
                type="password"
                onChange={ e => setPassword(e.target.value)}
                />

                <Button 
                className="logIn"
                title="Criar conta"
                onClick={handleSignUp}
                />

                <Link to="/">Já tenho uma conta</Link>
            </Form>
        </Container>
    )
}