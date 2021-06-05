import React from 'react';
import Notification from './Notification'
import './News.css'
import { BsBellFill } from 'react-icons/bs'
import { RiMessage3Fill } from 'react-icons/ri'


const News = (props) => {
    return (
        <div className="news">
            <div class="bell">
                <BsBellFill size={30} />
            </div>
            <Notification news={props.n} what="notifications" />
            <div class="mess">
                <RiMessage3Fill size={30} />
            </div>
            <Notification news={props.m} what="messages" />
        </div >
    );
}

export default News;
