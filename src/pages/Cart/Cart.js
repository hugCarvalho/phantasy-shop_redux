import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Cart.scss";
import Button from "../../Reusable/Button";
import { removeFromCart } from "../../redux/actions/cartAction";

const temp = {
  name: "First Person",
  amount: 1,
  price: 100,
};

function Cart() {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //Not really necessary, could be omitted by using directly data.products. Just for practice purposes
  const [inCart, setInCart] = React.useState(false);

  React.useEffect(() => {
    if (data.cart.length) {
      console.log("data");
      setInCart(true);
    } else {
      setInCart(false);
      console.log("NO data");
    }
  }, [data.cart]);

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
            <section className="items-list" key={item.id}>
              <ul>
                <li>Name: {item.name}</li>
                <li>ID: {item.char_id}</li>

                <li>Days: {item.amount}</li>
                <button>+</button>
                <button>-</button>
                <li>Available days: {item.stock}</li>
                <li>Subtotal: {item.amount * item.price}</li>

                <Button
                  action={() => dispatch(removeFromCart(item.char_id))}
                  disabled={!inCart}>
                  &times;
                </Button>
              </ul>
            </section>
          );
        })}
      <section className="container_cart">Total</section>

      <article>
        <ul>
          <li>Name: {temp.name}</li>
          <li>Days: {temp.amount}</li>
          <button>+</button>
          <button>-</button>
          {/* <li>Available days: {item.stock}</li> */}
          <li>Subtotal: {temp.amount * temp.price}</li>
          <li>Remove</li>
        </ul>
      </article>
    </div>
  );
}

export default Cart;
