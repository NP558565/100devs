// index.html => index.js => app.js
// import Component from react
// import the App.css style
// import all components which are used
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SectionMain from './SectionMain';
import Aside from './Aside';
import Footer from './Footer';

// all the components which are going in the App (call see index.js)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header backColor="green" width="75%"></Header>
        <Header backColor="lightgreen" width="55%"></Header>
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
