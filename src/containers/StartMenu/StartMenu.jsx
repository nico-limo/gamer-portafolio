import React from "react";
//CSS
import "./StartMenu.css";
//React Router Dom
import { Link } from 'react-router-dom'

const StartMenu = () => {
  return (
    <div className="startmenu">
     
      <div className="startmenu__info">
      <h1>PORTAFOLIO</h1>
      <p>Bienvenidos a mi portafolio, el mismo esta creado para mobile first y tiene intenciones de ser responsive y poder utilizarse y modificarse desde la misma pagina</p>
      </div>
         <Link to="/menu" className="startmenu__link"><h3>START GAME</h3></Link>

    </div>
  );
};

export default StartMenu;
