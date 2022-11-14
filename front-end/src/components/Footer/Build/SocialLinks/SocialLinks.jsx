import React from "react";
import css from "./Social.module.scss";

// logos
import fb from "./fb.png";
import instagram from "./instagram.png";

const SocialLinks = () => {
  return (
    <div className={css.socialLinksSection}>
      <h2>SOCIAL LINKS</h2>
      <div className={css.socialLinksSection__logos}>
        <img src={fb} alt="" />
        <img src={instagram} alt="" />
      </div>
    </div>
  );
};

export default SocialLinks;
