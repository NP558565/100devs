// index.html => index.js => app.js => header.js
// import Component from react for using below
// import the Header.css for styling
import React, { Component } from 'react';
import './Header.css';

// component with prop - definition class based
// props: takes the width and backColor from the calling App.js
// the style will used to style the header
class Header extends Component {
  render() {
    const style = {
      width: this.props.width,
      backgroundColor: this.props.backColor
    }
    return (
        <header style={style} className="Header-main">
        </header>

    );
  }
}

export default Header;


//document.querySelector("header").style.backgroundColor = "red"
