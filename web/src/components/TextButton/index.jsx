import { Container } from "./styles";

export default function TextButton({
  icon: Icon,
  fontSize,
  children,
  onClick,
  padding,
  bold,
  color,
  ...rest
}) {
  return (
    <Container
      $fontSize={fontSize}
      $padding={padding}
      $bold={bold}
      onClick={onClick}
      $color={color}
      {...rest}
    >
      {Icon && <Icon />}
      {children}
    </Container>
  );
}
