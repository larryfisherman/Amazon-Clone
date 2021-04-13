import React from "react";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__left__ad"
          alt=""
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />

        <div className="checkout__left__title">
          <h2>Shopping Cart</h2>
        </div>
      </div>
      <div className="checkout__right">Subtotal</div>
    </div>
  );
}

export default Checkout;
