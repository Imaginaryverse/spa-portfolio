import React, { FunctionComponent, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button, LoadingSpinner, Section, Text } from '../common';
import { disabledStyle } from '@src/styles/css';

const emailRegex = /^[^\s@]{1,64}@([^\s@]{2,253}\.){1,127}[^\s@]{2,63}$/;

// encode form data for sending as post data
const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const SneakyFormStyles = styled.div`
  width: 100%;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: ${({ theme }) => theme.spacing.M};

    .input-group {
      width: 100%;
      max-width: calc(75ch + 1rem);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: ${({ theme }) => theme.spacing.XS};

      label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: ${({ theme }) => theme.spacing.XS};
        padding-left: ${({ theme }) => theme.spacing.XS};

        font-size: ${({ theme }) => theme.fontSize.SMALL};
        font-weight: bold;
        color: ${({ theme }) => theme.colors.body.text};
      }

      input {
        width: calc(75ch + 1rem);
        max-width: 100%;
        padding: ${({ theme }) => theme.spacing.S};
        border: 2px solid ${({ theme }) => theme.colors.body.border};
        border-radius: ${({ theme }) => theme.borderRadius.S};
        outline: none;
        background-color: ${({ theme }) => theme.colors.body.background};
        color: ${({ theme }) => theme.colors.body.text};
        font-size: ${({ theme }) => theme.fontSize.P};

        transition: all ${({ theme }) => theme.transitionDuration.medium}
          ease-in-out;

        &:focus {
          border-color: ${({ theme }) => theme.colors.primary.main};
          background-color: ${({ theme }) => theme.colors.body.text}05;
        }

        &[aria-invalid='true'] {
          border-color: red;
        }

        // prevent browser autofill from changing the styling
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px
            ${({ theme }) => theme.colors.body.background} inset !important;
          -webkit-text-fill-color: ${({ theme }) =>
            theme.colors.body.text} !important;
          -webkit-transition: background-color 5000s ease-in-out 0s !important;
        }

        &:disabled {
          ${disabledStyle}
        }
      }

      textarea {
        width: calc(75ch + 1rem);
        max-width: 100%;
        min-height: 10rem;
        padding: ${({ theme }) => theme.spacing.S};
        border: 2px solid ${({ theme }) => theme.colors.body.border};
        border-radius: ${({ theme }) => theme.borderRadius.S};
        outline: none;
        background-color: ${({ theme }) => theme.colors.body.background};
        color: ${({ theme }) => theme.colors.body.text};
        font-family: sans-serif;
        font-size: ${({ theme }) => theme.fontSize.P};

        transition: border-color
            ${({ theme }) => theme.transitionDuration.medium} ease-in-out,
          background-color ${({ theme }) => theme.transitionDuration.medium}
            ease-in-out;

        &:focus {
          border-color: ${({ theme }) => theme.colors.primary.main};
          background-color: ${({ theme }) => theme.colors.body.text}05;
        }

        // prevent browser autofill from changing the styling
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px
            ${({ theme }) => theme.colors.body.background} inset !important;
          -webkit-text-fill-color: ${({ theme }) =>
            theme.colors.body.text} !important;
          -webkit-transition: background-color 5000s ease-in-out 0s !important;
        }

        &:disabled {
          ${disabledStyle}
        }
      }
    }
  }
`;

const StyledContactFormErrorContainer = styled.div`
  width: calc(75ch + 1rem);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.XS};
  padding: ${({ theme }) => `${theme.spacing.XS} ${theme.spacing.S}`};

  background-color: #ff000050;
  border-radius: ${({ theme }) => theme.borderRadius.S};

  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;

  animation: shake 0.5s ease-in-out;

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    10% {
      transform: translateX(-0.125rem);
    }
    20% {
      transform: translateX(0.125rem);
    }
    30% {
      transform: translateX(-0.125rem);
    }
    40% {
      transform: translateX(0.125rem);
    }
    50% {
      transform: translateX(-0.125rem);
    }
    60% {
      transform: translateX(0.125rem);
    }
    70% {
      transform: translateX(-0.125rem);
    }
    80% {
      transform: translateX(0.125rem);
    }
    90% {
      transform: translateX(-0.125rem);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const ContactForm: FunctionComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPostError, setShowPostError] = useState(false);
  const [showPostSuccess, setShowPostSuccess] = useState(false);

  const isSubmitDisabled = useMemo(() => {
    return !name || !email || !message || showEmailError || isSubmitting;
  }, [name, email, message, showEmailError, isSubmitting]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setShowPostSuccess(false);
    setShowPostError(false);

    if (isSubmitDisabled) {
      return;
    }

    if (!emailRegex.test(email)) {
      setShowEmailError(true);
      return;
    }

    setIsSubmitting(true);

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name,
        email,
        message,
      }),
    })
      .then(() => {
        setShowPostSuccess(true);
      })
      .catch(() => {
        setShowPostError(true);
      })
      .finally(() => {
        setName('');
        setEmail('');
        setMessage('');
        setIsSubmitting(false);
      });
  };

  if (showPostSuccess) {
    return (
      <Section>
        <Text variant='h4'>Thanks for the message!</Text>
      </Section>
    );
  }

  return (
    <SneakyFormStyles>
      <form
        name='contact'
        method='POST'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        onSubmit={handleSubmit}
      >
        <input type='hidden' name='form-name' value='contact' />
        <p className='input-group'>
          <label htmlFor='name'>Name</label>
          <input
            autoFocus
            id='name'
            type='text'
            name='name'
            placeholder='Your name'
            value={name}
            onChange={e => setName(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </p>
        <p className='input-group'>
          <label htmlFor='email'>Email</label>
          <input
            className={showEmailError ? 'error' : ''}
            aria-invalid={showEmailError}
            id='email'
            type='email'
            name='email'
            placeholder='Your email'
            value={email}
            onChange={e => {
              setShowEmailError(false);
              setEmail(e.target.value);
            }}
            required
            disabled={isSubmitting}
          />
        </p>

        {showEmailError && (
          <StyledContactFormErrorContainer>
            <Text variant='label'>Please enter a valid email address</Text>
          </StyledContactFormErrorContainer>
        )}

        <p className='input-group'>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            placeholder='Your message'
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </p>

        {showPostError && (
          <StyledContactFormErrorContainer>
            <Text variant='h6'>Oops! Something went wrong</Text>
            <Text variant='label'>
              Please check your input or try again later
            </Text>
          </StyledContactFormErrorContainer>
        )}

        <p className='input-group'>
          <Button
            type='submit'
            ghost={isSubmitDisabled}
            disabled={isSubmitDisabled}
          >
            {isSubmitting ? <LoadingSpinner size='small' /> : 'Send'}
          </Button>
        </p>
      </form>
    </SneakyFormStyles>
  );
};
