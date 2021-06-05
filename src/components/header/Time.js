import React from 'react';

const Time = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date();

    return (
        <div>
            {/* {d.getHours()}:{d.getMinutes()} */}
            Happy {days[d.getDay()]}
        </div>
    );
}

export default Time;
