import 'styled-components';

type Spacing = `${number}rem`;
type BorderRadius = `${number}px`;
type TransitionDuration = `${number}ms`;
type FontSize = `${number}rem`;

interface Theme {
  colors: {
    body: {
      background: string;
      border: string;
      text: string;
    };
    primary: {
      main: string;
      surface: string;
      text: string;
    };
    secondary: {
      main: string;
      surface: string;
      text: string;
    };
  };
  spacing: {
    XXS: Spacing; // 0.125rem
    XS: Spacing; // 0.25rem
    S: Spacing; // 0.5rem
    M: Spacing; // 1rem
    L: Spacing; // 2rem
    XL: Spacing; // 4rem
    XXL: Spacing; // 8rem
  };
  borderRadius: {
    S: BorderRadius; // 4px
    M: BorderRadius; // 8px
    L: BorderRadius; // 16px
  };
  transitionDuration: {
    slow: TransitionDuration; // 300ms
    medium: TransitionDuration; // 200ms
    fast: TransitionDuration; // 100ms
  };
  dimensions: {
    inputHeight: `${number}rem`;
    buttonHeight: `${number}rem`;
  };
  fontSize: {
    H1: FontSize; // 2rem
    H2: FontSize; // 1.75rem
    H3: FontSize; // 1.5rem
    H4: FontSize; // 1.25rem
    H5: FontSize; // 1rem
    H6: FontSize; // 0.875rem
    P: FontSize; // 1rem
    SMALL: FontSize; // 0.875rem
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
