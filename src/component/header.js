import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header-title">{props.title}</h1>
        <h2 className="header-subtitle">{props.subtitle}</h2>
      </div>
    </div>
  );
};

export default Header;
