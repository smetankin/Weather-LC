import React, {useState, useEffect} from 'react';
import  '../../source/styles/index.scss';
import {Filters} from "../Filters";
import {Header} from "../Header";
import {CurrentWeather} from "../CurrentWeather";
import {Forecast} from "../Forecast";
import {useWeatherFetch} from "./hooks/useWeatherFetch";

export const Weather  = () =>{
    const {isFetching, data, error} = useWeatherFetch();
    // if(error && error.status === 404) {
    //     return <p>Not Found</p>;
    // }
    //
    // if(error && error.status !== 404) {
    //     return <p>Something went wrong</p>;
    // }
    const [filteredData, setFilterData] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    useEffect( ()=>{
       setFilterData(data);
    },[data]);

    const applyFilters = (filters) =>{
        setIsFiltered(true);
        console.log('filters',filters);
        console.log('filtered',filteredData);
        console.log('boolean',filters.weatherType==="");


        setFilterData(filteredData.filter(item => filters.weatherType ? item.type === filters.weatherType : true)
            .filter(item => filters.maxTemperature ? item.temperature <= filters.maxTemperature : true)
            .filter(item => filters.minTemperature ? item.temperature >= filters.minTemperature : true));


    };
    const discardFilters = () =>{
        setIsFiltered(false);
        setFilterData(data);
    };

    const weatherContent = (
        <>
            <Header/>
            <CurrentWeather/>
            <Forecast data = {filteredData}/>
        </>
    );

    const noDataContent = (
        <>
            <p className="message">По заданным критериям нет доступных дней!</p>
        </>
    );

    const renderJsx = (
        filteredData.length? weatherContent : noDataContent
    );




    return(
        <>
            <main>
                <Filters
                    applyFilters = {applyFilters}
                    isFiltered = {isFiltered}
                    discardFilters = {discardFilters}
                />
                {renderJsx}
            </main>
        </>
    )
};