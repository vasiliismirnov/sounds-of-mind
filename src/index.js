import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import { track } from './initialData';

const initialState = track;
const store = createStore(rootReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();