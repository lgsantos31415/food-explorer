import { Container, Header, Main } from "./styles.js";

import Input from "../Input/";
import TextButton from "../TextButton/";

import { FiSearch, FiX } from "react-icons/fi";

import { useMenu } from "../../hooks/menu.jsx";
import { useAuth } from "../../hooks/auth.jsx";
import { useSearch } from "../../hooks/search.jsx";

export default function Menu() {
  const { isVisible, toggleVisibility, variation } = useMenu();
  const { signOut, user } = useAuth();
  const { handleSearch } = useSearch();

  return (
    <Container $isVisible={isVisible}>
      <Header>
        <TextButton fontSize="20px" onClick={toggleVisibility}>
          <FiX />
        </TextButton>
        <h1>Menu</h1>
      </Header>
      <Main>
        {variation === 1 &&
          (user?.role === "admin" ? (
            <TextButton fontSize="20px" to="/create" onClick={toggleVisibility}>
              Novo prato
            </TextButton>
          ) : (
            <Input
              icon={FiSearch}
              placeholder="Busque por pratos ou ingredientes"
              onChange={(e) => handleSearch(e.target.value)}
            />
          ))}
        {variation == 2 && (
          <TextButton
            fontSize="20px"
            to="/favorites"
            onClick={toggleVisibility}
          >
            Meus favoritos
          </TextButton>
        )}
        {variation == 2 && (
          <TextButton fontSize="20px">Histórico de pedidos</TextButton>
        )}
        <TextButton
          fontSize="20px"
          to="/"
          onClick={() => {
            toggleVisibility();
            signOut();
          }}
        >
          Sair
        </TextButton>
      </Main>
    </Container>
  );
}
