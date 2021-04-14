import React from "react";
//React router Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//Containers
import StartMenu from "../StartMenu/StartMenu";
import Menu from "../Menu/Menu";
import Portafolio from "../Portafolio/Portafolio";
//Components
import Profile from "../../components/Profile/Profile";
const App = () => {
  return (
    <div className="app">
      <Router>
          <Profile />
        <Switch>
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/portafolio" component={Portafolio}/>
          <Route exact path="/" component={StartMenu}/>
        </Switch>
      </Router>
      
    </div>
  );
};

export default App;
