import React from 'react';
import './PrevStatus.css'
import { AiFillDelete } from 'react-icons/ai'


const PrevStatus = (props) => {
    console.log("PREVSTATUS: ", props)
    return (
        <div className="prev-sts">
            <p>{props.status}</p>
            {/* <div className="btns">
                <button>D</button>
            </div> */}
            <AiFillDelete size={20} cursor="pointer" onClick={props.dlt} />
        </div >
    );
}

export default PrevStatus;
