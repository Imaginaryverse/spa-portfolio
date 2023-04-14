import { FunctionComponent } from 'react';
import styled from 'styled-components';

type LoadingSpinnerProps = {
  size?: 'small' | 'medium' | 'large';
};

function applySpinnerSize(size: LoadingSpinnerProps['size']) {
  switch (size) {
    case 'small':
      return '1.15rem';
    case 'medium':
      return '2.5rem';
    case 'large':
      return '5rem';
    default:
      return '2.5rem';
  }
}

function applyBorderSize(size: LoadingSpinnerProps['size']) {
  switch (size) {
    case 'small':
      return '0.15rem';
    case 'medium':
      return '0.3rem';
    case 'large':
      return '0.6rem';
    default:
      return '0.3rem';
  }
}

const StyledLoadingSpinner = styled.div<LoadingSpinnerProps>`
  display: inline-block;
  position: relative;
  width: ${({ size }) => applySpinnerSize(size)};
  height: ${({ size }) => applySpinnerSize(size)};
  border-radius: 50%;
  border: ${({ theme, size }) =>
    `${applyBorderSize(size)} solid ${theme.colors.primary.surface}`};
  border-top-color: ${({ theme }) => theme.colors.primary.main};
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingSpinner: FunctionComponent<LoadingSpinnerProps> = ({
  size = 'medium',
}) => {
  return <StyledLoadingSpinner size={size} />;
};
