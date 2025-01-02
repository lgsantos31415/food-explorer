import { Container, Form, Column, Left, Right } from "./styles";

import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TextButton from "../../components/TextButton";

import { useAuth } from "../../hooks/auth";
import { useNotification } from "../../hooks/notification";

import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  const { showNotification } = useNotification();

  async function handleSignIn(e) {
    e.preventDefault();

    if (!email || !password) {
      return showNotification("Informe os dados necessários");
    }

    await signIn({ email, password });
  }

  return (
    <Container>
      <Left>
        <Logo />
      </Left>
      <Right>
        <Form>
          <h1>Faça login</h1>
          <Column>
            <label htmlFor="email">E-mail</label>
            <Input
              id="email"
              type="email"
              placeholder="Exemplo: exemplo@exemplo.com.br"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Column>
          <Column>
            <label htmlFor="password">Senha</label>
            <Input
              id="password"
              type="password"
              placeholder="No mínimo 6 caracteres"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Column>
          <Button onClick={(e) => handleSignIn(e)}>Entrar</Button>
          <TextButton to="/signup" padding="0 6px">
            Criar uma conta
          </TextButton>
        </Form>
      </Right>
    </Container>
  );
}
