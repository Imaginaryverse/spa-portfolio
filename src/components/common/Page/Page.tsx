import { FunctionComponent } from 'react';
import styled from 'styled-components';

type PageProps = {
  children: React.ReactNode | React.ReactNode[];
};

const StyledPage = styled.main`
  width: 100%;
  max-width: 1440px;

  padding: ${({ theme }) => theme.spacing.M} ${({ theme }) => theme.spacing.L};

  flex: 1 1 auto; // flex-grow, flex-shrink, flex-basis (means that it will take up all available space)
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;

  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing.M} ${theme.spacing.XL}`};
    padding-bottom: 0;
  }
`;

export const Page: FunctionComponent<PageProps> = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};
