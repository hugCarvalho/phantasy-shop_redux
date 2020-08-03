import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const data = useSelector((state) => state.cart);
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
    <div>
      <h3>Cart</h3>
      {}
      <h4>
        Items in your cart: {data.cart.length}.
        <p>{!inCart && "You cart is empty!"}</p>
      </h4>
      {inCart &&
        data.cart.map((item) => {
          return (
            <section>
              <p>Name: {item.name}</p>
              <p>Add days: {item.amount}</p>
              <p>Available days: {item.stock}</p>
            </section>
          );
        })}
    </div>
  );
}

export default Cart;
