
import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import Login from './app/Login'
import NotFound from './app/NotFound.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Redirect from="/" exact to="/login" /> 
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;