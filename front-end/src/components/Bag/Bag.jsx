import React from "react";
import img from "./background.png";
import css from "./BagStyle.module.scss";
import Order from "./Build/Order/Order";

const Bag = () => {
  return (
    <section className={css.bagSection}>
      <div className={css.bagSection__titleSection}>
        <h1 className={css.bagSection__titleSection__title}>SHOPPING BAG</h1>
      </div>
      <div className={css.bagSection__ordersSection}>
        <div className={css.bagSection__ordersSection__titles}>
          <h4>Products</h4>
          <h4>Color</h4>
          <h4>Size</h4>
          <h4>QTY</h4>
          <h4>Price</h4>
          <h4>Action</h4>
        </div>
        <div className={css.bagSection__ordersSection__orders}>
          <Order />
        </div>
      </div>
    </section>
  );
};

export default Bag;
