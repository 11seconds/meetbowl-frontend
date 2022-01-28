import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/common/GlobalStyles';
import themes from 'assets/themes';
import { QueryClientProvider, QueryClient } from 'react-query';
import Router from './Router';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
