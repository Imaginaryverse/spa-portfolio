import { createContext, useContext, FunctionComponent, useState } from 'react';

export type ThemeMode = 'light' | 'dark';

export type ThemeModeContextType = {
  themeMode: ThemeMode;
  switchThemeMode: () => void;
};

type ThemeModeProviderProps = {
  children: React.ReactNode;
};

function loadThemeMode(): ThemeMode {
  const themeMode = localStorage.getItem('themeMode');
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  // check if the user has explicitly chosen a theme
  if (themeMode === 'dark' || themeMode === 'light') {
    return themeMode;
  }

  // if not, check if the user has a dark theme preference
  if (prefersDarkMode) {
    return 'dark';
  }

  // if not, return light theme
  return 'light';
}

function saveThemeMode(themeMode: ThemeMode) {
  localStorage.setItem('themeMode', themeMode);
}

const ThemeModeContext = createContext<ThemeModeContextType | undefined>(
  undefined
);

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }
  return context;
};

export const ThemeModeProvider: FunctionComponent<ThemeModeProviderProps> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(loadThemeMode());

  const switchThemeMode = () => {
    const newThemeMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newThemeMode);
    saveThemeMode(newThemeMode);
  };

  return (
    <ThemeModeContext.Provider value={{ themeMode, switchThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};
