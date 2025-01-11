import { Container, Column, AdminRow, CustomerRow } from "./styles";

import Logo from "../Logo";
import Input from "../Input";
import Button from "../Button";
import TextButton from "../TextButton";
import TextButtonWithLink from "../TextButtonWithLink";

import { FiSearch, FiLogOut, FiMenu } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

import { useAuth } from "../../hooks/auth";
import { useOrders } from "../../hooks/orders";
import { useMenu } from "../../hooks/menu";
import { useSearch } from "../../hooks/search";

import { useNavigate } from "react-router-dom";

export default function Header() {
  const { signOut, user } = useAuth();
  const { quantity, animation } = useOrders();
  const { toggleVisibility } = useMenu();
  const { handleSearch } = useSearch();

  const navigate = useNavigate();

  return (
    <Container>
      <TextButton fontSize="20px" onClick={toggleVisibility}>
        <FiMenu />
      </TextButton>
      <Column>
        <TextButtonWithLink to="/">
          <Column>
            <Logo fontSize={1.5} />
            {user.role === "admin" && <span>admin</span>}
          </Column>
        </TextButtonWithLink>
      </Column>
      <Input
        icon={FiSearch}
        placeholder="Busque por pratos ou ingredientes"
        paddingInline="128px"
        onChange={(e) => handleSearch(e.target.value)}
      />
      {user.role === "admin" && (
        <AdminRow $isAdmin={user.role === "admin" ? true : false}>
          <TextButtonWithLink to="/orders">Pedidos</TextButtonWithLink>
          <Button fitContent paddingInline onClick={() => navigate("/create")}>
            Novo prato
          </Button>
        </AdminRow>
      )}
      {user.role === "customer" && (
        <CustomerRow>
          <Button
            fitContent
            paddingInline
            animation={animation}
            icon={PiReceipt}
            onClick={() => navigate("/order")}
          >
            Pedidos ({quantity})
          </Button>
          <TextButtonWithLink to="/order" fontSize="20px">
            <PiReceipt />
            <span>{quantity}</span>
          </TextButtonWithLink>
        </CustomerRow>
      )}

      <TextButtonWithLink fontSize="20px" to="/" onClick={signOut}>
        <FiLogOut />
      </TextButtonWithLink>
    </Container>
  );
}
