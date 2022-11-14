import React from "react";
import css from "../MainStyle.module.scss";

const Newsletter = () => {
  return (
    <div className={css.mainFooter}>
      <h2>NEWSLETTER</h2>
      <div className={css.mainFooter__content}>
        <p>Carefully curated online design store</p>
        <p>Featuring simple</p>
        <p>Beautiful and thoughtfully designed products</p>
      </div>
    </div>
  );
};

export default Newsletter;
