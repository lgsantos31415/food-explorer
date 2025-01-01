import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  > p {
    width: 250px;
    color: white;

    ${({ theme }) => theme.font.poppins["100"].medium}
  }
`;

export const Form = styled.form`
  width: 65%;
  height: fit-content;
  padding: 64px;

  background: ${({ theme }) => theme.colors.dark[700]};
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    ${({ theme }) => theme.font.poppins[400].medium}
    color: ${({ theme }) => theme.colors.light[100]};

    margin-bottom: 32px;
  }
  > div + div {
    margin-top: 32px;
  }
  > div:nth-of-type(4) {
    margin-block: 32px;
  }
`;

export const Column = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 8px;

  > label {
    ${({ theme }) => theme.font.roboto.small.regular}
    color: ${({ theme }) => theme.colors.light[400]};
  }
`;

export const Left = styled.div`
  flex: 1;
  height: 100%;

  display: grid;
  place-items: center;
`;

export const Right = styled.div`
  flex: 1;
  height: 100%;

  display: grid;
  place-items: center;
`;
