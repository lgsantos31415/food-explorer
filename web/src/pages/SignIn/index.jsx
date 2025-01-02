import { Container, Form, Column, Left, Right } from "./styles";

import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TextButton from "../../components/TextButton";

export default function SignIn() {
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
            />
          </Column>
          <Column>
            <label htmlFor="password">Senha</label>
            <Input
              id="password"
              type="password"
              placeholder="No mínimo 6 caracteres"
            />
          </Column>
          <Button>Entrar</Button>
          <TextButton to="/signin" padding="0 6px">
            Criar uma conta
          </TextButton>
        </Form>
      </Right>
    </Container>
  );
}
