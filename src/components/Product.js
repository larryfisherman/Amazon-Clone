import React from "react";

function Product({ id, title, image, price, rating }) {
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
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
