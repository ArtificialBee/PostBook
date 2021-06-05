import React from 'react';
import './About.css'
import { BsInfoSquare } from 'react-icons/bs'

const About = (props) => {
    return (
        <div className="aboutCard">
            <h2 className="about">About</h2>
            <div className="info">
                <p>Address: <span>{props.s}</span></p>
                <p>Birthday: <span>{props.bday.join(" ")}</span></p>
                <p>Elementary school: <span>{props.es}</span></p>
                <p>High school: <span>{props.hs}</span></p>
                <p>College: <span>{props.co}</span></p>
                <p>Hobbies: <span>{props.h}</span></p>
            </div>
        </div>
    );
}

export default About;
