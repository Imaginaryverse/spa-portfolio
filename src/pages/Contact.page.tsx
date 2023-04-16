import React, { FunctionComponent } from 'react';
import { Anchor, Section, Text } from '@src/components/common';
import { ContactForm } from '@src/components/ContactForm/ContactForm';

export const ContactPage: FunctionComponent = () => {
  return (
    <React.Fragment>
      <Section>
        <Text variant='h2'>Contact</Text>

        <Text>
          Send me a message or connect with me on{' '}
          <Anchor
            to='https://www.linkedin.com/in/anton-bertilsson-3ab1ba66/'
            target='_blank'
          >
            LinkedIn
          </Anchor>
          .
        </Text>
      </Section>

      <ContactForm />
    </React.Fragment>
  );
};
