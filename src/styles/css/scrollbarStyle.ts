import { css } from 'styled-components';

export const scrollbarStyle = css`
  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;

    border-radius: ${({ theme }) => theme.borderRadius.M};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.primary.main}25;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary.main}75;

    box-shadow: inset 0 0 0 0.25rem rgba(0, 0, 0, 0.125);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary.main};
  }
`;
