import { Container, Form, Column, Left, Right } from "./styles";

import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TextButton from "../../components/TextButton";

export default function SignUp() {
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
            <Input id="name" placeholder="Exemplo: Maria da Silva" />
          </Column>
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
          <Button>Criar conta</Button>
          <TextButton>Já tenho uma conta</TextButton>
        </Form>
      </Right>
    </Container>
  );
}
