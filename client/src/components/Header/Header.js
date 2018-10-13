import React from "react";
import "./Header.scss";
import NavUser from './NavUser/NavUser';

const header = props => {
  return (
    <header className="Header__container">
      <NavUser />
    </header>
  );
};

export default header;
