import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpPage from './components/pages/signup';
import Home from '../src/components/pages/';
import Login from '../src/components/pages/login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/registrate" component={SignUpPage} exact></Route>
        <Route path="/iniciarsesion" component={Login} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
