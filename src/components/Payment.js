import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../store/userSlice";
import { selectItems, cleanItems } from "../store/checkoutSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getBasketTotal } from "../store/checkoutSlice";
import CurrencyFormat from "react-currency-format";
import axios from "../axios/axios";
import { useHistory } from "react-router-dom";
import { db } from "../firebase/firebase";

function Payment() {
  const user = useSelector(selectUser);
  const basketItems = useSelector(selectItems);
  const dispatch = useDispatch();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  //generate stripe secret to charge a customer
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basketItems) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basketItems]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //payment intent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basketItems,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace("/orders");
      });
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basketItems?.length} items)</Link>
        </h1>
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
            {basketItems?.map((item) => (
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
        <div className="payment__section">
          <div className="payment__section__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__section__details">
            <form onSubmit={handleSubmit}>
              <CardElement
                onChange={(e) => {
                  setDisabled(e.empty);
                  setError(e.error ? e.error.message : null);
                }}
              />
              <div className="payment__section__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basketItems)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing..</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
