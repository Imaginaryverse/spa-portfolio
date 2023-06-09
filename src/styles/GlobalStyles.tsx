import { createGlobalStyle } from 'styled-components';
import { scrollbarStyle } from './css';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

  }

  html,
  body {
    color: ${({ theme }) => theme.colors.body.text};
    background-color: ${({ theme }) => theme.colors.body.background};
    
    font-size: 18px;
    font-family: sans-serif;
    line-height: 1.5;
    letter-spacing: calc(0.125rem / 2);
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    scroll-behavior: smooth;

    transition: color ${({ theme }) =>
      theme.transitionDuration.medium} ease-in-out,
      background-color ${({ theme }) =>
        theme.transitionDuration.medium} ease-in-out;

  ${scrollbarStyle}

    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
  }
`;
