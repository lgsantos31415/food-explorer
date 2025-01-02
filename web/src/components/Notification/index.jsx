import { Container } from "./styles";

import { useNotification } from "../../hooks/notification";

export default function Notification() {
  const { success, message, visible } = useNotification();

  return (
    <Container $success={success} $visible={visible}>
      <p>{message}</p>
    </Container>
  );
}
