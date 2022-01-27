import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from 'App';
import reportWebVitals from 'reportWebVitals';

import themes from 'assets/themes/themes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themes.light}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
