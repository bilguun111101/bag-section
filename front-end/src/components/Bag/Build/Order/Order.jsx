import React from "react";
import clothes from "./wear.png";
import css from "./OrderStyle.module.scss";
import clx from "classnames";

const Order = () => {
  return (
    <div className={css.orderSection}>
      <div className={css.orderSection__container}>
        <div className={css.orderSection__container__imgSection}>
          <img
            src="https://www.instyle.com/thmb/Q5SV4V_sMRyRw8gCbTL1kS7qVik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/032620-jean-jackets-01-2000-4409e181297044f89514af203f462eb3.jpg"
            alt=""
          />
          <h4>Jeans jacket</h4>
        </div>
        <div className={css.orderSection__container__documentsSection}>
          <div className={css.name}>
            <h4>Jeans jacket</h4>
          </div>
          <div className={css.content}>
            <p>Black</p>
          </div>
          <div className={css.content}>
            <p>XS</p>
          </div>
          <div className={css.content}>
            <p>2</p>
          </div>
          <div className={css.content}>
            <p>USD 650.00</p>
          </div>
          <div className={css.content}>
            <button>remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
