import React from "react";
import "./NavUser.scss";
import { Link } from "react-router-dom";

const NavUser = props => {
  return (
    <nav className="NavUser__container">
      <ul className="NavUser__list">
        <li className="NavUser__list__item">Rupee, ₹</li>
        <li className="NavUser__list__item">
          <Link className="NavUser__list__link" to="/user/account">
            <i className="fas fa-user" />
            Account
          </Link>
        </li>
        <li className="NavUser__list__item">
          <Link className="NavUser__list__link" to="/user/wishlist">
            <i className="fas fa-heart" />
            Wishlist
          </Link>
        </li>
        <li className="NavUser__list__item">
          <Link className="NavUser__list__link" to="/user/cart">
            <i className="fas fa-shopping-cart" />
            My Cart
          </Link>
        </li>
        <li className="NavUser__list__item">
          <Link className="NavUser__list__link" to="/user/checkout">
            <i className="fas fa-check" />
            Checkout
          </Link>
        </li>
        <li className="NavUser__list__item">
          <Link className="NavUser__list__link" to="/user/login">
            <i className="fas fa-user-lock" />
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavUser;
