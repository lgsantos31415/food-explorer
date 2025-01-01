import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 172px;

  background: ${({ theme }) => theme.colors.dark[900]};
  border: none;
  border-radius: 8px;

  padding: 16px;

  ${({ theme }) => theme.font.roboto.small.regular}
  color: ${({ theme }) => theme.colors.light[100]};

  outline: none;

  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.light[500]};
  }
`;
