import React from 'react'
//CSS
import "./Profile.css"
//Local
import profilePic from "../../images/profile.jpg";
import health from "../../images/health.png";
import linkedinIcon from "../../images/icons/linkedin.png";
import githubIcon from "../../images/icons/github.png";
import whatsappIcon from "../../images/icons/whatsapp.png";
import emailIcon from "../../images/icons/email.png";

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__left">
                <img src={profilePic} alt="profile"/>
                <div className="profile_status">
                    <img src={health} alt="bar"/>
                    
                </div>
            </div>
            <div className="profile__right">
                <div className="profile__info">
                    <p>Nombre: Nicolas Limonoff</p>
                    <p>Clase: FullStack Developer</p>
                    <p>Level: Junior</p>
                </div>
                <div className="profile__redes">
                    <span>Clanes:</span>
                    <a href=""><img src={linkedinIcon} alt=""/></a>
                    <a href=""><img src={githubIcon} alt=""/></a>
                    <a href=""><img src={whatsappIcon} alt=""/></a>
                    <a href=""><img src={emailIcon} alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default Profile
