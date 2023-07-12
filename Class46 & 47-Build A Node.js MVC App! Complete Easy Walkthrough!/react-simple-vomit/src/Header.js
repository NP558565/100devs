import React, { Component } from 'react'; //allows use of react library and destructures Component from react library
import './Header.css'; //imports Header styling from css file

class Header extends Component { //old syntax for creating react Components
  render() {//method for rendering component to virtual DOM
    const style = {//creates object with styling data retrieved from props passed to the component
      width: this.props.width,
      backgroundColor: this.props.backColor
    }
    return (//returns customized header
        <header style={style} className="Header-main">
        </header>

    );
  }
}

export default Header; //allows use of Header component elsewhere


//document.querySelector("header").style.backgroundColor = "red"
