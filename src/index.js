import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseLine from '@material-ui/core/CssBaseline'
import { Provider } from 'react-redux'
import store from './Store'
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <CssBaseLine />
    <App />
  </Provider>, 
  document.getElementById('root'))
