import styled from "styled-components";

import resolutions from "../../styles/adaptativeResolutions";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  ${({ $isVisible }) => $isVisible && "overflow-y: hidden;"}
`;

export const Main = styled.div`
  width: 100%;
  flex: 1;
  padding: 32px 128px;

  display: flex;
  gap: 64px;

  @media (max-width: ${resolutions.medium}) {
    padding: 32px;

    flex-direction: column;
  }
`;

export const MyOrder = styled.div`
  width: 100%;
  flex: 1;

  > h1 {
    ${({ theme }) => theme.font.poppins[400].medium}
    color: ${({ theme }) => theme.colors.light[300]};
  }
  > h2 {
    ${({ theme }) => theme.font.poppins[200].medium}
    color: ${({ theme }) => theme.colors.light[300]};
  }
`;

export const Payament = styled.div`
  width: 100%;
  flex: 1;

  > h1 {
    ${({ theme }) => theme.font.poppins[400].medium}
    color: ${({ theme }) => theme.colors.light[300]};
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-block: 32px;
`;

export const Row = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.dark[500]};

  > img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
  }

  @media (max-width: ${resolutions.medium}) {
    padding: 10px;
    gap: 10px;

    > img {
      width: 68px;
      height: 68px;
    }
  }
`;

export const Row2 = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  > h1 {
    ${({ theme }) => theme.font.poppins[200].medium}
    color: ${({ theme }) => theme.colors.light[300]};
  }
  > span {
    flex-shrink: 0;
    ${({ theme }) => theme.font.roboto.smallest.regular}
    color: ${({ theme }) => theme.colors.light[400]};
  }
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${resolutions.medium}) {
    gap: 0;
  }
`;

export const Box = styled.div`
  margin-top: 32px;
  margin-inline: auto;

  max-width: 385px;
  height: 330px;

  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme.colors.light[600]};

  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  width: 100%;
  height: 50px;
  flex-shrink: 0;

  border-bottom: 2px solid ${({ theme }) => theme.colors.light[600]};

  display: flex;

  > div:nth-of-type(1) {
    border-right: 1px solid ${({ theme }) => theme.colors.light[600]};
  }
  > div:nth-of-type(2) {
    border-left: 1px solid ${({ theme }) => theme.colors.light[600]};
  }
  > div:nth-of-type(${({ $option }) => $option}) {
    background: ${({ theme }) => theme.colors.dark[800]};
  }
`;

export const Option = styled.div`
  flex: 1;
  height: 100%;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  transition: all ease-in-out 350ms;

  ${({ theme }) => theme.font.roboto.small.regular}
  color: ${({ theme }) => theme.colors.light[100]};

  &:hover {
    background: ${({ theme }) => theme.colors.dark[800]};
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Column3 = styled.div`
  width: 100%;
  height: 100%;

  padding: 32px;

  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Row3 = styled.div`
  display: flex;
  gap: 16px;
`;

export const Column4 = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 6px;

  > label {
    ${({ theme }) => theme.font.roboto.small.regular};
    color: ${({ theme }) => theme.colors.light[400]};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;

  padding: 16px;

  border: 2px solid ${({ theme }) => theme.colors.light[100]};
  border-radius: 6px;

  ${({ theme }) => theme.font.roboto.small.regular};
  color: ${({ theme }) => theme.colors.light[100]};

  background: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.light[500]};
  }
`;

export const Column5 = styled.div`
  margin-inline: auto;
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: ${resolutions.medium}) {
    width: 100%;
  }
`;

export const Row4 = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  > div:nth-of-type(2) {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: ${resolutions.medium}) {
    > div:nth-of-type(2) {
      position: relative;

      top: 0;
      left: 0;
      transform: translate(0%, 0%);
    }
  }
`;

export const RedCircle = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.tomato[100]};
`;

export const GrayCircle = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.light[700]};
`;

export const Column6 = styled.div`
  width: 100%;
  height: 100%;

  padding: 32px;

  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 150px;
  }
`;

export const Row5 = styled.div`
  width: 100%;
  height: 48px;

  padding: 16px;

  border: 2px solid ${({ theme }) => theme.colors.light[100]};
  border-radius: 6px;

  ${({ theme }) => theme.font.roboto.small.regular};
  color: ${({ theme }) => theme.colors.light[100]};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Row6 = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  gap: 32px;
  align-items: center;
`;
