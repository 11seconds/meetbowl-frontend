import { ThemeProvider } from 'styled-components';
import themes from 'assets/themes';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themes.light}>
      <Story />
    </ThemeProvider>
  ),
];
