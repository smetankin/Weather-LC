import React from 'react';
import {Provider} from 'react-redux';
import {store} from "./init/store";
import {Weather} from "./components/Weather";


export const App = () => {
    console.log('store', store);
  return (
    <Provider store = {store}>
      <Weather />
    </Provider>
  )
};
