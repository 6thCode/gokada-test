import React from 'react';
import Routes from './routes'
import store from './src/redux/store'
import { Provider } from 'react-redux'

const gokadaTest = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default gokadaTest