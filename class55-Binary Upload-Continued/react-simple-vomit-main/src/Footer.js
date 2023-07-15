// index.html => index.js => app.js => footer.js
// import Component from react for using below
// import the Footer.css for styling
import React, { Component } from 'react';
import './Footer.css';

// using JSX className in the footer
// with this className - there is some css-class-styling possible
class Footer extends Component {
  render() {
    return (
        <footer className="Footer">
        </footer>

    );
  }
}

export default Footer;
