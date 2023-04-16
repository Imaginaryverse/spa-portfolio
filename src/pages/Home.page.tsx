import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Anchor, Icon, Section, Text } from '@src/components/common';
import avatar from '@src/assets/avatar.png';

const StyledHeader = styled.header`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.M} 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.L};

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledAvatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;

  border: 2px solid ${({ theme }) => theme.colors.body.border};
  box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.25);

  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;
`;

const StyledSubHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const BioSection: FunctionComponent = () => {
  return (
    <Section>
      <Text variant='h3'>
        <Icon name='chevron-right' margin={{ right: '0.5rem' }} />
        Biography
      </Text>

      <Text>
        I'm a fullstack developer from Stockholm, Sweden, who combines his
        creative energy and passion for programming to produce high-quality code
        and great user experiences.
      </Text>

      <Text>
        In my current role at Bright Energy AB, my work mainly focuses on
        mobile/web development and B2B integrations. I'm also development lead
        for Bright Bridge - an administration tool for the company and its
        clients.
      </Text>

      <Text>
        My tech stack includes <b>React</b>, <b>Node.js</b>, <b>Express</b>,{' '}
        <b>MongoDB</b>, and <b>TypeScript</b>.
      </Text>
    </Section>
  );
};

const ContactSection: FunctionComponent = () => {
  return (
    <Section>
      <Text variant='h3'>
        <Icon name='chevron-right' margin={{ right: '0.5rem' }} />
        Contact
      </Text>
      <Text>
        Send me a <Anchor to='/contact'>message</Anchor> or connect with me on{' '}
        <Anchor to='https://www.linkedin.com/in/anton-bertilsson-3ab1ba66/'>
          LinkedIn
        </Anchor>
        .
      </Text>
    </Section>
  );
};

export const HomePage: FunctionComponent = () => {
  return (
    <React.Fragment>
      <StyledHeader>
        <StyledAvatar src={avatar} alt='Anton Bertilsson' />
        <StyledSubHeader>
          <Text variant='h1'>Anton Bertilsson</Text>
          <Text variant='h2'>Fullstack developer</Text>
        </StyledSubHeader>
      </StyledHeader>

      <BioSection />

      <ContactSection />
    </React.Fragment>
  );
};
