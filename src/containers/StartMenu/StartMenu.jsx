import React,{useEffect, useState} from "react";
//Recoil
import {useRecoilValue} from "recoil";
import {setTextAtom} from "../../recoil/atoms";
//CSS
import "./StartMenu.css";
//Sound
import useSound from "use-sound";
import selectSound from "../../sounds/select.mp3";
//React Router Dom
import { Link, useHistory } from 'react-router-dom'
const StartMenu = () => {
  const history = useHistory();
  const [playselect] = useSound(selectSound, {volume : 0.5});
  const [clicked, setClicked] = useState(false);
  const text = useRecoilValue(setTextAtom);

  const arrowsActions = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      playselect()
      setTimeout(() => {
        setClicked(true)
        history.push("/menu")
      }, 200);
      
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
      <p>{text.intro}</p>
      <p><strong>{text.intro2}</strong></p>
      </div>
         <Link to="/menu" className="startmenu__link"><h3>{text.start}</h3></Link>

    </div>
  );
};

export default StartMenu;
