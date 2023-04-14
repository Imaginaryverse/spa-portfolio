import React, { FunctionComponent } from 'react';
import { Anchor, Section, Text } from '@src/components/common';
import { ContactForm } from '@src/components/ContactForm/ContactForm';

export const ContactPage: FunctionComponent = () => {
  return (
    <React.Fragment>
      <Section>
        <Text variant='h2'>Contact</Text>

        <Text>
          Let's chat! I'm always interested in hearing about new opportunities
          and projects.
        </Text>

        <Text>
          Send me an email or connect with me on{' '}
          <Anchor to='https://www.linkedin.com/in/anton-bertilsson-3ab1ba66/'>
            LinkedIn
          </Anchor>
          .
        </Text>
      </Section>

      <ContactForm />
    </React.Fragment>
  );
};
