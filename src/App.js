import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUp/signup";
import Home from "./pages/Home/index";
import Login from "./pages/Login/login";
import NotFoundPage from "./pages/NotFound/notfound";
import DescriptionPage from "./pages/Description/description";
import TownList from "./pages/TownList/townlist";
import SupportPage from "./pages/Support";
import CommunityPage from "./pages/Community";
import Dashboard from "./pages/Dashboard/dashboard";
import TownForm from "./components/TownForm"
import Cookies from "universal-cookie";

const cookies = new Cookies();

function App() {
  const [isLogged, setisLogged] = useState(false);
  useEffect(() => {
    if (cookies.get("username")) {
      setisLogged(true);
    } else {
      setisLogged(false);
    }
  }, []);
  const isAdminString = cookies.get("isAdmin");
  const isAdmin = isAdminString === "true" ? true : false;
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/registrate" component={SignUpPage} exact></Route>
        <Route path="/iniciarsesion" component={Login} exact></Route>
        <Route
          path="/pueblosmagicos/:id"
          component={DescriptionPage}
          exact
        ></Route>
        <Route path="/pueblosmagicos" component={TownList} exact></Route>
        <Route path="/soporte" component={SupportPage} exact></Route>
        <Route path="/comunidad" component={CommunityPage} exact></Route>
        <Route path="/dashboard" component={isLogged && isAdmin ? Dashboard : NotFoundPage} exact></Route>
        <Route path="/dashboard/addTown" component={isLogged && isAdmin ? TownForm : NotFoundPage} exact></Route>
        <Route path="/dashboard/editTown" component={isLogged && isAdmin ? TownForm : NotFoundPage} exact></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
