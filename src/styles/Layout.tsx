import { useLocation } from 'react-router-dom';
import { Navigation } from '@src/components/Navigation/Navigation';
import { Page } from '@src/components/common';
import { FunctionComponent, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledApp = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const StyledFooter = styled.footer`
  min-height: 100px;
  height: 100px;
  width: 100%;
  max-width: 1440px;

  display: flex;
  align-items: center;
  justify-content: center;

  // place at bottom of page
  margin-top: auto;
`;

export const Layout: FunctionComponent = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top of page on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <StyledApp>
      <Navigation />
      <Page>
        <Outlet />
        <StyledFooter>Footer</StyledFooter>
      </Page>
    </StyledApp>
  );
};
