import { ThemeProvider } from 'styled-components';
import themes from 'assets/themes/themes';
import Router from './Router';

const App = () => (
  <ThemeProvider theme={themes.light}>
    <Router />
  </ThemeProvider>
);

export default App;
