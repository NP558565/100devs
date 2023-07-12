import React from "react"; //allows use of react library

const Header = (props) => {//takes props and returns a custom header
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};

const headerStyle = { //basic header styled with jsx/css
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header; //allows header to be used elsewhere in our code
