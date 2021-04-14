import React from "react";
import { useDispatch } from "react-redux";
import { removeItems } from "../store/checkoutSlice";

function CheckoutProduct({ id, key, title, image, rating, price }) {
  const dispatch = useDispatch();
  const removeFromBasket = () => {
    dispatch(
      removeItems({
        id,
      })
    );
    console.log(id);
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__info__title">{title}</p>
        <p className="checkoutProduct__info__price">
          <small>&</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__info__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
