import { Container, Row } from "./styles";

import Logo from "../Logo";
import TextButton from "../TextButton";
import Button from "../Button";

import { FiLogOut, FiMenu } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

import { useAuth } from "../../hooks/auth";
import { usePreferences } from "../../hooks/preferences";
import { useMenu } from "../../hooks/menu";

import { useNavigate } from "react-router-dom";

export default function Header2() {
  const { signOut } = useAuth();
  const { quantity } = usePreferences();
  const { toggleVisibility } = useMenu();

  const navigate = useNavigate();

  return (
    <Container>
      <TextButton fontSize="20px" onClick={toggleVisibility}>
        <FiMenu />
      </TextButton>
      <TextButton to="/">
        <Logo fontSize={1.5} />
      </TextButton>
      <Row>
        <TextButton to="/favorites">Meus favoritos</TextButton>
        <TextButton>Histórico de pedidos</TextButton>
        <Button
          fitContent
          paddingInline="32px"
          icon={PiReceipt}
          onClick={() => navigate("/order")}
        >
          Pedidos ({quantity})
        </Button>
        <TextButton to="/order" fontSize="20px">
          <PiReceipt />
          <span>{quantity}</span>
        </TextButton>
        <TextButton fontSize="20px" onClick={signOut}>
          <FiLogOut />
        </TextButton>
      </Row>
    </Container>
  );
}
