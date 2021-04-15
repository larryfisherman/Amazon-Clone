import React from "react";
import Subtotal from "./Subtotal";
import { useSelector } from "react-redux";
import { selectItems } from "../store/checkoutSlice";
import { selectUser } from "../store/userSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout() {
  const basketItems = useSelector(selectItems);
  const user = useSelector(selectUser);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__left__ad"
          alt=""
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />

        <div>
          <h3>{user ? `Hello, ${user.email}` : null}</h3>
          <h2 className="checkout__left__title">Shopping Cart</h2>
        </div>

        {basketItems.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
