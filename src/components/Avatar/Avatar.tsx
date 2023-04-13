import avatar from '@src/assets/avatar.jpeg';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;

  outline: 2px solid ${({ theme }) => theme.colors.body.border};
  box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.25);

  transition: all ${({ theme }) => theme.transitionDuration.medium} ease-in-out;
`;

const Avatar: FunctionComponent = () => {
  return <StyledAvatar src={avatar} alt='Anton Bertilsson' loading='lazy' />;
};

export default Avatar;
