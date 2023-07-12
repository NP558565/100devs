import React from 'react'; //allows use of React library
import ReactDOM from 'react-dom'; //allows use of virtual DOM
import App from './App'; //allows access to our App

it('renders without crashing', () => {
  const div = document.createElement('div'); //creates a div element in the document
  ReactDOM.render(<App />, div);//attaches our App to the created div element
});
