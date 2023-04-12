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
      border: '#EFF1F250',
      text: '#EFF1F2',
    },
    primary: {
      main: '#42BDEE',
      surface: '#42BDEE20',
      text: '#101112',
    },
    secondary: {
      main: '#E6A43A',
      surface: '#E6A43A20',
      text: '#101112',
    },
    danger: {
      main: '#E66767',
      surface: '#E6676720',
      text: '#101112',
    },
  },
  ...sharedProperties,
};

export const lightTheme: DefaultTheme = {
  colors: {
    body: {
      background: '#FDFDFD',
      border: '#10101650',
      text: '#101016',
    },
    primary: {
      main: '#45459F',
      surface: '#45459F20',
      text: '#FDFDFD',
    },
    secondary: {
      main: '#525234',
      surface: '#52523420',
      text: '#FDFDFD',
    },
    danger: {
      main: '#843A4E',
      surface: '#843A4E20',
      text: '#FDFDFD',
    },
  },
  ...sharedProperties,
};
