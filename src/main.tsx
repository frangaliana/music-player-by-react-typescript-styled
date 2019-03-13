import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { App } from './app.container';
import { ThemeProvider } from 'styled-components';
import { theme } from './app.theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
