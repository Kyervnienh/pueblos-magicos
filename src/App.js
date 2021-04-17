import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpPage from './components/pages/signup'
import Home from '../src/components/pages/'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/registrate" component={SignUpPage} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
