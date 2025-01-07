import { createGlobalStyle } from "styled-components";

import resolutions from "../styles/adaptativeResolutions";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 16px;

        @media (max-width: ${resolutions.medium}) {
            font-size: 12px;
        }
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

        @media (max-width: ${resolutions.medium}) {
            &::-webkit-scrollbar {
               width: 0;
               height: 0;
            }
        }
    }
`;

export default GlobalStyle;
