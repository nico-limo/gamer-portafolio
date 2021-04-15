import React, { useEffect, useState } from "react";
//CSS
import "./About.css";
//React Router Dom
import { Link, useHistory } from "react-router-dom";
//Recoil
import { useRecoilValue } from "recoil";
import { setTextAtom } from "../../recoil/atoms";
//Utils
import { PortafolioLink } from "../../utils/routesName";
//Sound
import useSound from "use-sound";
import selectSound from "../../sounds/select.mp3";
const About = () => {
  const history = useHistory();
  const [playselect] = useSound(selectSound, { volume: 0.5 });
  const [clicked, setClicked] = useState(false);
  const text = useRecoilValue(setTextAtom);
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
    playselect();
    document.addEventListener("keydown", arrowsActions);

    return () => document.removeEventListener("keydown", arrowsActions);
  }, [clicked]);

  return (
    <div className="about">
      <div className="about__container">
        <div className="about__left">
          <p>INFO IZQ</p>
        </div>
        <div className="about__right">
          <p>INFO DER</p>
        </div>
      </div>

      <Link to={PortafolioLink.back} className="menu_link"><p>{text.back}</p></Link>
    </div>
  );
};

export default About;
