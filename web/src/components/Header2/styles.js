import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: fit-content;

  padding: 22px 124px;

  background: ${({ theme }) => theme.colors.dark[600]};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
