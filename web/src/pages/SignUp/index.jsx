import { Container, Form, Column, Left, Right } from "./styles";

import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TextButton from "../../components/TextButton";

import { useState } from "react";
import { useNotification } from "../../hooks/notification";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { showNotification } = useNotification();

  function handleNewUser(e) {
    e.preventDefault();
    showNotification("Usuário criado com sucesso!", true);
  }

  return (
    <Container>
      <Left>
        <Logo />
      </Left>
      <Right>
        <Form>
          <h1>Crie sua conta</h1>
          <Column>
            <label htmlFor="name">Seu nome</label>
            <Input
              id="name"
              placeholder="Exemplo: Maria da Silva"
              onChange={(e) => setName(e.target.value)}
            />
          </Column>
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
          <Button onClick={(e) => handleNewUser(e)}>Criar conta</Button>
          <TextButton to="/" padding="0 6px">
            Já tenho uma conta
          </TextButton>
        </Form>
      </Right>
    </Container>
  );
}
