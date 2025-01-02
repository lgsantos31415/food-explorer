import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  gap: 3px;
  align-items: center;

  padding: 10px 16px;
  border: ${({ theme, $isNew }) =>
    $isNew
      ? `2px dashed ${theme.colors.light[500]}`
      : `2px solid ${theme.colors.light[600]}`};
  border-radius: 8px;

  background: ${({ theme, $isNew }) =>
    $isNew ? "none" : theme.colors.light[600]};

  > input {
    width: 100%;
    height: 100%;

    background: none;
    border: none;

    outline: none;

    color: ${({ theme }) => theme.colors.light[100]};
    ${({ theme }) => theme.font.roboto.small.regular}
  }
  > input::placeholder {
    color: ${({ theme }) => theme.colors.light[500]};
  }
  > a {
    color: ${({ theme, $isNew }) =>
      $isNew ? theme.colors.light[500] : theme.colors.light[100]};
    font-size: 20px;
  }
`;
