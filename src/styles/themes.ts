import { DefaultTheme } from 'styled-components';

const sharedProperties: Pick<
  DefaultTheme,
  'spacing' | 'borderRadius' | 'transitionDuration' | 'dimensions' | 'fontSize'
> = {
  spacing: {
    XXS: '0.125rem',
    XS: '0.25rem',
    S: '0.5rem',
    M: '1rem',
    L: '2rem',
    XL: '4rem',
    XXL: '8rem',
  },
  borderRadius: {
    S: '4px',
    M: '8px',
    L: '16px',
  },
  transitionDuration: {
    slow: '300ms',
    medium: '200ms',
    fast: '100ms',
  },
  dimensions: {
    inputHeight: '2.5rem',
    buttonHeight: '2.5rem',
  },
  fontSize: {
    H1: '2rem',
    H2: '1.75rem',
    H3: '1.5rem',
    H4: '1.25rem',
    H5: '1rem',
    H6: '0.875rem',
    P: '1rem',
    SMALL: '0.875rem',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    body: {
      background: '#101112',
      border: '#D3D4D650',
      text: '#D3D4D6',
    },
    primary: {
      main: '#5FA4DD',
      surface: '#5FA4DD20',
      text: '#101112',
    },
    secondary: {
      main: '#E679BC',
      surface: '#E679BC20',
      text: '#101112',
    },
  },
  ...sharedProperties,
};

export const lightTheme: DefaultTheme = {
  colors: {
    body: {
      background: '#FCFCFC',
      border: '#2F303250',
      text: '#2F3032',
    },
    primary: {
      main: '#42749E',
      surface: '#42749E20',
      text: '#FCFCFC',
    },
    secondary: {
      main: '#B8418F',
      surface: '#B8418F20',
      text: '#FCFCFC',
    },
  },
  ...sharedProperties,
};
