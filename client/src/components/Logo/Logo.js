import React from "react";
import "./Logo.scss";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Logo = props => {
  return (
    <div className="Logo__container">
      <Link to="/">
        <img src={logo} alt="Logo" className="Logo__image" />
      </Link>
    </div>
  );
};
export default Logo;
