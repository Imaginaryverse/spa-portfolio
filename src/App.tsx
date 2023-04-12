import { ThemeProvider } from 'styled-components';
import { useThemeMode } from './context/ThemeModeProvider';
import { lightTheme, darkTheme } from './styles/themes';
import { GlobalStyles } from './styles/GlobalStyles';
import { AppRouter } from './router/AppRouter';

function App() {
  const { themeMode } = useThemeMode();

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
