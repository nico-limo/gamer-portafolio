import React, { useEffect, useState } from "react";
//CSS
import "./Skills.css";
//React Router Dom
import { Link, useHistory } from "react-router-dom";
//Recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import { setTextAtom, profileAtom, languageAtom } from "../../recoil/atoms";
//Utils
import { PortafolioLink } from "../../utils/routesName";
import { listSoftEng, listSoftSpn, listTech, randomfrase, randomPhrase } from "../../utils/listItems";
//Sound
import useSound from "use-sound";
import selectSound from "../../sounds/select.mp3";

const Skills = () => {
  const history = useHistory();
  const [playselect] = useSound(selectSound, { volume: 0.5 });
  const [clicked, setClicked] = useState(false);
  const text = useRecoilValue(setTextAtom);
  const language = useRecoilValue(languageAtom);
  const setProfile = useSetRecoilState(profileAtom);
  const arrowsActions = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      playselect();
      setTimeout(() => {
        setClicked(true);
        history.push("/portafolio");
      }, 200);
    }
  };


  useEffect(() => {
    setProfile(true);
    return () => setProfile(false);
  }, []);

  useEffect(() => {
    playselect();
    document.addEventListener("keydown", arrowsActions);

    return () => document.removeEventListener("keydown", arrowsActions);
  }, [clicked]);

  return (
    <div className="skills">
      <h1>{text.skills}</h1>
      <div className="skills__container">
        <div className="skills__left">
          <h3>{text.tech}</h3>
          <ul>
          {listTech}
          </ul>
        </div>
        <div className="skills__right">
          <h3>{text.social}</h3>
          <ul>
          {language === "spanish" ? listSoftSpn : listSoftEng}
          </ul>
        </div>
      </div>
      <Link to={PortafolioLink.back} className="menu_link">
        <p>{text.back}</p>
      </Link>
    </div>
  );
};

export default Skills;
