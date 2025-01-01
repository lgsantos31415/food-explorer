import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi";

import TextButton from "../TextButton";

export default function Ingredient({
  value,
  onChange,
  onClick,
  isNew,
  ...rest
}) {
  return (
    <Container $isNew={isNew}>
      <input
        type="text"
        placeholder="Adicionar"
        readOnly={isNew ? false : true}
        value={value}
        onChange={onChange}
        {...rest}
      />
      <TextButton onClick={onClick}>{isNew ? <FiPlus /> : <FiX />}</TextButton>
    </Container>
  );
}
