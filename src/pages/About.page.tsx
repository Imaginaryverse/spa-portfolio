import React, { FunctionComponent } from 'react';
import { Text, Section, Icon } from '@src/components/common';
import styled from 'styled-components';

type CurricumulVitaeItem = {
  title: string;
  company: string;
  date: string;
  description: string;
};

const curricumulVitae: CurricumulVitaeItem[] = [
  {
    title: 'Fullstack developer',
    company: 'Bright Energy AB',
    date: 'Apr 2022 - Present',
    description:
      'Mainly B2B integrations and mobile/web development. Development lead for Bright Bridge - an administration tool for Bright Energy AB and its clients.',
  },
  {
    title: 'Consultant',
    company: 'Bright Energy AB',
    date: 'Aug 2021 - Apr 2022',
    description:
      'Consultant at Bright Energy AB via School of Applied Technology.',
  },
  {
    title: 'Student',
    company: 'School of Applied Technology',
    date: 'May 2021 - Aug 2021',
    description:
      'Student of the fullstack developer program at School of Applied Technology. Out of over 1000 applicants, I was one of only 30 students selected to participate in the program. The program was a 12-week full-time course which primarily focused on the JavaScript ecosystem.',
  },
  {
    title: 'Shop assistant',
    company: 'Hemköp',
    date: 'Nov 2016 - Apr 2021',
    description:
      'Shop assistant at Hemköp Örby in Stockholm. Studied Psychology A part-time via distance education in 2018 and programming in my spare time beginning in 2019.',
  },
  {
    title: 'Student',
    company: 'Tärna Folkhögskola',
    date: '2014 - 2016',
    description: 'General studies at Tärna Folkhögskola in Sala.',
  },
];

const StyledCurricumulVitaeList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  list-style: none;
`;

const StyledCurricumulVitaeItem = styled.li`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.L};
  padding-right: 0;

  background-color: ${({ theme }) => theme.colors.body.background};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: ${({ theme }) => theme.spacing.S};
  border-left: 4px solid ${({ theme }) => theme.colors.primary.surface};

  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;

  position: relative;

  &::before {
    content: '';
    width: 0.75rem;
    height: 0.75rem;
    position: absolute;
    top: 50%;
    left: -0.5rem;
    transform: translateY(-50%);
    border-radius: 50%;

    outline: 2px solid ${({ theme }) => theme.colors.primary.main};
    outline-offset: 2px;

    background-color: ${({ theme }) => theme.colors.primary.main};

    transition: all ${({ theme }) => theme.transitionDuration.medium}
      ease-in-out;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.surface};

    h4 {
      color: ${({ theme }) => theme.colors.primary.main};
    }

    &::before {
      transform: translateY(-50%) scale(1.25);
    }
  }
`;

export const AboutPage: FunctionComponent = () => {
  return (
    <React.Fragment>
      <Section>
        <Text variant='h2'>About me</Text>
        <Text>
          I'm a fullstack developer with a passion for programming and systems
          architecture. I care deeply about the quality of my work and strive to
          create the best possible solutions, whether it be in terms of user
          experience, performance or maintainability.
        </Text>
        <Text>
          In my current role at Bright Energy AB, my work involves B2B
          integrations, mobile and web development, and I'm also development
          lead for Bright Bridge - an administration tool for Bright Energy AB
          and its clients.
        </Text>
      </Section>

      <Section>
        <Text variant='h3'>
          <Icon name='chevron-right' margin={{ right: '0.5rem' }} />
          Experience
        </Text>

        <StyledCurricumulVitaeList>
          {curricumulVitae.map((item, index) => (
            <StyledCurricumulVitaeItem key={index}>
              <Text variant='h4'>
                {item.title} ({item.company})
              </Text>
              <Text variant='h5' fontWeight='bold'>
                {item.date}
              </Text>
              <Text>{item.description}</Text>
            </StyledCurricumulVitaeItem>
          ))}
        </StyledCurricumulVitaeList>
      </Section>
    </React.Fragment>
  );
};
