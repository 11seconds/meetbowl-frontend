import { ThemeProvider } from 'styled-components';
import themes from 'assets/themes';
import { QueryClientProvider, QueryClient } from 'react-query';
import Router from './Router';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={themes.light}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
