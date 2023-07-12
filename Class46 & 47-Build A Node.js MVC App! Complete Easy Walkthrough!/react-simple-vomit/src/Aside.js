import React, { Component } from 'react'; //allows use of react library
import './Aside.css';//allows access to Aside styling css

class Aside extends Component { //old syntax for creating components
  render() {//method for rendering component to virtual dom
    return (
        <aside className="Aside">
        </aside>

    );
  }
}

export default Aside; //allows use of this code outside of this file
