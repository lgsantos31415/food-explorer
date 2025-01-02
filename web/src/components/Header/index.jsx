import { Container } from "./styles";

import Logo from "../Logo";
import Input from "../Input";
import Button from "../Button";
import TextButton from "../TextButton";

import { FiSearch, FiLogOut } from "react-icons/fi";
import { PiReceipt } from "react-icons/pi";

export default function Header() {
  return (
    <Container>
      <TextButton to="/home">
        <Logo fontSize={24} />
      </TextButton>
      <Input
        icon={FiSearch}
        placeholder="Busque por pratos ou ingredientes"
        paddingInline="128px"
      />
      <Button fitContent paddingInline icon={PiReceipt}>
        Pedidos (0)
      </Button>

      <TextButton fontSize="20px">
        <FiLogOut />
      </TextButton>
    </Container>
  );
}
