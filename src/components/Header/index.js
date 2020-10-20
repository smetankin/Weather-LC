import React from 'react';
import {useSelector} from "react-redux";
import {toWeekDay, toDayPlusMonth} from "../../heplers";

export const Header  = () =>{

    const {selectedDay} = useSelector(state => state.weather);

    return(
        <>
            <div className="head">
                <div className= {`${selectedDay?.type} icon cloud`}/>
                <div className="current-date">
                    <p>{toWeekDay(selectedDay?.day)}</p>
                    <span>{toDayPlusMonth(selectedDay?.day)}</span>
                </div>
            </div>
        </>
    )
}