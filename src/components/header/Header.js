import React from 'react';
import Time from './Time'
import './Header.css'

const Header = (props) => {
    return (
        <div className="content">
            <div className="header">
                <img src={props.img} alt="" className="profile-img" />
                <h1>{props.name}</h1>
            </div>
            <div className="time">
                Time: <Time />
            </div>
        </div>
    );
}

export default Header;
