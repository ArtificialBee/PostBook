import React from 'react';
import Aux from './Auxilliary'
import './Notification.css'


const Notification = (props) => {
    console.log("Pozvana je NOTIFICATION")
    let content = ["No new", props.what].join(" ");
    const classlist = ["notif-card"];
    if (props.news.length > 0) {
        classlist.push("notif");
        content = (
            <div >
                {props.news.map(notif => {
                    return <p className="new-no">{notif}</p>
                })}
            </div>
        );
        console.log(classlist.join(" "));
    }
    return (
        <div className={classlist.join(" ")}>
            {content}
        </div>
    );
}

export default Notification;
