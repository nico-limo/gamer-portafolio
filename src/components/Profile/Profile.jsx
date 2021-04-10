import React from 'react'
//CSS
import "./Profile.css"
//Local
import profilePic from "../../images/profile.jpg";
import healthPic from "../../images/health.png";
import manaPic from "../../images/mana.png";

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__left">
                <img src={profilePic} alt="profile"/>
                <div className="profile_status">
                    <img id="health" src={healthPic} alt="health"/>
                    <img id="mana"src={manaPic} alt="mana"/>
                </div>
            </div>
            <div className="profile__right">
                <h2>Derecha</h2>
            </div>
        </div>
    )
}

export default Profile
