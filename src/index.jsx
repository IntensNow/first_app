import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Promise from 'promise-polyfill'; 

import { routes } from './routes';
import configureStore from './store/configureStore';

import './main.css';

// add promise polyfill for old browsers;
if (!window.Promise) {
  window.Promise = Promise;
}

injectTapEventPlugin();
const mountingPoint = document.createElement('div');
mountingPoint.className = 'app';
document.body.insertBefore(mountingPoint, document.body.firstChild);

export const store = configureStore();

render(
    (
        <Provider store={ store }>
            <Router history={ browserHistory } routes={ routes }/>
        </Provider>
    ),
    mountingPoint  
);

console.log('node env = ' + NODE_ENV);