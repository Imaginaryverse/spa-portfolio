import { disabledStyle } from '@src/styles/css';
import { FunctionComponent } from 'react';
import { IconBase, IconType } from 'react-icons';
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiExternalLink,
  FiMoon,
  FiSun,
  FiChevronDown,
  FiChevronUp,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';
import styled, { DefaultTheme } from 'styled-components';

type FeatherIcon =
  | 'github'
  | 'linkedin'
  | 'instagram'
  | 'mail'
  | 'external-link'
  | 'moon'
  | 'sun'
  | 'chevron-down'
  | 'chevron-up'
  | 'chevron-left'
  | 'chevron-right';

const IconMap: Record<FeatherIcon, IconType> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  instagram: FiInstagram,
  mail: FiMail,
  'external-link': FiExternalLink,
  moon: FiMoon,
  sun: FiSun,
  'chevron-down': FiChevronDown,
  'chevron-up': FiChevronUp,
  'chevron-left': FiChevronLeft,
  'chevron-right': FiChevronRight,
};

type IconProps = {
  /**
   * The name of the icon.
   * @type 'github' | 'linkedin' | 'mail' | 'external-link' | 'moon' | 'sun' | 'chevron-down' | 'chevron-up' | 'chevron-left' | 'chevron-right'
   */
  name: FeatherIcon;
  /**
   * The size of the icon.
   * @type 'small' | 'medium' | 'large';
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large' | `${number}rem`;
  /**
   * The color of the icon.
   * @type 'inherit' | 'primary' | 'secondary' | 'danger';
   * @default 'inherit'
   */
  color?: 'inherit' | 'primary' | 'secondary' | 'danger';
  /**
   * If true, the icon will be opaque.
   */
  opaque?: boolean;
  /**
   * onClick handler.
   * @type Function
   * @default undefined
   */
  onClick?: Function;
  /**
   * If true, the icon will be disabled.
   */
  disabled?: boolean;
  /**
   * If true, prevents events from bubbling up the DOM tree.
   */
  stopPropagation?: boolean;
  /**
   * The title of the icon.
   * @type string
   * @default undefined
   */
  title?: string;
  /**
   * Margin of the icon.
   * @type `${number}rem`
   * @default undefined
   */
  margin?: {
    top?: `${number}rem`;
    right?: `${number}rem`;
    bottom?: `${number}rem`;
    left?: `${number}rem`;
  };
  /**
   * Vertical alignment of the icon.
   * @type 'top' | 'middle' | 'bottom'
   * @default undefined
   */
  verticalAlign?: 'top' | 'middle' | 'bottom';
};

function getIconSize(size: IconProps['size']) {
  switch (size) {
    case 'small':
      return '0.875rem';
    case 'large':
      return '1.5rem';
    case 'medium':
      return '1rem';
    default:
      return size;
  }
}

function getIconColor(color: IconProps['color'], theme: DefaultTheme): string {
  switch (color) {
    case 'primary':
    case 'secondary':
    case 'danger':
      return theme.colors[color].main;
    case 'inherit':
    default:
      return 'inherit';
  }
}

const StyledIcon = styled(IconBase)<Omit<IconProps, 'name'>>`
  color: ${({ color, theme }) => getIconColor(color, theme)};

  ${({ size }) => size && `font-size: ${getIconSize(size)}`};

  cursor: ${({ disabled, onClick }) =>
    disabled || !onClick ? 'inherit' : 'pointer'};

  ${({ disabled }) => disabled && disabledStyle};

  &.opaque {
    opacity: 0.5;
  }

  stroke-width: 2.5px;
`;

export const Icon: FunctionComponent<IconProps> = ({
  name,
  size = 'medium',
  color = 'inherit',
  opaque,
  onClick,
  disabled,
  stopPropagation = false,
  title,
  margin,
  verticalAlign,
}) => {
  const IconComponent = IconMap[name];

  function handleClick(e?: React.MouseEvent) {
    if (stopPropagation) {
      e?.preventDefault();
      e?.stopPropagation();
    }

    if (disabled) {
      return;
    }

    if (onClick) {
      onClick();
    }
  }

  return (
    <StyledIcon
      as={IconComponent}
      size={getIconSize(size)}
      color={color}
      onClick={!onClick ? undefined : handleClick}
      disabled={disabled}
      title={title}
      className={opaque ? 'opaque' : ''}
      style={{
        ...(margin && {
          marginTop: margin.top,
          marginRight: margin.right,
          marginBottom: margin.bottom,
          marginLeft: margin.left,
        }),
        ...(verticalAlign && { verticalAlign }),
      }}
    />
  );
};
