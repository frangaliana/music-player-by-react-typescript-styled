import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { App } from './app.container';
import { GlobalStyle, theme } from './app.theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <HashRouter>
        <App />
      </HashRouter>
    </>
  </ThemeProvider>,
  document.getElementById('root')
);
