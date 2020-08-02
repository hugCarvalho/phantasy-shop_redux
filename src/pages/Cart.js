import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.items);
  return (
    <div>
      CART:
      {data.length ? "Show items" : "your cart is empty"}
    </div>
  );
}

export default Cart;
