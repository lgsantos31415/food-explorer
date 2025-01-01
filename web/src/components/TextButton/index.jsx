import { Container } from "./styles";

export default function TextButton({
  icon: Icon,
  fontSize,
  children,
  onClick,
  bold,
  ...rest
}) {
  return (
    <Container $fontSize={fontSize} $bold={bold} onClick={onClick} {...rest}>
      {Icon && <Icon />}
      {children}
    </Container>
  );
}
