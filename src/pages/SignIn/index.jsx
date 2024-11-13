import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Container, Wrapper, Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import logoSVG from "../../assets/logo.svg";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Wrapper>
        <img src={logoSVG} alt="Food Explorer Logo" />
      </Wrapper>

      <Form>
        <h1>Faça login</h1>

        <h2>Email</h2>

        <Input
          placeholder="Exemplo: usuário@exemplo.com"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />

        <h2>Senha</h2>

        <Input
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button className="logIn" title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  );
}
