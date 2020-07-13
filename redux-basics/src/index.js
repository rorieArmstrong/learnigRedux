import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'; 

// Store


// Action Increment
const increment = () => {
  return {
    type: 'increment'
  }
}

const decrement = () => {
  return {
    type: 'decrement'
  }
}

// Reducer
const counter = (state = 0, action) => {
  switch(action.increment) {
    case 'increment':
      return state++;
    case 'decrement':
      return state--;
  }
}

let store = createStore(counter);
store.subscribe(() => {console.log(store.getState())})

// Dispatch
store.dispatch(increment())
store.dispatch(increment())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
