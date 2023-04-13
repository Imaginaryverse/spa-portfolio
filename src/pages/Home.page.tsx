import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Icon, Section, Text } from '@src/components/common';

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

  outline: 2px solid ${({ theme }) => theme.colors.body.border};
  box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.25);

  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;
`;

const BioSection: FunctionComponent = () => {
  return (
    <Section>
      <Text variant='h3'>
        <Icon name='chevron-right' margin={{ right: '0.5rem' }} />
        Bio
      </Text>
      <Text>
        I'm a fullstack developer from Stockholm, Sweden, whose primary tech
        stack includes React, Node.js and TypeScript. I combine my creative
        energy, and passion for web development and psychology, to create
        beautiful and functional web applications.
      </Text>

      <Text>
        Have been working as a professional developer since the summer of 2021,
        and am currently employed at Bright Energy AB. My current work involves
        B2B integrations and mobile/web development. I'm also development lead
        for an administation tool for the company and our clients.
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
        Check out my public repositories on{' '}
        <a href='https://github.com/Imaginaryverse' target='_blank'>
          GitHub
        </a>
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
        <a
          href='https://www.linkedin.com/in/anton-bertilsson-3ab1ba66/'
          target='_blank'
        >
          LinkedIn
        </a>
        .
      </Text>
    </Section>
  );
};

export const HomePage: FunctionComponent = () => {
  return (
    <React.Fragment>
      <StyledHeader>
        <StyledAvatar src='src/assets/avatar.jpeg' alt='avatar' />
        <div>
          <Text variant='h1'>Anton Bertilsson</Text>
          <Text variant='h2'>Fullstack developer</Text>
        </div>
      </StyledHeader>

      <BioSection />

      <ProjectsSection />

      <ContactSection />
    </React.Fragment>
  );
};
