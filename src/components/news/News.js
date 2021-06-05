import React, { useState, useEffect } from 'react';
import Notification from './Notification'
import './News.css'
import { BsBellFill } from 'react-icons/bs'
import { RiMessage3Fill } from 'react-icons/ri'

let notiClicked = false;
let messClicked = false;

const News = (props) => {

    let notiColor = "black";
    let messColor = "black";



    if (props.n.length > 0 && !notiClicked) notiColor = "rgb(101, 202, 202)";
    if (props.m.length > 0 && !messClicked) messColor = "rgb(101, 202, 202)";
    // if (nextProps.n.length !== props.n.length) notiColor = "rgb(101, 202, 202)";


    return (
        <div className="news">
            <div className="noti-mess-btn">
                <BsBellFill
                    size={30}
                    onClick={() => { props.notifClick(); notiClicked = true; }}
                    cursor="pointer"
                    color={notiColor} />

                <RiMessage3Fill
                    size={30}
                    onClick={() => { props.messClick(); messClicked = true; }}
                    cursor="pointer"
                    color={messColor} />
            </div>
            <div className="noti-mess">
                {props.sn ? <Notification news={props.n} what="notification" /> : null}
                {props.sm ? <Notification news={props.m} what="messages" /> : null}
            </div>
        </div >
    );
}

export default News;
