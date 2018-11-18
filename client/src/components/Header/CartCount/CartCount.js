import React, { Component } from "react";
import "./CartCount.scss";

class CartBox extends Component {
  render() {
    return (
      <div className="CartBox__container">
        <div className="CartBox__left">
          <i className="fas fa-shopping-cart" />
        </div>
        <div className="CartBox__right">
          0 {/* To be replaced by items in cart */}
        </div>
      </div>
    );
  }
}

export default CartBox;
