import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { selectItems, getBasketTotal } from "../store/checkoutSlice";

function Subtotal() {
  const basketItems = useSelector(selectItems);
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basketItems?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basketItems)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout{" "}
      </button>
    </div>
  );
}

export default Subtotal;
