import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100%;

  z-index: 10;

  position: absolute;
  top: 0;
  left: 0;

  background: ${({ theme }) => theme.colors.dark[400]};

  display: flex;
  flex-direction: column;

  box-shadow: 5px 0 25px 1px #00000085;

  transition: all ease-in-out 250ms;

  ${({ $isVisible }) =>
    $isVisible ? "transform: translateX(0%);" : "transform: translateX(-100%);"}
`;

export const Header = styled.header`
  width: 100%;
  height: fit-content;

  display: flex;
  gap: 12px;
  align-items: center;

  padding: 24px;

  background: ${({ theme }) => theme.colors.dark[700]};

  > h1 {
    font-family: "Roboto";
    font-weight: 400;
    color: ${({ theme }) => theme.colors.light[100]};
    font-size: 21px;
    line-height: 21px;
  }
`;

export const Main = styled.div`
  width: 100%;
  flex: 1;
  padding: 24px;

  display: flex;
  flex-direction: column;

  > a {
    width: 100%;

    margin-top: 24px;
    padding-block: 12px;

    border-top: 2px solid ${({ theme }) => theme.colors.dark[1000]};
    border-bottom: 2px solid ${({ theme }) => theme.colors.dark[1000]};
  }
  > a + a {
    border-top: none;
    margin-top: 0;
  }
`;
