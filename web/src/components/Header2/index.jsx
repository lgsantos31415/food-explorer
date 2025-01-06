import { Container, Row } from "./styles";

import Logo from "../Logo";
import TextButton from "../TextButton";
import Button from "../Button";

import { FiLogOut } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

import { useAuth } from "../../hooks/auth";
import { usePreferences } from "../../hooks/preferences";

import { useNavigate } from "react-router-dom";

export default function Header2() {
  const { signOut } = useAuth();
  const { quantity } = usePreferences();

  const navigate = useNavigate();

  return (
    <Container>
      <TextButton to="/" padding="2px 8px">
        <Logo fontSize={24} />
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
        <TextButton fontSize="20px" onClick={signOut}>
          <FiLogOut />
        </TextButton>
      </Row>
    </Container>
  );
}
