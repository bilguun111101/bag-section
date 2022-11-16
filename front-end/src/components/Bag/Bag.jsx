import React from "react";
import img from "./background.png";
import css from "./BagStyle.module.scss";
import Order from "./Build/Order/Order";
import Titles from "./Build/Titles/Titles";

const Bag = () => {
  return (
    <section className={css.bagSection}>
      <div className={css.bagSection__titleSection}>
        <h1 className={css.bagSection__titleSection__title}>SHOPPING BAG</h1>
      </div>
      <div className={css.bagSection__ordersSection}>
        <Titles />
        <div className={css.bagSection__ordersSection__orders}>
          <Order />
        </div>
        <div className={css.bagSection__ordersSection__totalSection}>
          <div className={css.bagSection__ordersSection__totalSection__total}>
            <h3>TOTAL PRICE </h3>
            <p>USD 320.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bag;
