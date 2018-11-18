import React from "react";
import "./Logo.scss";
import { Link } from "react-router-dom";

const Logo = props => {
  return (
    <div className="Logo__container">
      <Link to="/">
        <img
          src="http://www.ckthemes.com/flipmart/wp-content/uploads/2017/04/logo.png"
          alt="Spartans Mart"
          className="Logo__image"
        />
      </Link>
    </div>
  );
};
export default Logo;
