import React from "react";
import css from "./FooterStyle.module.scss";

const Footer = () => {
  return (
    <div className={css.footerSection}>
      <div className={css.footerSection__container}>
        <div className={css.documents}>
          <h1 className={css.documents__title}>Menu</h1>
          <div className={css.documents__content}>
            <p>About us</p>
            <p>Products</p>
            <p>Account</p>
            <p>
              <button>En</button>
              <p> / </p>
              <button>MN</button>
            </p>
          </div>
        </div>
        <div className={css.documents}>
          <h1 className={css.documents__title}>Menu</h1>
          <div className={css.documents__content}>
            <p>About us</p>
            <p>Products</p>
            <p>Account</p>
            <p>
              <button>En</button>
              <p> / </p>
              <button>MN</button>
            </p>
          </div>
        </div>
        <div className={css.documents}>
          <h1 className={css.documents__title}>Menu</h1>
          <div className={css.documents__content}>
            <p>About us</p>
            <p>Products</p>
            <p>Account</p>
            <p>
              <button>En</button>
              <p> / </p>
              <button>MN</button>
            </p>
          </div>
        </div>
        <div className={css.documents}>
          <h1 className={css.documents__title}>Menu</h1>
          <div className={css.documents__content}>
            <p>About us</p>
            <p>Products</p>
            <p>Account</p>
            <p>
              <button>En</button>
              <p> / </p>
              <button>MN</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
