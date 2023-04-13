import { disabledStyle } from '@src/styles/css';
import React, { FunctionComponent } from 'react';
import styled, { DefaultTheme, css } from 'styled-components';

type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = {
  /**
   * The content of the button.
   */
  children: React.ReactNode | React.ReactNode[];
  /**
   * The function to call when the button is clicked.
   */
  onClick?: () => void;
  /**
   * The color of the button.
   * @default 'primary'
   * @type 'primary' | 'secondary'
   */
  color?: 'primary' | 'secondary';
  /**
   * If true, the button's background will be transparent while the text and border will be colored.
   * @default false
   * @type boolean
   */
  ghost?: boolean;
  /**
   * The size of the button.
   * @default 'medium'
   * @type 'small' | 'medium' | 'large'
   */
  size?: ButtonSize;
  /**
   * If true, the button will take up the full width of its container.
   * @default false
   * @type boolean
   */
  grow?: boolean;
  /**
   * The type of the button.
   * Use 'submit' for forms.
   * @default 'button'
   * @type 'button' | 'submit'
   */
  type?: 'button' | 'submit';
  /**
   * If true, the button will be disabled.
   * @default false
   * @type boolean
   */
  disabled?: boolean;
  /**
   * The title of the button.
   * Appears when the user hovers over the button.
   * @default undefined
   * @type string
   */
  title?: string;
};

function applyPaddingStyle(
  size: ButtonSize = 'medium',
  theme: DefaultTheme
): string {
  switch (size) {
    case 'small':
      return `${theme.spacing.XS} ${theme.spacing.S}`;
    case 'large':
      return `${theme.spacing.M} ${theme.spacing.L}`;
    case 'medium':
    default:
      return `${theme.spacing.S} ${theme.spacing.M}`;
  }
}

function applyBackgroundStyle(
  color: 'primary' | 'secondary' = 'primary',
  ghost: boolean = false,
  theme: DefaultTheme
): string {
  if (ghost) {
    return 'transparent';
  }

  switch (color) {
    case 'primary':
    case 'secondary':
      return theme.colors[color].main;
    default:
      return theme.colors.primary.main;
  }
}

function applyColorStyle(
  color: 'primary' | 'secondary' = 'primary',
  ghost: boolean = false,
  theme: DefaultTheme
): string {
  if (ghost) {
    return theme.colors[color].main;
  }

  return theme.colors[color].text;
}

function applyBorderColorStyle(
  color: 'primary' | 'secondary' = 'primary',
  ghost: boolean = false,
  theme: DefaultTheme
): string {
  if (ghost) {
    return theme.colors[color].main;
  }

  return 'transparent';
}

function applyFontSizeStyle(size: ButtonSize = 'medium'): string {
  switch (size) {
    case 'small':
      return '0.875rem';
    case 'large':
      return '1.25rem';
    case 'medium':
    default:
      return '1rem';
  }
}

const StyledButton = styled.button<ButtonProps>`
  width: ${({ grow }) => (grow ? '100%' : 'fit-content')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.XS};
  padding: ${({ size, theme }) => applyPaddingStyle(size, theme)};

  color: ${({ color, ghost, theme }) => applyColorStyle(color, ghost, theme)};
  background-color: ${({ color, ghost, theme }) =>
    applyBackgroundStyle(color, ghost, theme)};
  border: 1px solid
    ${({ color, ghost, theme }) => applyBorderColorStyle(color, ghost, theme)};
  border-radius: ${({ theme }) => theme.borderRadius.M};

  font-size: ${({ size }) => applyFontSizeStyle(size)};
  font-weight: bold;
  text-decoration: none;

  cursor: pointer;

  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;

  &:hover {
    &:not(:disabled) {
      border-radius: ${({ theme }) => theme.borderRadius.L};

      background-color: ${({ theme }) => theme.colors.body.text};
      color: ${({ theme }) => theme.colors.body.background};
      border-color: ${({ theme }) => theme.colors.body.background};
    }
  }

  &:disabled {
    ${disabledStyle}
  }
`;

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  color = 'primary',
  ghost = false,
  size = 'medium',
  grow = false,
  type = 'button',
  disabled = false,
  title,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      color={color}
      ghost={ghost}
      size={size}
      grow={grow}
      type={type}
      disabled={disabled}
      title={title}
    >
      {children}
    </StyledButton>
  );
};
