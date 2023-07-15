import React from "react";

// component with prop - definition functional based
// headerStyle for styling the header
// title comes as name from the calling file (=App.js)
const Header = (props) => {
  return (
    <header>
      <h1 style={headerStyle}>{props.title}</h1>
    </header>
  );
};

// camelCasing the the fields means this is JSX-code
const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

// export Header to use somewhere else
export default Header;
