import {api} from '../../api/index';
import {types} from './types';

export const weatherActions = Object.freeze({
    selectDay: (payload) => ({
        type : types.WEATHER_SELECT_DAY,
        payload
    }),

    startFetching: () => {
        return {
            type: types.WEATHER_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.WEATHER_STOP_FETCHING,
        }
    },

    fill: (payload)=>{
        return {
            type: types.WEATHER_FILL,
            payload,
        }
    },

    setFetchingError: (error)=>{
        return {
            type: types.WEATHER_SET_FETCHING_ERROR,
            error: true,
            payload: error,
        }
    },

    fetchAsync: () => async(dispatch) => {
        dispatch(weatherActions.startFetching());

        const response = await api.weather.fetch();

        if(response.status === 200){
            const results = await response.json();

            dispatch(weatherActions.fill(results.data));
        } else {
            const error = {
                status: response.status,
            };

            dispatch(weatherActions.setFetchingError(error));
        }
        dispatch(weatherActions.stopFetching());
    }
});