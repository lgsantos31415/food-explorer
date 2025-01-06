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
  padding: 32px 128px;

  display: flex;
  gap: 64px;
`;

export const MyOrder = styled.div`
  flex: 1;
  height: 100%;

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
  flex: 1;
  height: 100%;

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
`;

export const Row2 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  > h1 {
    ${({ theme }) => theme.font.poppins[200].medium}
    color: ${({ theme }) => theme.colors.light[300]};
  }
  > span {
    ${({ theme }) => theme.font.roboto.smallest.regular}
    color: ${({ theme }) => theme.colors.light[400]};
  }
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  margin-top: 32px;

  width: 450px;
  height: 350px;

  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme.colors.light[600]};

  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  width: 100%;
  height: 60px;

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
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    height: 75%;
  }
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
