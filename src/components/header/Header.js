import React from 'react';
import Time from './Time'
import './Header.css'
import { FaRegSmileWink } from 'react-icons/fa'



const Header = (props) => {
    return (
        <div className="content">


            <div className="header">
                <img src={props.img} alt="" className="profile-img" />
                <h1>{props.name}</h1>
            </div>
            <div className="time">
                <Time />
                <FaRegSmileWink size={30} />
            </div>
        </div>
    );
}

export default Header;

