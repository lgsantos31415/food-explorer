import { Container } from "./styles";

export default function Button({
  icon: Icon,
  children,
  fitContent,
  paddingInline,
  onClick,
  ...rest
}) {
  return (
    <Container
      {...rest}
      $fitContent={fitContent}
      $paddingInline={paddingInline}
      onClick={onClick}
    >
      {Icon && <Icon />}
      <span>{children}</span>
    </Container>
  );
}
