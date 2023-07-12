import React from 'react'; //allows access to react library
import ReactDOM from 'react-dom';//allows use of virtual dom
import './index.css';//gives access to index styling file
import App from './App';//gives access to react app called App
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root')); //attaches App to root element and renders it
registerServiceWorker();
