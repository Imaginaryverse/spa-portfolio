import { useLocation } from 'react-router-dom';
import { Navigation } from '@src/components/Navigation/Navigation';
import { Page } from '@src/components/common';
import { FunctionComponent, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '@src/components/Footer/Footer';

const StyledApp = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    padding-top: 85px;
  }
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
        <Footer />
      </Page>
    </StyledApp>
  );
};
