import React from 'react';
import { DayCard } from './DayCard';


const Weekdays = (props) => {

    const weekdays = props.weekdays;

    return weekdays.map((day, index) => {
        return <div className="col" style={{width:"20%"}} key={index}>
            <DayCard day={day} />
        </div>
    })
}

export { Weekdays };
