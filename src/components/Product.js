import React, { useEffect } from "react";
import { useDispatch, useSele } from "react-redux";
import { pushItems } from "../store/checkoutSlice";

function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch();

  const onAddItem = (item) => {
    dispatch(pushItems({ item }));
  };

  return (
    <div className="product">
      <div className="product__Info">
        <p>{title}</p>
        <p className="product__Info__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__Info__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button
        onClick={(e) =>
          onAddItem({
            id,
            title,
            image,
            price,
            rating,
          })
        }
      >
        Add to basket
      </button>
    </div>
  );
}

export default Product;
