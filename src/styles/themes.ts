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
      background: '#161718',
      border: '#E9EBED50',
      text: '#E9EBED',
    },
    primary: {
      main: '#42BDEE',
      surface: '#42BDEE20',
      text: '#161718',
    },
    secondary: {
      main: '#E6A43A',
      surface: '#E6A43A20',
      text: '#161718',
    },
  },
  ...sharedProperties,
};

export const lightTheme: DefaultTheme = {
  colors: {
    body: {
      background: '#EFF1F2',
      border: '#16171850',
      text: '#161718',
    },
    primary: {
      main: '#056B94',
      surface: '#056B9420',
      text: '#EFF1F2',
    },
    secondary: {
      main: '#8f5C0A',
      surface: '#8f5C0A20',
      text: '#EFF1F2',
    },
  },
  ...sharedProperties,
};
