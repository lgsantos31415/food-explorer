import { Container, Header, Main, Column } from "./styles.js";

import Input from "../Input/";
import TextButton from "../TextButton/";

import { FiSearch, FiX } from "react-icons/fi";

import { useMenu } from "../../hooks/menu.jsx";
import { useAuth } from "../../hooks/auth.jsx";

export default function Menu() {
  const { isVisible, toggleVisibility, variation } = useMenu();
  const { signOut } = useAuth();

  return (
    <Container $isVisible={isVisible}>
      <Header>
        <TextButton fontSize="20px" onClick={toggleVisibility}>
          <FiX />
        </TextButton>
        <h1>Menu</h1>
      </Header>
      <Main>
        {variation == 2 ? (
          <Column>
            <TextButton fontSize="20px" to="/favorites">
              Meus favoritos
            </TextButton>
            <TextButton fontSize="20px">Histórico de pedidos</TextButton>
          </Column>
        ) : (
          <Input
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
          />
        )}
        <TextButton fontSize="20px" onClick={signOut}>
          Sair
        </TextButton>
        <hr />
      </Main>
    </Container>
  );
}
