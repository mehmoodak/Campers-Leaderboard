import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import AppContainer from './containers/AppContainer';
import store from './redux/store';

render(
    <Provider store={store}>
      <AppContainer/>
    </Provider>,
    document.getElementById('root')
);