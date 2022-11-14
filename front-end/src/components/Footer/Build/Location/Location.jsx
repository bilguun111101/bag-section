import React from "react";
import css from "../MainStyle.module.scss";

const Location = () => {
  return (
    <div className={css.mainFooter}>
      <h2>LOCATION</h2>
      <div className={css.mainFooter__content}>
        <p>Ulaanbaatar, Mongolia</p>
        <p>34 district 78 street</p>
        <p>120 apartment 35</p>
      </div>
    </div>
  );
};

export default Location;
