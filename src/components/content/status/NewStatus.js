import React from 'react';
import './NewStatus.css'

const NewStatus = (props) => {
    let value = "";
    return (
        <div className="new-status">
            <textarea cols="60" rows="2" className="text" onInput={props.input}></textarea>
            <button className="post-btn" onClick={props.clicked}>Post</button>
        </div>
    );
}

export default NewStatus;
