import React, { useEffect } from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Reusable/Button";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import {
  removeFromCart,
  increment,
  decrement,
} from "../../redux/actions/itemCartAction";
import { calculateTotal } from "../../redux/actions/calculationsActions";

// toast.configure();
//make reducer
const formatPrice = (price) => {
  const arr = [...String(price)];
  if (arr.length > 3) {
    arr.splice(arr.length - 3, 0, ",");

    return arr.join("");
  }
  return price;
};

const notifyUser = () => {
  toast.success(
    "Do some logic here, IS LOGGED IN ? conclude buy : ask if already user and redirect to the login or register page",
    { position: toast.POSITION.TOP_CENTER, autoclose: 4000 }
  );
};

function Cart() {
  const data = useSelector((state) => state.cart);
  const calculations = useSelector((state) => state.calculate);
  const dispatch = useDispatch();

  //Not really necessary, could be omitted by using directly data.products. Just for practice purposes
  const [inCart, setInCart] = React.useState(false);
  useEffect(() => {
    if (data.cart.length) {
      // console.log("data");
      setInCart(true);
    } else {
      setInCart(false);
      // console.log("NO data");
    }
  }, [data.cart]);

  useEffect(() => {
    dispatch(calculateTotal(data));
  }, [data, dispatch]);
  // console.log("calculations >>>", calculations);
  return (
    <div className="Cart">
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
            <section className="wrapper__items-list" key={item.char_id}>
              <div>
                <img src={item.img} alt={item.name} />
              </div>
              <div>
                <ul>
                  <li>{item.name}</li>
                  <li>Price per day: {formatPrice(item.price)}€</li>
                  <div className="wrapper__days">
                    <li>Available days: {item.stock}</li>
                    <li>Booked days: {item.amount}</li>
                    <Button
                      className={
                        item.stock === item.amount ? "button-unavailable" : null
                      }
                      disabled={item.stock === item.amount}
                      action={() =>
                        dispatch(
                          increment(item.char_id, item.amount, item.stock)
                        )
                      }>
                      &#43;
                    </Button>
                    <Button
                      className={item.amount <= 1 ? "button-unavailable" : null}
                      disabled={item.amount <= 1}
                      action={() => dispatch(decrement(item.char_id))}>
                      &#45;
                    </Button>
                  </div>
                  <Button action={() => dispatch(removeFromCart(item.char_id))}>
                    remove
                  </Button>
                  <li>Subtotal: {formatPrice(item.total)} €</li>
                </ul>
              </div>
            </section>
          );
        })}

      {inCart && (
        <section className="container_cart">
          {/* <h4>Tax: </h4>
            <h4>Extras: select... </h4> */}
          <h3>Total: {formatPrice(calculations.total)} €</h3>
          <button>Buy</button>
          <button onClick={() => notifyUser()}> buy </button>
        </section>
      )}
    </div>
  );
}

export default Cart;
