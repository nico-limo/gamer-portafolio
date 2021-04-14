import React,{useState, useEffect} from "react";
//Sound
import useSound from "use-sound";
import moveSound from "../../sounds/cursor.mp3";
import selectSound from "../../sounds/select.mp3";
//CSS
import "../Menu/Menu.css";
//Utils
import {userMenuLink} from "../../utils/spanish/routesName";
//React Router Dom
import { Link, useHistory } from 'react-router-dom'
//Material Ui
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const Portafolio = () => {
  const history = useHistory();
  const [playmove] = useSound(moveSound, {volume : 0.5})
  const [playselect] = useSound(selectSound, {volume : 0.5})
  const [selected, setSelected] = useState(0)

  const arrowsActions = (e) => {
    if (e.keyCode === 38 ) {
      selected === 0 ? setSelected(3) : setSelected(selected - 1);
      
    }
    if (e.keyCode === 40) {
      selected === 3 ? setSelected(0) : setSelected(selected + 1);
    }
    if (e.keyCode === 13 || e.keyCode === 32) {
      playselect()
      setTimeout(() => {
        switch (selected) {
          case 0:
            history.push(userMenuLink.about)
            break;
          case 1:
            history.push(userMenuLink.skills)
            break;
          case 2:
            history.push(userMenuLink.projects)
            break;
          case 3:
            history.push(userMenuLink.back)
            break;
          default:
            break;
        }
      }, 500);
      
    }
    
  }
  useEffect(() => {
    playmove()
    document.addEventListener("keydown", arrowsActions)

    return ()=> document.removeEventListener("keydown", arrowsActions)
    
  }, [selected])

  return (
    <div  onKeyDown={(e) => arrowsActions(e)} className="menu">
        <h1>Menu</h1>
        <Link className="menu_link" to={userMenuLink.about}><p>Acerca de</p> <ArrowBackIosIcon className={`${selected === 0 ? 'active' : 'no-active' }`} /> </Link>
        <Link className="menu_link" to={userMenuLink.skills}><p>Habilidades</p> <ArrowBackIosIcon className={`${selected === 1 ? 'active' : 'no-active' }`}/> </Link>
        <Link className="menu_link" to={userMenuLink.projects}><p>Proyectos</p> <ArrowBackIosIcon className={`${selected === 2 ? 'active' : 'no-active' }`}/> </Link>
        <Link className="menu_link" to={userMenuLink.back}><p>Volver</p> <ArrowBackIosIcon className={`${selected === 3 ? 'active' : 'no-active' }`}/> </Link>
    </div>
  );
};

export default Portafolio;

