import { FunctionComponent } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: bold;
  text-decoration: 2px underline;
  text-underline-offset: 0.125rem;
  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.body.text};
  }

  &:visited {
    color: ${({ theme }) => theme.colors.primary.main};

    &:hover {
      color: ${({ theme }) => theme.colors.body.text};
    }
  }
`;

export const Anchor: FunctionComponent<LinkProps> = ({
  children,
  ...props
}) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};
