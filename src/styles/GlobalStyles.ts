import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 14px;
    }

    body, input, textarea, button {
        font: 400 1rem ${({theme}) => theme.font.text};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${({theme}) => theme.font.title};
        color: ${({theme}) => theme.pallet.title};
    }

    body {
        background-color: ${({theme}) => theme.pallet.white};
        color: ${({ theme }) => theme.pallet.text};
    }

    button {
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyle;