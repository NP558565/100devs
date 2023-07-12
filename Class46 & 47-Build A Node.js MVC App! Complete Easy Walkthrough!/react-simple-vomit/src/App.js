import React, { Component } from 'react'; //allows use of react and destructures Component from react library
import './App.css'; //allows access to App.css
import Header from './Header'; //allows acces to Header component
import SectionMain from './SectionMain'; //allows access to SectionMain component
import Aside from './Aside'; //allows access to Aside component
import Footer from './Footer'; //allows access to Footer component

class App extends Component {//old syntax for creating a react app

  render() {//method used to render App to virtual DOM
    return (//returns App with its components
      <div className="App">
        <Header backColor="green" width="50%"></Header>
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App; //exports App to be called elsewhere
