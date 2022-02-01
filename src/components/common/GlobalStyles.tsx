import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
    outline: none;
  }

  html, body, #root {
    height: 100%;
  }
`;

export default GlobalStyles;
