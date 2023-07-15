import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//takes the App-component and rendes it to the DOM in the div with the id root (from index.html)
// the App gets rendered to the actual DOM of the browser
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
