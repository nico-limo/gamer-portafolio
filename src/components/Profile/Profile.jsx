import React from 'react'
//CSS
import "./Profile.css"
//Material UI
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
//Local
import profilePic from "../../images/profile.jpg";
import health from "../../images/health.png";
//Recoil
import {useRecoilValue} from "recoil";
import {setTextAtom} from "../../recoil/atoms";

const Profile = () => {
    const text = useRecoilValue(setTextAtom);
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
                    <p>{text.name}: Nicolas Limonoff</p>
                    <p>{text.class}: FullStack Developer</p>
                    <p>{text.level}: Junior</p>
                </div>
                <div className="profile__redes">
                    <span>{text.clans}:</span>
                    <LinkedInIcon className="icon"/> 
                    <GitHubIcon className="icon"/> 
                    <EmailIcon className="icon"/> 
                    <WhatsAppIcon className="icon" /> 
                </div>
            </div>
        </div>
    )
}

export default Profile
