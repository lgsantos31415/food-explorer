import { Container } from "./styles";

export default function TextButton({
  icon: Icon,
  fontSize,
  children,
  onClick,
  padding,
  bold,
  ...rest
}) {
  return (
    <Container
      $fontSize={fontSize}
      $padding={padding}
      $bold={bold}
      onClick={onClick}
      {...rest}
    >
      {Icon && <Icon />}
      {children}
    </Container>
  );
}
