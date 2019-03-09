import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { App } from './app.container';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
