import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Barlow Semi Condensed', sans-serif;
        background-image: radial-gradient(ellipse at center, ${({ theme }) =>
          theme.bg.body[0]}, ${({ theme }) => theme.bg.body[1]});
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        color: ${({ theme }) => theme.colors.neutral.lightText};
        width: 100vw;
        height: 100vh;
        
    }
`;

export default GlobalStyles;
