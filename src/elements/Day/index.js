import React, {useState} from 'react';
import { useSelector} from 'react-redux';
import {weatherActions} from '../../components/Weather/actions';

import {toWeekDay} from "../../heplers";


export const Day  = ({type, day, temperature, clickHandler}) =>{
    const {selectedDay} = useSelector(state => state.weather);
    return(
        <div className={`${type}  ${selectedDay?.day===day? 'selected' : ''} day`}  onClick={clickHandler}>
            <p>{toWeekDay(day)}</p>
            <span>{temperature}</span>
        </div>
    )
};