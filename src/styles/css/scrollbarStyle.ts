import { css } from 'styled-components';

export const scrollbarStyle = css`
  &::-webkit-scrollbar {
    height: 0.5rem;
    width: 0.5rem;

    border-radius: ${({ theme }) => theme.borderRadius.M};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.primary.surface};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary.main}75;
    border-radius: ${({ theme }) => theme.borderRadius.M};

    box-shadow: inset 0 0 0 0.25rem rgba(0, 0, 0, 0.125);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary.main}90;
  }
`;
