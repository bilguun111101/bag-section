import React from "react";
import Menu from "./Build/Menu/Menu";
import Location from "./Build/Location/Location";
import Newsletter from "./Build/Newsletter/Newsletter";
import SocialLinks from "./Build/SocialLinks/SocialLinks";
import css from "./FooterStyle.module.scss";

const Footer = () => {
  return (
    <div className={css.footerSection}>
      <div className={css.footerSection__container}>
        <Menu />
        <Newsletter />
        <Location />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
