import React, { FunctionComponent } from 'react';
import { Anchor, Icon, Section, Text } from '@src/components/common';
import { LighthouseReport } from '@src/components/LighthouseReport/LighthouseReport';

export const ProjectsPage: FunctionComponent = () => {
  return (
    <React.Fragment>
      <Section>
        <Text variant='h2'>Projects</Text>

        <Text>
          I'm actively developing two side projects that will be avaible here
          soon.
        </Text>

        <Text>
          In the meantime, you can check out my public repositories on{' '}
          <Anchor to='https://github.com/Imaginaryverse' target='_blank'>
            GitHub
          </Anchor>
          , or read more about what I'm working on below.
        </Text>
      </Section>

      <Section>
        <Text variant='h3'>
          <Icon name='chevron-right' margin={{ right: '0.5rem' }} />
          Color Scheme Generator
        </Text>
        <Text>
          A color scheme generator that uses HSLuv to generate color palettes
          with colors that are visually consistent, and color schemes that meet
          the requirements for contrast ratio as defined by the WCAG 2.1.
        </Text>

        <Text>
          The color schemes used on this website were actually generated by it.
        </Text>
      </Section>

      <Section>
        <Text variant='h3'>
          <Icon name='chevron-right' margin={{ right: '0.5rem' }} />
          Finance Tracker
        </Text>
        <Text>
          A personal finance tracker which allows users to track their income
          and expenses, and visualise their spending habits.
        </Text>
      </Section>

      <LighthouseReport />
    </React.Fragment>
  );
};
