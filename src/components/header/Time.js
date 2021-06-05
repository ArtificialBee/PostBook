import React from 'react';
import './Time.css'

const Time = () => {
    let d = new Date();
    return (
        <div>
            {d.getHours()}:{d.getMinutes()}
        </div>
    );
}

export default Time;
