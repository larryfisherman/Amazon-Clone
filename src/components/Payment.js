import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import { selectItems } from "../store/checkoutSlice";
import CheckoutProduct from "../components/CheckoutProduct";

function Payment() {
  const user = useSelector(selectUser);
  const basketItems = useSelector(selectItems);

  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__section__title">
            <h3>Address</h3>
          </div>
          <div className="payment__section__address">
            <p>{user?.email}</p>
            <p>Ulica</p>
            <p>Miejsowość, Kraj</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__section__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__section__items">
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
        </div>
      </div>
    </div>
  );
}

export default Payment;
