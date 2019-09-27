import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import CssBaseLine from '@material-ui/core/CssBaseline'
import store from './Store'
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <CssBaseLine />
    <App />
  </Provider>,
  document.getElementById('root'))
