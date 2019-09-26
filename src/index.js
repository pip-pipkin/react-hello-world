import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import CssBaseLine from '@material-ui/core/CssBaseline'
import configureStore from './Store'
import App from './App';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <CssBaseLine />
    <App />
  </Provider>,
  document.getElementById('root'))
