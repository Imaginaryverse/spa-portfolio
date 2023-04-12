import { FunctionComponent } from 'react';
import styled from 'styled-components';

type PageProps = {
  children: React.ReactNode | React.ReactNode[];
};

const StyledPage = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1440px;

  padding: ${({ theme }) => theme.spacing.M} ${({ theme }) => theme.spacing.L};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;

  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing.M} ${theme.spacing.XL}`};
  }
`;

export const Page: FunctionComponent<PageProps> = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};
