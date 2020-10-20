import {types} from './types';

const initialState = {
    data: [],
    selectedDay: null,
    isFetching: false,
    error: null,
};

export const weatherReducer = (state = initialState, {type, payload}) => {
    console.log('payload', payload);
    switch (type) {
        case types.WEATHER_START_FETCHING:
            return{
                ...state,
                isFetching: true,
            };
        case types.WEATHER_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
            };
        case types.WEATHER_SET_FETCHING_ERROR:
            return {
                ...state,
                error: payload,
                data: null,
            };
        case types.WEATHER_FILL:
            return {
                ...state,
                data: payload,
                selectedDay: payload.length? payload[0]: null,
                error: null,
            };
        case types.WEATHER_SELECT_DAY:
            return{
                ...state,
                selectedDay: payload
            };
        default:
            return state
    }
};