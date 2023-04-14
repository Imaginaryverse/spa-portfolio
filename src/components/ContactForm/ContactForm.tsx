import { disabledStyle } from '@src/styles/css';
import React, { FunctionComponent, useMemo, useState } from 'react';
import styled from 'styled-components';

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
      }

      button {
        width: fit-content;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: ${({ theme }) => theme.spacing.XS};
        padding: ${({ theme }) => `${theme.spacing.S} ${theme.spacing.M}`};

        color: ${({ theme }) => theme.colors.primary.text};
        background-color: ${({ theme }) => theme.colors.primary.main};
        border: 1px solid transparent;
        border-radius: ${({ theme }) => theme.borderRadius.M};

        font-size: 1rem;
        font-weight: bold;
        text-decoration: none;

        cursor: pointer;

        transition: all ${({ theme }) => theme.transitionDuration.medium}
          ease-in-out;

        &:hover {
          &:not(:disabled) {
            border-radius: ${({ theme }) => theme.borderRadius.L};

            background-color: ${({ theme }) => theme.colors.body.text};
            color: ${({ theme }) => theme.colors.body.background};
            border-color: ${({ theme }) => theme.colors.body.background};
          }
        }

        &:disabled {
          ${disabledStyle}
        }
      }
    }
  }
`;

export const ContactForm: FunctionComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isSubmitDisabled = useMemo(() => {
    return !name || !email || !message;
  }, [name, email, message]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitDisabled) {
      return;
    }

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
        alert('Success!');
      })
      .catch(error => {
        alert(error);
      })
      .finally(() => {
        setName('');
        setEmail('');
        setMessage('');
      });
  };

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
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder='Your name'
          />
        </p>
        <p className='input-group'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Your email'
          />
        </p>
        <p className='input-group'>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder='Your message'
          />
        </p>
        <p className='input-group'>
          <button type='submit' disabled={isSubmitDisabled}>
            Send
          </button>
        </p>
      </form>
    </SneakyFormStyles>
  );
};
