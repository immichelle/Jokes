import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// wrap Provider outside of App, Provider will pass data from reducers to app
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers'
// rootReducer is the same as combinedReducer
//reducer keeps, changes and passes data from state to the app

//createStore is a fuction that creates a store (will decide state of the app) from all the reducers
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
