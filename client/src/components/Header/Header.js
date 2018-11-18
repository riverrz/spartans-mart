import React from "react";
import "./Header.scss";
import NavUser from "./NavUser/NavUser";
import Logo from "../Logo/Logo";
import Searchfield from "./Searchfield/Searchfield";
import {withRouter} from 'react-router-dom'

const header = props => {
  return (
    <header className="Header__container">
      <NavUser />
      <div className="Header__middleContainer">
        <Logo />
        <Searchfield />
      </div>
    </header>
  );
};

export default withRouter(header);
