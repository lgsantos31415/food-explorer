import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: fit-content;

  padding: 22px 124px;

  background: ${({ theme }) => theme.colors.dark[600]};

  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Column = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: end;

  > span {
    ${({ theme }) => theme.font.roboto.smallest.regular}
    color: ${({ theme }) => theme.colors.cake[200]};
  }
`;
