import { Container, Form } from "./styles"
//import { FiMail, FiLock } from "react-icons"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import logoSVG from '../../assets/logo.svg'


export function SignIn(){
    return(
        <Container>
            <div className="wrapper">
                <img src={logoSVG} 
                alt="Food Explorer Logo" 
                />
            </div>

            <Form>

                <h1>Faça login</h1>

                <h2>Email</h2>

                <Input
                placeholder="Exemplo: usuário@exemplo.com"
                type="text"
              //  icon={FiMail}
                />

                <h2>Senha</h2>

                <Input
                placeholder="No mínimo 6 caracteres"
                type="text"
               // icon={FiLock}
                />

                <Button 
                className="logIn"
                title="Entrar"/>

                <a href="#">Criar uma conta</a>



            </Form>
        </Container>
    )
}