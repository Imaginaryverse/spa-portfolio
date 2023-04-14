import React, { FunctionComponent, useMemo, useState } from 'react';
import styled from 'styled-components';

// encode form data for sending as post data
const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

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
    <form
      name='contact'
      method='POST'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      onSubmit={handleSubmit}
    >
      <input type='hidden' name='form-name' value='contact' />
      <p>
        <label>
          Your Name:{' '}
          <input
            type='text'
            name='name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Your Email:{' '}
          <input
            type='email'
            name='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Message:{' '}
          <textarea
            name='message'
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type='submit' disabled={isSubmitDisabled}>
          Send
        </button>
      </p>
    </form>
  );
};
