import React from 'react';
import NewStatus from './status/NewStatus'
import PrevStatus from './status/PrevStatus'

const Content = (props) => {
    return (
        <div>
            <NewStatus clicked={props.click} input={props.input} />

        </div>
    );
}

export default Content;
