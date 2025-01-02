import styled from "styled-components";

import { FiHeart } from "react-icons/fi";

export const Container = styled.div`
  width: 100%;
  min-height: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  padding: 24px;

  ${({ theme }) => theme.font.roboto.bigger.regular}
  color: ${({ theme }) => theme.colors.light[500]};

  background: ${({ theme }) => theme.colors.dark[800]};
`;
