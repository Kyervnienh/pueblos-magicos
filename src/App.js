import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUp/signup';
import Home from './pages/Home/index';
import Login from './pages/Login/login';
import NotFoundPage from './pages/NotFound/notfound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/registrate" component={SignUpPage} exact></Route>
        <Route path="/iniciarsesion" component={Login} exact></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
