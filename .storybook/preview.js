import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'components/common/GlobalStyles';
import themes from 'assets/themes';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
