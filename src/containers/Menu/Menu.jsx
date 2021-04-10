import React from "react";
//CSS
import "./Menu.css";
//React Router Dom
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
        <h1>Menu</h1>
        <Link className="menu_link" to="/portafolio"><p>Continuar Partida</p></Link>
        <Link className="menu_link" to="/edit"><p>Cargar Partida (admin)</p></Link>
        <Link className="menu_link" to="/opciones"><p>Opciones</p></Link>
        <Link className="menu_link" to="/"><p>Salir</p></Link>
        
        
        
    </div>
  );
};

export default Menu;
