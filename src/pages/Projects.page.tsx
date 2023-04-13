import React, { FunctionComponent } from 'react';
import { Button, Section, Text } from '@src/components/common';
import { useNavigate } from 'react-router-dom';

export const ProjectsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Text variant='h1'>Projects</Text>

      <Section>
        <Text>
          I have a few personal projects that are actively being developed.
        </Text>

        <Text>
          A color scheme generator that uses HSLuv to generate color palettes
          with colors that are visually consistent, and color schemes that meet
          the requirements for contrast ratio as defined by the WCAG 2.1.
        </Text>

        <Text>
          I actually used the color scheme generator to create the color scheme
          for this website. Below is an example of a call-to-action button which
          uses the scheme's secondary color.
        </Text>

        <Button color='secondary' onClick={() => navigate('/contact')}>
          Let's talk!
        </Button>

        <Text>
          I also have a personal finance tracker that I'm working on, which
          allows users to track their income and expenses, as well as visualise
          their spending habits.
        </Text>

        <Text>
          Both of these projects will both be available here soon. Until then,
          you can check out my public repositories on{' '}
          <a href='https://github.com/Imaginaryverse' target='_blank'>
            GitHub
          </a>
          .
        </Text>
      </Section>
    </React.Fragment>
  );
};
