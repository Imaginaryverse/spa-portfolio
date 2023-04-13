import React, { FunctionComponent } from 'react';
import { Anchor, Section, Text } from '@src/components/common';

export const ContactPage: FunctionComponent = () => {
  return (
    <React.Fragment>
      <Text variant='h2'>Contact</Text>

      <Section>
        <Text>
          Connect with me on{' '}
          <Anchor to='https://www.linkedin.com/in/anton-bertilsson-3ab1ba66/'>
            LinkedIn
          </Anchor>
          .
        </Text>
      </Section>
    </React.Fragment>
  );
};
