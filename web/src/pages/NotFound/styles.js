import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  place-items: center;
  text-align: center;

  > h1 {
    ${({ theme }) => theme.font.roboto.giant.bold}
    color: ${({ theme }) => theme.colors.light[100]};
  }
`;
