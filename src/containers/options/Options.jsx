import React, { useState, useEffect } from "react";
//CSS
import "./Options.css";
//Recoil
import { useRecoilState } from "recoil";
import { languageAtom, setTextAtom } from "../../recoil/atoms";
//Utils
import { texto } from "../../utils/spanish/text";
import { textEng } from "../../utils/english/text";
//Sound
import useSound from "use-sound";
import moveSound from "../../sounds/cursor.mp3";
import selectSound from "../../sounds/select.mp3";
//React Router Dom
import { Link, useHistory } from "react-router-dom";
//Material Ui
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const Options = () => {
  const history = useHistory();
  const [playmove] = useSound(moveSound, { volume: 0.5 });
  const [playselect] = useSound(selectSound, { volume: 0.5 });
  const [selected, setSelected] = useState(0);
  const [language, setLanguage] = useRecoilState(languageAtom);
  const [text, setText] = useRecoilState(setTextAtom);
  const arrowsActions = (e) => {
    if (e.keyCode === 38) {
        playmove();
      selected === 0 ? setSelected(2) : setSelected(selected - 1);
    }
    if (e.keyCode === 40) {
        playmove();
      selected === 2 ? setSelected(0) : setSelected(selected + 1);
    }
    if (e.keyCode === 13 || e.keyCode === 32) {
      playselect();
      switch (selected) {
        case 0:
          //Set color
          console.log("Change color");
          break;
        case 1:
          setSelected(0);
          language === "spanish"
            ? setLanguage("english")
            : setLanguage("spanish");
          console.log(language);
          break;
        case 2:
          history.push("/menu");
          break;
        default:
          break;
      }
    }
  };

  const handleClickL = () => {
    setSelected(0);
    language === "spanish"
      ? setLanguage("english")
      : setLanguage("spanish");
    console.log(language);
  }

  useEffect(() => {
    language === "spanish" ? setText(texto) : setText(textEng);
  }, [language]);

  useEffect(() => {
    document.addEventListener("keydown", arrowsActions);

    return () => document.removeEventListener("keydown", arrowsActions);
  }, [selected]);

  return (
    <div onKeyDown={(e) => arrowsActions(e)} className="options">
      <h1>{text.title_options}</h1>
      <div className="options__menu">
        <ArrowForwardIosIcon
          className={selected === 0 ? "no_display_cell" : "option--active"}
        />
        <div className="options__left">
          <p>{text.mode}</p>
        </div>
        <div className="options__right">
          <p>En progreso</p>
        </div>
      </div>
      <div className="options__menu">
        <ArrowForwardIosIcon
          className={selected === 1 ? "no_display_cell" : "option--active"}
        />
        <div className="options__left">
          <p>{text.language}</p>
        </div>
        <div onClick={handleClickL} className="options__right">
          <p>{language}</p>
        </div>
      </div>
      <Link className="menu_link" to="/menu">
        <ArrowForwardIosIcon
          className={selected === 2 ? "no_display_cell" : "option--active"}
        />
        <p>{text.back}</p>
      </Link>
    </div>
  );
};

export default Options;
