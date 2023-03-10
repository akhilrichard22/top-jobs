import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import jobReducer from './redux/jobReducer.js'
import contactReducer from './redux/contactReducer'

const rootReducer = combineReducers({
  job: jobReducer,
  contact: contactReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer,applyMiddleware(thunk));

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
