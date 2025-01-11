import { Container, Row, Column, AdminRow, CustomerRow } from "./styles";

import Logo from "../Logo";
import TextButton from "../TextButton";
import TextButtonWithLink from "../TextButtonWithLink";
import Button from "../Button";

import { FiLogOut, FiMenu } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

import { useAuth } from "../../hooks/auth";
import { useOrders } from "../../hooks/orders";
import { useMenu } from "../../hooks/menu";

import { useNavigate } from "react-router-dom";

export default function Header2() {
  const { signOut, user } = useAuth();
  const { quantity } = useOrders();
  const { toggleVisibility } = useMenu();

  const navigate = useNavigate();

  return (
    <Container $isAdmin={user.role === "admin" ? true : false}>
      <TextButton fontSize="20px" onClick={toggleVisibility}>
        <FiMenu />
      </TextButton>
      <TextButtonWithLink to="/">
        <Column>
          <Logo fontSize={1.5} />
          {user.role === "admin" && <span>admin</span>}
        </Column>
      </TextButtonWithLink>
      <Row $isAdmin={user.role === "admin" ? true : false}>
        {user.role === "customer" && (
          <CustomerRow>
            <TextButtonWithLink to="/favorites">
              Meus favoritos
            </TextButtonWithLink>
            <TextButtonWithLink to="/history">
              Histórico de pedidos
            </TextButtonWithLink>
            <Button
              fitContent
              paddingInline="32px"
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

        {user.role === "admin" && (
          <AdminRow>
            <TextButtonWithLink to="/orders">Pedidos</TextButtonWithLink>
            <Button
              fitContent
              paddingInline
              onClick={() => navigate("/create")}
            >
              Novo prato
            </Button>
          </AdminRow>
        )}

        <TextButtonWithLink fontSize="20px" to="/" onClick={signOut}>
          <FiLogOut />
        </TextButtonWithLink>
      </Row>
    </Container>
  );
}
