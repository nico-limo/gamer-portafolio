import React from 'react'
//CSS
import "./Profile.css"
//Local
import profilePic from "../../images/profile.jpg";

import bar from "../../images/bar.png";

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__left">
                <img src={profilePic} alt="profile"/>
                <div className="profile_status">
                    <img id="bar" src={bar} alt="bar"/>
                    
                </div>
            </div>
            <div className="profile__right">
                <h2>Derecha</h2>
            </div>
        </div>
    )
}

export default Profile
