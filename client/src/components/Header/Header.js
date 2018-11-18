import React from "react";
import "./Header.scss";
import NavUser from "./NavUser/NavUser";
import Logo from "../Logo/Logo";
import Searchfield from "./Searchfield/Searchfield";
import { withRouter } from "react-router-dom";
import CartCount from "./CartCount/CartCount";
import NavCategory from "./NavCategory/NavCategory";

const header = props => {
  return (
    <header className="Header__container">
      <NavUser />
      <div className="Header__middleContainer">
        <Logo />
        <Searchfield />
        <CartCount />
      </div>
      <NavCategory />
    </header>
  );
};

export default withRouter(header);
