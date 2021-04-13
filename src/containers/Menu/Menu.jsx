import React,{useState, useEffect} from "react";
//CSS
import "./Menu.css";
//React Router Dom
import { Link } from 'react-router-dom'
//Material Ui
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const Menu = () => {
  const [selected, setSelected] = useState(0)

  const arrowsActions = (e) => {
    e.preventDefault()
    if (e.keyCode === 38 ) {
      selected === 0 ? setSelected(3) : setSelected(selected - 1);
      
    }
    if (e.keyCode === 40) {
      selected === 3 ? setSelected(0) : setSelected(selected + 1);
    }
    
  }
  useEffect(() => {
    document.addEventListener("keydown", arrowsActions)
    console.log("Selected is ",selected);

    return ()=> document.removeEventListener("keydown", arrowsActions)
    
  }, [selected])

  
  return (
    <div  onKeyDown={(e) => arrowsActions(e)} className="menu">
        <h1>Menu</h1>
        <Link className="menu_link"  to="/portafolio"><p>Continuar Partida</p> <ArrowBackIosIcon className={`${selected === 0 ? 'active' : 'no-active' }`} /> </Link>
        <Link className="menu_link" to="/edit"><p>Cargar Partida (admin)</p> <ArrowBackIosIcon className={`${selected === 1 ? 'active' : 'no-active' }`}/> </Link>
        <Link className="menu_link" to="/opciones"><p>Opciones</p> <ArrowBackIosIcon className={`${selected === 2 ? 'active' : 'no-active' }`}/> </Link>
        <Link className="menu_link" to="/"><p>Salir</p> <ArrowBackIosIcon className={`${selected === 3 ? 'active' : 'no-active' }`}/> </Link>
    </div>
  );
};

export default Menu;
