import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Anchor, Icon, Section, Text } from '@src/components/common';
const Avatar = React.lazy(() => import('@src/components/Avatar/Avatar'));

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
        creative energy and passion for web development to create beautiful and
        functional web applications. Using my knowledge from studying
        psychology, I strive to create intuitive and user-friendly interfaces,
        while also ensuring that the code is clean, reasonable and easy to
        maintain.
      </Text>

      <Text>
        My current tech stack includes React, React Native, Node.js, Express,
        MongoDB, and TypeScript.
      </Text>

      <Text>
        I have been working as a professional developer since the summer of
        2021, and am currently employed at Bright Energy AB. My current work
        involves B2B integrations and mobile/web development. I'm also
        development lead for Bright Bridge; an administration tool for Bright
        Energy AB and its clients.
      </Text>
    </Section>
  );
};

const ProjectsSection: FunctionComponent = () => {
  return (
    <Section>
      <Text variant='h3'>
        <Icon name='chevron-right' margin={{ right: '0.5rem' }} />
        Projects
      </Text>

      <Text>
        I'm actively working on two side projects at the moment that will be
        released in the near future. You can read more about them on the{' '}
        <Anchor to='/projects'>Projects</Anchor> page.
      </Text>

      <Text>
        Alternatively, you can check out my public repositories on{' '}
        <Anchor to='https://github.com/Imaginaryverse' target='_blank'>
          GitHub
        </Anchor>
        .
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
        Connect with me on{' '}
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
        {/* <StyledAvatar src={avatar} alt='Anton Bertilsson' /> */}
        <Avatar />
        <StyledSubHeader>
          <Text variant='h1'>Anton Bertilsson</Text>
          <Text variant='h2'>Fullstack developer</Text>
        </StyledSubHeader>
      </StyledHeader>

      <BioSection />

      <ProjectsSection />

      <ContactSection />
    </React.Fragment>
  );
};
