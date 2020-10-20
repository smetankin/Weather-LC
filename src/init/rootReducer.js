import {combineReducers} from 'redux';

import {weatherReducer as weather} from '../components/Weather/reducer'

export const rootReducer = combineReducers({
    weather,
});
