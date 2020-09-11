import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const getBasketTotal = (basket) => {
    return basket.length
      ? basket.reduce((total, item) => (total += item.price), 0)
      : 0;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Subtotal ({ShoppingBasket.length} items): */}
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
              {/* <strong>{` ${value}`}</strong> */}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparater={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
