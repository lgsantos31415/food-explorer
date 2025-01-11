import styled from "styled-components";

import resolutions from "../../styles/adaptativeResolutions";

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

  > h1 {
    ${({ theme }) => theme.font.poppins[400].medium};
    color: ${({ theme }) => theme.colors.light[300]};
    margin-bottom: 32px;
  }

  @media (max-width: ${resolutions.medium}) {
    padding: 32px;
  }
`;

export const Table = styled.table`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.colors.dark[1000]};
  border-radius: 8px;
  overflow: hidden;
`;

export const Thead = styled.thead`
  width: 100%;
  height: fit-content;
  border-spacing: 0;
`;

export const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
`;

export const Tr = styled.tr`
  width: 100%;
  height: fit-content;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 5fr 1fr;
`;

export const Th = styled.th`
  width: 100%;
  height: 100%;
  padding: 20px;

  ${({ theme }) => theme.font.roboto.smaller.bold}
  color: ${({ theme }) => theme.colors.light[100]};

  border: 1px solid ${({ theme }) => theme.colors.dark[1000]};
`;

export const Td = styled.td`
  width: 100%;
  height: 100%;
  padding: 20px;

  ${({ theme }) => theme.font.roboto.smaller.regular}
  color: ${({ theme }) => theme.colors.light[400]};
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: center;

  border: 1px solid ${({ theme }) => theme.colors.dark[1000]};
`;

export const RedCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: red;
`;

export const OrangeCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: orange;
`;

export const GreenCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: green;
`;

export const Mobile = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px;

  border: 1px solid ${({ theme }) => theme.colors.dark[1000]};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  > p {
    ${({ theme }) => theme.font.roboto.smaller.regular};
    color: ${({ theme }) => theme.colors.light[400]};
  }
`;

export const Row2 = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);

  > span {
    display: flex;
    gap: 10px;
    align-items: center;

    ${({ theme }) => theme.font.roboto.smaller.regular};
    color: ${({ theme }) => theme.colors.light[400]};
    text-align: center;
  }
`;
