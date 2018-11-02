import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/bootstrap.minty.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import uuidv4 from 'uuid/v4';

const initialState = {
    notes: {
        standard: [
          { id: uuidv4(), value: 'A0'},
          { id: uuidv4(), value: 'A0'},
          { id: uuidv4(), value: 'B0'},
          { id: uuidv4(), value: 'D1'},
          { id: uuidv4(), value: 'F1'},
          { id: uuidv4(), value: 'F1'},
          { id: uuidv4(), value: 'E1'},
          { id: uuidv4(), value: 'F1'},
          { id: uuidv4(), value: 'E1'},
          { id: uuidv4(), value: 'C1'},
          { id: uuidv4(), value: 'F1'},
          { id: uuidv4(), value: 'C1'},
          { id: uuidv4(), value: 'B0'},
          { id: uuidv4(), value: 'D1'},
          { id: uuidv4(), value: 'B0'},
          { id: uuidv4(), value: 'D1'}
        ],
      etnic: [
        { id: uuidv4(), value: 'G1'},
        { id: uuidv4(), value: 'A10'},
        { id: uuidv4(), value: 'A10'},
        { id: uuidv4(), value: 'A10'},
        { id: uuidv4(), value: 'A1'},
        { id: uuidv4(), value: 'A10'},
        { id: uuidv4(), value: 'A10'},
        { id: uuidv4(), value: 'A10'},
        { id: uuidv4(), value: 'D2'},
        { id: uuidv4(), value: 'A10'},
        { id: uuidv4(), value: 'A10'},
        { id: uuidv4(), value: 'A10'},
        { id: uuidv4(), value: 'C#2'},
        { id: uuidv4(), value: 'A10'},
        { id: uuidv4(), value: 'A#1'},
        { id: uuidv4(), value: 'A10'},
      ],
    },
    barSize: 4,
    playback: {
        sequence: null,
        isPlaying: false
    }
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
