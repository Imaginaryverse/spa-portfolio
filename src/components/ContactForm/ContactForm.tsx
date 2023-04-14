import React, { FunctionComponent, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button, Section, Text } from '@src/components/common';

const StyledCleverFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.M};
`;

export const ContactForm: FunctionComponent = () => {
  // netlify form handling

  return (
    <StyledCleverFormContainer>
      <form
        name='contact'
        method='POST'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        action='/success'
      >
        <input type='hidden' name='form-name' value='contact' />
        <p hidden>
          <label>
            Don’t fill this out: <input name='bot-field' />
          </label>
        </p>
        <p>
          <label>
            Your name:
            <br />
            <input type='text' name='name' />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input type='email' name='email' />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name='message'></textarea>
          </label>
        </p>
        <p>
          <Button type='submit'>Send</Button>
        </p>
      </form>
    </StyledCleverFormContainer>
  );
};
