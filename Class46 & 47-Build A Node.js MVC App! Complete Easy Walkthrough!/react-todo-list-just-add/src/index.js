import React from 'react';//allows access to react library
import ReactDOM from 'react-dom'; //allows use of the virtual dom
import './index.css'; //allows access to the index styling css file
import App from './App'; //allows access to the App object
import reportWebVitals from './reportWebVitals'; //allows access to analytics tool

ReactDOM.render(//renders our app using the virtual DOM
  //strict mode helps check our App for errors and warnings
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')//attaches our App to the existing root element
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
