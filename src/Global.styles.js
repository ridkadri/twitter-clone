import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    --twitter-color: #1DA1F2;
    --twitter-background: #15202B;

    @media screen and (max-width: 800px) {
        padding: 10px;

    }
}

.app {
    display: flex;
    height: 100vh;
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 10px;
}
`;