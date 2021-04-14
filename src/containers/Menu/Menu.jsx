import React,{useState, useEffect} from "react";
//Recoil
import {useRecoilValue} from "recoil";
import {setTextAtom} from "../../recoil/atoms";
//Sound
import useSound from "use-sound";
import moveSound from "../../sounds/cursor.mp3";
import selectSound from "../../sounds/select.mp3";
//CSS
import "./Menu.css";
//Utils
import {menuLink} from "../../utils/spanish/routesName";
//React Router Dom
import { Link, useHistory } from 'react-router-dom'
//Material Ui
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const Menu = () => {
  const history = useHistory();
  const [playmove] = useSound(moveSound, {volume : 0.5});
  const [playselect] = useSound(selectSound, {volume : 0.5});
  const [selected, setSelected] = useState(0);
  const text = useRecoilValue(setTextAtom);
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
            history.push(menuLink.portafolio)
            break;
          case 1:
            history.push(menuLink.edit)
            break;
          case 2:
            history.push(menuLink.options)
            break;
          case 3:
            history.push(menuLink.back)
            break;
          default:
            break;
        }
      }, 200);
    }
  }
  useEffect(() => {
    playmove()
    document.addEventListener("keydown", arrowsActions);

    return ()=> document.removeEventListener("keydown", arrowsActions);
    
  }, [selected])

  return (
    <div  onKeyDown={(e) => arrowsActions(e)} className="menu">
        <h1>Menu</h1>
        <Link className="menu_link" to={menuLink.portafolio}><p>{text.start}</p> <ArrowBackIosIcon className={`${selected === 0 ? 'active' : 'no-active' }`} /> </Link>
        <Link className="menu_link" to={menuLink.edit}><p>{text.load} (admin)</p> <ArrowBackIosIcon className={`${selected === 1 ? 'active' : 'no-active' }`}/> </Link>
        <Link className="menu_link" to={menuLink.options}><p>{text.title_options}</p> <ArrowBackIosIcon className={`${selected === 2 ? 'active' : 'no-active' }`}/> </Link>
        <Link className="menu_link" to={menuLink.back}><p>{text.back}</p> <ArrowBackIosIcon className={`${selected === 3 ? 'active' : 'no-active' }`}/> </Link>
    </div>
  );
};

export default Menu;
