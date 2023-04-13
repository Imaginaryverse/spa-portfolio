import { FunctionComponent, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useThemeMode } from '@src/context/ThemeModeProvider';
import { Icon } from '../common';

const StyledThemeSwitch = styled.button`
  position: relative;
  width: 3.5rem;
  height: 1.5rem;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  overflow: hidden;
`;

const StyledCircle = styled.div<{ currentRotation: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme.colors.body.background};
  background-color: ${({ theme }) => theme.colors.primary.main};
  transition: all 0.4s ease-in-out;

  transform: rotate(${({ currentRotation }) => currentRotation}deg);

  &:hover {
    color: ${({ theme }) => theme.colors.primary.text};
    background-color: ${({ theme }) => theme.colors.body.text};
  }
`;

export const ThemeSwitch: FunctionComponent = () => {
  const { themeMode, switchThemeMode } = useThemeMode();
  const [currentRotation, setCurrentRotation] = useState(
    themeMode === 'light' ? 0 : 180
  );

  function handleThemeSwitch() {
    switchThemeMode();
    setCurrentRotation(prevRotation => prevRotation + 180);
  }

  return (
    <StyledThemeSwitch
      onClick={handleThemeSwitch}
      title={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
    >
      <StyledCircle currentRotation={currentRotation} className={themeMode}>
        <Icon name='moon' />
        <Icon name='sun' />
      </StyledCircle>
    </StyledThemeSwitch>
  );
};
