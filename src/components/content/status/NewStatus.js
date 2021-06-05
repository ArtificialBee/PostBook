import React from 'react';
import './NewStatus.css'

const NewStatus = (props) => {
    return (
        <div className="new-status">
            <textarea cols="60" rows="3" className="text" onInput={props.input}></textarea>
            <button className="post-btn" onClick={props.clicked}>Post</button>
        </div>
    );
}

export default NewStatus;
