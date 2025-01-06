import { Container } from "./styles";

export default function Button({
  icon: Icon,
  children,
  fitContent,
  paddingInline,
  onClick,
  animation,
  ...rest
}) {
  return (
    <Container
      {...rest}
      $fitContent={fitContent}
      $paddingInline={paddingInline}
      $animation={animation}
      onClick={onClick}
    >
      {Icon && <Icon />}
      <span>{children}</span>
    </Container>
  );
}
