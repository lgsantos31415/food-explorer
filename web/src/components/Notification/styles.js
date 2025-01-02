import styled from "styled-components";

export const Container = styled.div`
  position: absolute;

  width: fit-content;
  height: fit-content;
  padding: 32px;

  background: ${({ $success }) => ($success ? "green" : "red")};
  border-radius: 12px;

  top: ${({ $visible }) => ($visible ? "24px" : "-100%")};
  left: 50%;
  transform: translateX(-50%);

  transition: all ease-in-out 500ms;

  > p {
    ${({ theme }) => theme.font.roboto.small.regular}
    color: white;
  }
`;
