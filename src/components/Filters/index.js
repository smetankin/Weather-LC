import React, {useState} from 'react';
import {Checkbox} from "../../elements/Checkbox";
import {Input} from "../../elements/Input";

export const Filters  = ({applyFilters, discardFilters, isFiltered}) =>{

    const [weatherType, setWeatherType] = useState('');
    const [minTemperature, setMinTemperature] = useState('');
    const [maxTemperature, setMaxTemperature] = useState('');

    const changeWeatherTypeHandler = (name) =>{
        if(weatherType === name){
            setWeatherType('')
        }else{
            setWeatherType(name)
        }
    };

    const changeMaxTemperatureValue = (event) =>{
        setMaxTemperature(event.target.value);
        console.log(maxTemperature);
    };

    const changeMinTemperatureValue = (event) =>{
        setMinTemperature(event.target.value);
        console.log(minTemperature);
    };

    return(
        <>
            <div className="filter">
                <Checkbox
                    title="облачно"
                    checked = {weatherType==='cloudy'}
                    name = "cloudy"
                    onChange={changeWeatherTypeHandler}

                />
                <Checkbox
                    title="Солнечно"
                    checked = {weatherType==='sunny'}
                    name = "sunny"
                    onChange={changeWeatherTypeHandler}
                />

                <p className="custom-input">
                    <Input
                        title = "Минимальная температура"
                        id = "min-temperature"
                        name = "min"
                        value = {minTemperature}
                        onChange={changeMinTemperatureValue}

                    />
                </p>
                <p className="custom-input">
                    <Input
                        title = "Максимальная температура"
                        id = "max-temperature"
                        name = "max"
                        value = {maxTemperature}
                        onChange={changeMaxTemperatureValue}
                    />
                </p>
                <button onClick={isFiltered? discardFilters: ()=>applyFilters({weatherType, maxTemperature, minTemperature})}>{isFiltered? 'Сбросить' : 'Отфильтровать'}</button>
            </div>
        </>
    )
}