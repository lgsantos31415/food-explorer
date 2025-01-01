import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  width: 100%;
  flex: 1;

  padding: 164px 124px;
`;

export const Banner = styled.div`
  width: 100%;
  height: 260px;

  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;

  padding-inline: 100px;

  ${({ theme }) =>
    `background: linear-gradient(to bottom, ${theme.colors.gradient[200]});`}

  > img {
    position: absolute;
    left: -70px;
    bottom: -13px;
    width: 50%;
  }
`;

export const Right = styled.div`
  color: ${({ theme }) => theme.colors.light[300]};
  > h1 {
    ${({ theme }) => theme.font.poppins[500].medium}
  }
  > p {
    ${({ theme }) => theme.font.roboto.small.regular}
  }
`;

export const Row = styled.div`
  padding-bottom: 14px;
  width: 100%;
  height: fit-content;
  overflow-x: auto;

  display: flex;
  gap: 32px;

  &::-webkit-scrollbar {
    height: 12px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.dark[900]};
    border-radius: 99px;
  }
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-top: 64px;

  > h1 {
    ${({ theme }) => theme.font.poppins[400].medium}
    color: ${({ theme }) => theme.colors.light[300]};
  }
`;
