import styled from "styled-components";

export const Container = styled.button`
  width: ${({ $fitContent }) => ($fitContent ? "fit-content" : "100%")};
  height: 46px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  flex-shrink: 0;

  padding-inline: ${({ $paddingInline }) => ($paddingInline ? "24px" : "")};

  background: ${({ theme }) => theme.colors.tomato[100]};
  border-radius: 8px;

  transition: opacity ease-in-out 350ms;
  cursor: pointer;

  ${({ theme }) => theme.font.poppins[100].medium}
  color: ${({ theme }) => theme.colors.light[100]};

  user-select: none;
  border: none;

  > svg {
    font-size: 32px;
    display: grid;
    place-items: center;
  }
  &:focus {
    outline: 2px solid white;
  }
  &:hover {
    opacity: 0.8;
  }
  &:active {
    background: ${({ theme }) => theme.colors.tomato[400]};
  }
`;
