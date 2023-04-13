import { FunctionComponent, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useWindowSize } from '../hooks';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';

enum Routes {
  HOME = '/',
  ABOUT = '/about',
  PROJECTS = '/projects',
  CONTACT = '/contact',
}

const StyledNavigationHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  max-width: 1440px;
  min-height: 100px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.L};

  background-color: ${({ theme }) => theme.colors.body.background};

  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;

  @media screen and (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing.XL};
  }
`;

/**
 * Renders as a vertical list of links.
 * Only visible on mobile.
 */
const StyledHamburgerMenu = styled.nav`
  position: absolute;
  top: 100px;
  right: 0;
  width: 100%;
  height: calc(100vh - 100px);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: ${({ theme }) => theme.spacing.M} ${({ theme }) => theme.spacing.L};
  gap: ${({ theme }) => theme.spacing.L};

  background-color: ${({ theme }) => theme.colors.body.background};

  transform: translateX(-100%);

  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;

  &.open {
    transform: translateX(0);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

/**
 * Renders as a horizontal list of links.
 * Only visible on desktop.
 */
const StyledNav = styled.nav`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.L};

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSize.H3};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.body.text};

  text-decoration: none;

  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.body.text};
    transition: all ${({ theme }) => theme.transitionDuration.slow} ease-in-out;

    opacity: 0;
  }

  &:visited {
    color: ${({ theme }) => theme.colors.body.text};
  }

  &:hover {
    &:not(.active) {
      &::after {
        width: 100%;
        opacity: 1;
      }
    }
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary.main};

    &::after {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.primary.main};
      opacity: 1;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

const StyledHamburgerBtn = styled.button`
  position: relative;
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;

  &:hover {
    & > div {
      background-color: ${({ theme }) => theme.colors.body.text};
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const StyledHamburgerIcon = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;

  background-color: ${({ theme }) => theme.colors.primary.main};

  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;

  &:nth-child(1) {
    transform: translateY(-0.5rem);
  }

  &:nth-child(2) {
    transform: translateY(0);
  }

  &:nth-child(3) {
    transform: translateY(0.5rem);
  }

  &.open {
    &:nth-child(1) {
      transform: rotate(45deg) translateY(0);
      transform-origin: center;
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: rotate(-45deg) translateY(0);
      transform-origin: center;
    }
  }
`;

export const Navigation: FunctionComponent = () => {
  const { pathname } = useLocation();
  const { width } = useWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!width) {
      return;
    }

    if (width > 768 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [width]);

  return (
    <StyledNavigationHeader>
      <StyledHamburgerBtn
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label='Open menu'
      >
        <StyledHamburgerIcon className={isMenuOpen ? 'open' : ''} />
        <StyledHamburgerIcon className={isMenuOpen ? 'open' : ''} />
        <StyledHamburgerIcon className={isMenuOpen ? 'open' : ''} />
      </StyledHamburgerBtn>

      <StyledHamburgerMenu className={isMenuOpen ? 'open' : ''}>
        {Object.entries(Routes).map(([key, value]) => {
          const isActive = pathname === value;

          return (
            <StyledNavLink
              key={key}
              to={value}
              className={isActive ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              {key}
            </StyledNavLink>
          );
        })}
      </StyledHamburgerMenu>

      <StyledNav>
        {Object.entries(Routes).map(([key, value]) => {
          const isActive = pathname === value;

          return (
            <StyledNavLink
              key={key}
              to={value}
              className={isActive ? 'active' : ''}
            >
              {key}
            </StyledNavLink>
          );
        })}
      </StyledNav>

      <ThemeSwitch />
    </StyledNavigationHeader>
  );
};
