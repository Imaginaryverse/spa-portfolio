import React, { FunctionComponent } from 'react';
import { Text, Section, Icon } from '@src/components/common';
import styled from 'styled-components';

type SkillsItem = {
  title: string;
  items: string[];
};

type ListItem = {
  title: string;
  company: string;
  date: string;
  description: string;
};

const skills: SkillsItem[] = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks',
    items: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Redux',
      'React Query',
      'Styled Components',
      'Jest',
    ],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Visual Studio Code', 'Figma'],
  },
];

const experiences: ListItem[] = [
  {
    title: 'Fullstack developer',
    company: 'Bright Energy AB',
    date: 'Apr 2022 - Present',
    description:
      'Work mainly focused on B2B integrations and mobile/web development. Also development lead for Bright Bridge - an administration tool for Bright Energy AB and its clients.',
  },
  {
    title: 'Consultant',
    company: 'Bright Energy AB',
    date: 'Aug 2021 - Apr 2022',
    description:
      'Consultant at Bright Energy AB via School of Applied Technology.',
  },
  {
    title: 'Shop assistant',
    company: 'Hemköp',
    date: 'Nov 2016 - Apr 2021',
    description: 'Shop assistant at Hemköp Örby in Stockholm.',
  },
];

const education: ListItem[] = [
  {
    title: 'Fullstack developer program',
    company: 'School of Applied Technology',
    date: 'May 2021 - Aug 2021',
    description:
      '12-week full-time course, primarily focused on the JavaScript ecosystem. Out of over 1000 applicants, I was one of only 30 students selected to participate in the program.',
  },
  {
    title: 'Psychology 1',
    company: 'Högskolan Kristianstad',
    date: 'Sep 2019 - Jan 2020',
    description: 'Studied Psychology 1 at 50% via distance education.',
  },
  {
    title: 'General studies',
    company: 'Tärna Folkhögskola',
    date: '2014 - 2016',
    description: 'General studies at Tärna Folkhögskola in Sala. Full-time.',
  },
];

const StyledList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  list-style: none;
`;

const StyledListItem = styled.li`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.L};
  padding-right: 0;

  background-color: ${({ theme }) => theme.colors.body.background};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: ${({ theme }) => theme.spacing.XS};
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

    outline: 2px solid transparent;
    outline-offset: 2px;

    background-color: ${({ theme }) => theme.colors.primary.main};

    transition: all ${({ theme }) => theme.transitionDuration.medium}
      ease-in-out;
  }

  &:hover {
    &::before {
      outline-color: ${({ theme }) => theme.colors.primary.main};
      transform: translateY(-50%) scale(1.25);
    }
  }

  @media screen and (max-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing.M} ${theme.spacing.L}`};
  }
`;

export const AboutPage: FunctionComponent = () => {
  return (
    <React.Fragment>
      <Section>
        <Text variant='h2'>About me</Text>
        <Text>
          I'm passionate about programming and software architecture, and care
          deeply about the quality and impact of my work. While I tend to be
          very thorough and detail-oriented, I always try to keep the big
          picture in mind. I strive to create the best possible solutions both
          in terms of user experience, performance and maintainability, and I'm
          always looking for ways to improve my skills and knowledge.
        </Text>

        <Text>
          Besides programming I also have an interested in psychology which I
          studied part-time in 2019. I make use of my knowledge from those
          studies in my work as a developer, as I believe that understanding how
          people think and how the mind works are crucial parts of creating
          great web applications.
        </Text>
      </Section>

      <Section>
        <Text variant='h3'>
          <Icon name='chevron-right' margin={{ right: '0.5rem' }} />
          Experience
        </Text>

        <StyledList>
          {experiences.map((item, index) => (
            <StyledListItem key={index}>
              <Text variant='h4'>
                {item.title} ({item.company})
              </Text>
              <Text variant='h5' fontWeight='bold'>
                {item.date}
              </Text>
              <Text>{item.description}</Text>
            </StyledListItem>
          ))}
        </StyledList>
      </Section>

      <Section>
        <Text variant='h3'>
          <Icon name='chevron-right' margin={{ right: '0.5rem' }} />
          Education
        </Text>

        <StyledList>
          {education.map((item, index) => (
            <StyledListItem key={index}>
              <Text variant='h4'>
                {item.title} ({item.company})
              </Text>
              <Text variant='h5' fontWeight='bold'>
                {item.date}
              </Text>
              <Text>{item.description}</Text>
            </StyledListItem>
          ))}
        </StyledList>
      </Section>

      <Section>
        <Text variant='h3'>
          <Icon name='chevron-right' margin={{ right: '0.5rem' }} />
          Skills
        </Text>

        <StyledList>
          {skills.map((item, index) => (
            <StyledListItem key={index}>
              <Text variant='h4'>{item.title}</Text>
              <Text>{item.items.join(', ')}</Text>
            </StyledListItem>
          ))}
        </StyledList>
      </Section>

      <Section>
        <Text variant='h3'>
          <Icon name='chevron-right' margin={{ right: '0.5rem' }} />
          Programming journey
        </Text>

        <Text>
          I first got into programming in 2020 when I enrolled in Harvard
          University's CS50 course. I have been a creative and analytical person
          my entire life, and programming seemed the perfect outlet for both of
          these sides of my personality. Thinking about problems and how to
          solve them stimulated my analytical side, while writing code and
          implementing great solutions satisfied my creative side. I was hooked
          as soon as I understood the potential of programming.
        </Text>

        <Text>
          I continued to study in my spare time, and in 2021 I enrolled in the
          fullstack developer program at School of Applied Technology. Out of
          over 1000 applicants, I was one of only 30 students selected to
          participate in the program. The program was a 12-week full-time course
          which primarily focused on the JavaScript ecosystem.
        </Text>

        <Text>
          Upon graduating from the program, I was hired as a consultant at
          Bright Energy AB, and became a full-time developer in August 2021. I
          now work in a variety of domains, and I'm development lead for Bright
          Bridge - an administration tool for Bright Energy AB and its clients.
        </Text>
      </Section>

      <Section>
        <Text variant='h3'>
          <Icon name='chevron-right' margin={{ right: '0.5rem' }} />
          Hobbies
        </Text>

        <Text>
          While I tend to spend a lot of my free time programming, I also enjoy
          playing video games, cooking, and spending time in nature.
          Occasionally, you can also find me playing the guitar or singing.
        </Text>

        <Text>
          In the future, I would like to start blogging about my programming
          journey, and share my experiences and knowledge with others. I'm in
          large part self-taught through resources that are freely available on
          the Internet, and I want give back to the community so that others can
          have the same opportunities that I have had.
        </Text>
      </Section>
    </React.Fragment>
  );
};
