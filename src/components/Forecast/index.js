import React, {useMemo} from 'react';
import {Day} from "../../elements/Day";
import  {useDispatch} from 'react-redux';
import {weatherActions} from "../Weather/actions";


export const Forecast = (props) => {


    const dispatch = useDispatch();
    const selectHandler = ((day) => {
        dispatch(weatherActions.selectDay(day))
    });

    const renderDay = useMemo(() => {
        if (props.data) {
             return props.data.map((item, index) => {
                const {day, temperature, type} = item;
                return (
                    <Day
                        key={index}
                        day={day}
                        temperature={temperature}
                        type={type}
                        clickHandler={()=> selectHandler(item)}
                    />
                )
            });
        }
        else return null
    }, [props.data]);
    return (
        <div className="forecast">
            {props.data.length? renderDay : <p>нет данных</p>}
        </div>
    )
};