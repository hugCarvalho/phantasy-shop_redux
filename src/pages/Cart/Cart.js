import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Cart.scss";
import Button from "../../Reusable/Button";

import {
  removeFromCart,
  increment,
  decrement,
} from "../../redux/actions/itemCartAction";
import { calculateTotal } from "../../redux/actions/calculationsActions";

function Cart() {
  const data = useSelector((state) => state.cart);
  const calculations = useSelector((state) => state.calculate);
  const dispatch = useDispatch();

  //Not really necessary, could be omitted by using directly data.products. Just for practice purposes
  const [inCart, setInCart] = React.useState(false);
  useEffect(() => {
    if (data.cart.length) {
      console.log("data");
      setInCart(true);
    } else {
      setInCart(false);
      console.log("NO data");
    }
  }, [data.cart]);

  useEffect(() => {
    dispatch(calculateTotal(data));
  }, [data, dispatch]);
  console.log("calculations >>>", calculations);
  return (
    <div className="container__cart">
      <h3>Cart</h3>
      {}
      <h4>
        Items in your cart: {data.cart.length}
        <p>{!inCart && "You cart is empty!"}</p>
      </h4>
      {inCart &&
        data.cart.map((item) => {
          return (
            //change tag of section
            <section className="items-list" key={item.char_id}>
              <ul>
                <li>Name: {item.name}</li>
                <li>ID: {item.char_id}</li>

                <li>Days: {item.amount}</li>
                <Button action={() => dispatch(increment(item.char_id))}>
                  &#43;
                </Button>
                <Button action={() => dispatch(decrement(item.char_id))}>
                  &#45;
                </Button>
                <li>Available days: {item.stock}</li>
                <li>Subtotal: {item.total}</li>
                <Button
                  action={() => dispatch(removeFromCart(item.char_id))}
                  disabled={!inCart}>
                  &times;
                </Button>
              </ul>
            </section>
          );
        })}

      {inCart && (
        <section className="container_cart">
          <h4>Tax: </h4>
          <h4>Shipping: </h4>
          <h3>Total: {calculations.total}</h3>
        </section>
      )}
    </div>
  );
}

export default Cart;
