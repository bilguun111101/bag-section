import React from "react";
import clothes from "./wear.png";
import css from "./OrderStyle.module.scss";

const Order = () => {
  return (
    <div className={css.orderSection}>
      <div className={css.orderSection__imageSection}>
        <img
          src="https://www.instyle.com/thmb/Q5SV4V_sMRyRw8gCbTL1kS7qVik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/032620-jean-jackets-01-2000-4409e181297044f89514af203f462eb3.jpg"
          alt=""
        />
        <h4>Jeans jacket</h4>
      </div>
    </div>
  );
};

export default Order;
