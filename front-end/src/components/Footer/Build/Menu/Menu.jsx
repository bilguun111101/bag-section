import React from "react";
import css from "../MainStyle.module.scss";

const Menu = () => {
  return (
    <div className={css.mainFooter}>
      <h2>MENU</h2>
      <div className={css.mainFooter__content}>
        <p>About us</p>
        <p>Products</p>
        <p>Account</p>
        <p>Log out</p>
        <p>ENG / MN</p>
      </div>
    </div>
  );
};

export default Menu;
