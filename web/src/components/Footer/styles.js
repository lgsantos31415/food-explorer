import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: fit-content;

  padding: 14px 124px;

  background: ${({ theme }) => theme.colors.dark[600]};

  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    ${({ theme }) => theme.font.roboto.smaller.regular}
    color: ${({ theme }) => theme.colors.light[200]};
  }
`;
