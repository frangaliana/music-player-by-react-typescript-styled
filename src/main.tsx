import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { App } from './app.container';
import { ThemeProvider } from 'styled-components';
import { theme } from './app.theme';

document.body.style.height = '100vh';
document.body.style.background = `${theme.palette.tertiaryColor}`;
document.body.style.margin = '0';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
