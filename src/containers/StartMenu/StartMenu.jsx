import React,{useEffect, useState} from "react";
//CSS
import "./StartMenu.css";
//Sound
import useSound from "use-sound";
import selectSound from "../../sounds/select.mp3";
//React Router Dom
import { Link, useHistory } from 'react-router-dom'
//Material Ui
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const StartMenu = () => {
  const history = useHistory();
  const [playselect] = useSound(selectSound, {volume : 0.5});
  const [clicked, setClicked] = useState(false)

  const arrowsActions = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      playselect()
      setTimeout(() => {
        setClicked(true)
        history.push("/menu")
      }, 600);
      
    }
  }

  useEffect(() => {
    playselect()
    document.addEventListener("keydown", arrowsActions)

    return ()=> document.removeEventListener("keydown", arrowsActions)
    
  }, [clicked])

  return (
    <div className="startmenu">
     
      <div className="startmenu__info">
      <h1>PORTAFOLIO</h1>
      <p>Bienvenidos a mi portafolio, el mismo esta creado para mobile first y tiene intenciones de ser responsive y poder utilizarse y modificarse desde la misma pagina.</p>
      <p><strong>Navegue utilizando las flechas y presionando enter o space para un mayor efecto arcade</strong></p>
      </div>
         <Link to="/menu" className="startmenu__link"><h3>START GAME</h3></Link>

    </div>
  );
};

export default StartMenu;
