import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        width: 100%;
        height: 100vh;
        background: ${({ theme }) => theme.colors.dark[400]};

        &::-webkit-scrollbar {
            width: 12px;
        }
        &::-webkit-scrollbar-track {
            background: none;
        }
        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.colors.dark[900]};
            border-radius: 99px;
        }
    }
`;

export default GlobalStyle;
