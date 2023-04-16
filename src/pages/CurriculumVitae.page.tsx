import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Section, Text, Icon, Button, Anchor } from '@src/components/common';

// Curriculum Vitae page, which is a list of my skills and experience
// there is also a link to download a pdf version of my CV

const StyledAnchorTag = styled.a`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${({ theme }) => theme.fontSize.P};
  font-weight: bold;
  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.body.text};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  &:visited {
    color: ${({ theme }) => theme.colors.primary.main};

    &:hover {
      color: ${({ theme }) => theme.colors.body.text};
    }
  }
`;

export const CurriculumVitaePage: FunctionComponent = () => {
  return (
    <React.Fragment>
      <Section gap='XXS'>
        <Text variant='h2'>Anton Bertilsson</Text>
        <Text variant='h3'>Fullstack developer</Text>
        <Text>Stockholm, Sweden</Text>
        <StyledAnchorTag
          href='https://antonbertilsson.se/contact'
          target='_blank'
        >
          Contact me
        </StyledAnchorTag>
      </Section>

      <Section gap='XXS'>
        <Text variant='h2'>Skills</Text>

        <Section gap='XXS'>
          <Text variant='h3'>Languages</Text>
          <Text>JavaScript, TypeScript, HTML, CSS</Text>
        </Section>

        <Section gap='XXS'>
          <Text variant='h3'>Frameworks</Text>
          <Text>
            Node.js, React, React Native, Next.js, Express, MongoDB, Jest
          </Text>
        </Section>

        <Section gap='XXS'>
          <Text variant='h3'>Libraries</Text>
          <Text>
            Redux, Redux Toolkit, React Query, React Router, Styled Components,
            Sass
          </Text>
        </Section>

        <Section gap='XXS'>
          <Text variant='h3'>Tools</Text>
          <Text>Git, Visual Studio Code, ChatGPT, Figma</Text>
        </Section>
      </Section>

      <Section gap='XXS'>
        <Text variant='h2'>Experience</Text>

        <Section gap='XXS'>
          <Text variant='h3'>Bright Energy AB</Text>
          <Text>Fullstack developer</Text>
          <Text variant='label'>Apr 2022 - Present</Text>
          <Text variant='label'>Stockholm, Sweden</Text>
        </Section>

        <Section gap='XXS'>
          <Text variant='h3'>Bright Energy AB</Text>
          <Text>Consultant via School of Applied Technology</Text>
          <Text variant='label'>Aug 2021 - Apr 2022</Text>
          <Text variant='label'>Stockholm, Sweden</Text>
        </Section>

        <Section gap='XXS'>
          <Text variant='h3'>Hemköp Örby</Text>
          <Text>Shop assistant</Text>
          <Text variant='label'>Nov 2016 - Apr 2021</Text>
          <Text variant='label'>Stockholm, Sweden</Text>
        </Section>
      </Section>

      <Section gap='XXS'>
        <Text variant='h2'>Education</Text>

        <Section gap='XXS'>
          <Text variant='h3'>School of Applied Technology</Text>
          <Text>Fullstack developer program</Text>
          <Text variant='label'>May 2021 - Aug 2021</Text>
          <Text variant='label'>Remote, 100%</Text>
        </Section>

        <Section gap='XXS'>
          <Text variant='h3'>Högskolan Kristianstad</Text>
          <Text>Psychology 1</Text>
          <Text variant='label'>Sep 2019 - Jan 2020</Text>
          <Text variant='label'>Remote, 50%</Text>
        </Section>

        <Section gap='XXS'>
          <Text variant='h3'>Tärna Folkhögskola</Text>
          <Text>General studies</Text>
          <Text variant='label'>2014 - 2016</Text>
          <Text variant='label'>Sala, Sweden</Text>
        </Section>
      </Section>
    </React.Fragment>
  );
};
