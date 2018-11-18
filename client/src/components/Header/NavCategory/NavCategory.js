import React from "react";
import "./NavCategory.scss";

const navCategory = props => (
  <nav className="NavCategory__container">
    <ul className="NavCategory__list">
      <li className="NavCategory__category">HOME</li>
      <li className="NavCategory__category">CLOTHING</li>
      <li className="NavCategory__category">ELECTRONICS</li>
      <li className="NavCategory__category">HEALTH & BEAUTY</li>
      <li className="NavCategory__category">WATCHES</li>
      <li className="NavCategory__category">JEWELLERY</li>
      <li className="NavCategory__category">SHOP</li>
      <li className="NavCategory__category">KIDS & GIRLS</li>
      <li className="NavCategory__category">PAGES</li>
    </ul>
  </nav>
);

export default navCategory;
