import React from 'react';
import {useSelector} from "react-redux";

export const CurrentWeather  = () =>{

    const {selectedDay} = useSelector(state => state.weather);

    return(
        <>
            <div className="current-weather">
                <p className="temperature">{selectedDay?.temperature}</p>
                <p className="meta">
                    <span className="rainy">%{selectedDay?.rain_probability}</span>
                    <span className="humidity">%{selectedDay?.humidity}</span>
                </p>
            </div>
        </>
    )
}