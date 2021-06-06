import React from 'react';
import NewStatus from './status/NewStatus'
import PrevStatus from './status/PrevStatus'
import './Content.css'

const Content = (props) => {

    console.log("CONTENT PROPS: ", props)

    const content = (props.update.map((post, index) => {
        return <PrevStatus
            status={post}
            dlt={props.dlt(index)}
            in={index} />
    }));
    return (
        <div className="cnt-class">
            <NewStatus clicked={props.click} input={props.input} />
            <div className="prev-status">
                {content}
            </div>
        </div>
    );
}

export default Content;
