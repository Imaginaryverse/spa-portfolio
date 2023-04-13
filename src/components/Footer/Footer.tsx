import { useThemeMode } from '@src/context/ThemeModeProvider';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Text, Icon } from '../common';

const StyledFooter = styled.footer`
  height: max-content;
  width: 100%;
  max-width: 1440px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  // place at bottom of page
  margin-top: auto;
`;

const StyledFooterContent = styled.div`
  width: 100%;
  max-width: calc(75ch + 1rem);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: ${({ theme }) => theme.spacing.L};

  padding-top: ${({ theme }) => theme.spacing.XXL};
  padding-bottom: ${({ theme }) => theme.spacing.L};

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledFooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.S};
`;

const StyledFooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.body.text};
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  text-decoration: none;

  opacity: 0.75;
  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const StyledFooterThemeSwitch = styled.button`
  color: ${({ theme }) => theme.colors.body.text};
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  text-decoration: none;

  opacity: 0.75;
  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;

  border: none;
  background: none;

  &:hover {
    cursor: pointer;
    opacity: 1;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const Footer: FunctionComponent = () => {
  const { switchThemeMode } = useThemeMode();

  return (
    <StyledFooter>
      <StyledFooterContent>
        <StyledFooterColumn>
          <StyledFooterLink to='/'>Home</StyledFooterLink>
          <StyledFooterLink to='/about'>About</StyledFooterLink>
          <StyledFooterLink to='/projects'>Projects</StyledFooterLink>
          <StyledFooterLink to='/contact'>Contact</StyledFooterLink>
        </StyledFooterColumn>
        <StyledFooterColumn>
          <StyledFooterLink
            to='https://github.com/Imaginaryverse'
            target='_blank'
          >
            <Icon
              name='github'
              size='small'
              verticalAlign='middle'
              margin={{ right: '0.5rem' }}
            />
            GitHub
          </StyledFooterLink>
          <StyledFooterLink
            to='https://www.linkedin.com/in/anton-bertilsson-3ab1ba66/'
            target='_blank'
          >
            <Icon
              name='linkedin'
              size='small'
              verticalAlign='middle'
              margin={{ right: '0.5rem' }}
            />
            LinkedIn
          </StyledFooterLink>
          <StyledFooterLink
            to='https://www.instagram.com/anton.brtlssn?igshid=MTI<>WQxMDU='
            target='_blank'
          >
            <Icon
              name='instagram'
              size='small'
              verticalAlign='middle'
              margin={{ right: '0.5rem' }}
            />
            Instagram
          </StyledFooterLink>
        </StyledFooterColumn>
        <StyledFooterColumn>
          <StyledFooterThemeSwitch onClick={() => switchThemeMode()}>
            Switch theme
          </StyledFooterThemeSwitch>
        </StyledFooterColumn>

        <Text variant='label' opaque>
          © 2021 Anton Bertilsson
        </Text>
      </StyledFooterContent>
    </StyledFooter>
  );
};
