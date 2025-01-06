import { Container, Column } from "./styles";

import Logo from "../Logo";
import Input from "../Input";
import Button from "../Button";
import TextButton from "../TextButton";

import { FiSearch, FiLogOut } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

import { useAuth } from "../../hooks/auth";
import { usePreferences } from "../../hooks/preferences";

import { useNavigate } from "react-router-dom";

export default function Header() {
  const { signOut, user } = useAuth();
  const { quantity, animation } = usePreferences();

  const navigate = useNavigate();

  return (
    <Container>
      <Column>
        <TextButton to="/" padding="2px 8px">
          <Column>
            <Logo fontSize={24} />
            {user.role === "admin" && <span>admin</span>}
          </Column>
        </TextButton>
      </Column>
      <Input
        icon={FiSearch}
        placeholder="Busque por pratos ou ingredientes"
        paddingInline="128px"
      />
      {user.role === "admin" ? (
        <Button fitContent paddingInline onClick={() => navigate("/create")}>
          Novo prato
        </Button>
      ) : (
        <Button
          fitContent
          paddingInline="32px"
          animation={animation}
          icon={PiReceipt}
          onClick={() => navigate("/order")}
        >
          Pedidos ({quantity})
        </Button>
      )}

      <TextButton fontSize="20px" onClick={signOut}>
        <FiLogOut />
      </TextButton>
    </Container>
  );
}
