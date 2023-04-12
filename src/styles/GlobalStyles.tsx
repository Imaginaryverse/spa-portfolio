import { createGlobalStyle } from 'styled-components';

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
    
    font-size: 16px;
    font-family: sans-serif;
    line-height: 1.5;
    letter-spacing: 0.125rem;
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

    a {
      color: ${({ theme }) => theme.colors.body.text};
      font-weight: bold;
      text-decoration: 2px underline;
      text-underline-offset: 0.125rem;
      transition: all ${({ theme }) =>
        theme.transitionDuration.medium} ease-in-out;
        
      &:hover {
        color: ${({ theme }) => theme.colors.primary.main};
      }
  
      &:visited {
        color: ${({ theme }) => theme.colors.body.text};

        &:hover {
          color: ${({ theme }) => theme.colors.primary.main};
        }
      }
    }
  }
`;
