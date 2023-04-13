import React, { FunctionComponent } from 'react';
import { Button, Text } from '@src/components/common';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledNotFoundContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.XL};
`;

export const NotFoundPage: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <StyledNotFoundContainer>
        <Text variant='h1' textAlign='center'>
          404: Page Not Found
        </Text>

        <Text textAlign='center'>
          You seem a bit lost.
          <br />
          <br />
          Let's get you back on track!
        </Text>

        <Button onClick={() => navigate('/')}>Take me home!</Button>
      </StyledNotFoundContainer>
    </React.Fragment>
  );
};
