import React from "react";
//React router Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//Containers
import StartMenu from "../StartMenu/StartMenu";
import Menu from "../Menu/Menu";
//Components
import Profile from "../../components/Profile/Profile";
const App = () => {
  return (
    <div className="app">
      <Router>
          <Profile />
        <Switch>
          <Route exact path="/" component={StartMenu}/>
          <Route exact path="/menu" component={Menu}/>
        </Switch>
      </Router>
      
    </div>
  );
};

export default App;
