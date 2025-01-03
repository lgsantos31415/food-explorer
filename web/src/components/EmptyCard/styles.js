import styled from "styled-components";

import { FiHeart } from "react-icons/fi";

export const Container = styled.div`
  width: 100%;
  min-height: 225px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  ${({ theme }) => theme.font.roboto.bigger.regular}
  color: ${({ theme }) => theme.colors.light[600]};

  background: linear-gradient(
    315deg,
    ${({ theme }) => theme.colors.gradient[200]}
  );

  transition: all ease-in-out 350ms;

  &:hover {
    opacity: 0.8;
  }
`;
