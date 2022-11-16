import React from "react";
import { Link } from "react-router-dom";
import css from "../MainStyle.module.scss";

const Menu = () => {
  return (
    <div className={css.mainFooter}>
      <h2>MENU</h2>
      <div className={css.mainFooter__content}>
        <Link to="/aboutUs">About us</Link>
        <Link to="/aboutUs">Products</Link>
        <Link to="/aboutUs">Account</Link>
        <Link to="/aboutUs">Log out</Link>
        <div className={css.mainFooter__languageSection}>
          <button>ENG</button>
          <p> / </p>
          <button>MN</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
