import React, { useEffect } from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Reusable/Button";
import { toast } from "react-toastify";
//actions
import {
  removeFromCart,
  increment,
  decrement,
} from "../../redux/actions/itemCartAction";
import { calculateTotal } from "../../redux/actions/calculationsActions";

// const arr = [
//   {
//     name: "Rocky Balboa",
//     img: "",
//     price: 2000,
//     stock: 3,
//     amount: 1,
//     total: 3000,
//   },
//   {
//     name: "Rocky Balboa",
//     img: "",
//     price: 2000,
//     stock: 3,
//     amount: 1,
//     total: 3000,
//   },
// ];

// TODO: in cart and ItemCart -> DRY
const formatPrice = (price) => {
  const arr = [...String(price)];
  if (arr.length > 3) {
    arr.splice(arr.length - 3, 0, ",");
    return arr.join("");
  }
  return price;
};

//Toast
const notifyUser = () => {
  toast.success("This function is still not implemented.", {
    position: toast.POSITION.TOP_CENTER,
    autoclose: 3000,
  });
};

function Cart() {
  const data = useSelector((state) => state.cart);
  const calculations = useSelector((state) => state.calculate);
  const dispatch = useDispatch();

  //Not really necessary, could be omitted by using directly data.products. Just for practice purposes
  const [inCart, setInCart] = React.useState(false);
  useEffect(() => {
    if (data.cart.length) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [data.cart]);

  useEffect(() => {
    dispatch(calculateTotal(data));
  }, [data, dispatch]);

  return (
    <div className="Cart">
      <div className="number-items">
        <h2>Items in your cart: {data.cart.length}</h2>
        <h3>{!inCart && "Your cart is empty! :-("}</h3>
      </div>

      {inCart && (
        <section className="container__cart-list">
          <main className="container__actors-data">
            {data.cart.map((item) => {
              return (
                // LEFT SIDE
                <div key={item.char_id} className="wrapper__actors-data">
                  <div className="details">
                    <section className="details-left">
                      {/* <div className="pic"> */}
                      <img src={item.img} alt={item.name}></img>
                      {/* </div> */}
                      <div className="info">
                        <div className="text">
                          <p>{item.name}</p>
                          <p>AKA: {item.nickname}</p>
                          <p>Price per day: {formatPrice(item.price)}€</p>
                        </div>
                        <div className="buttons">
                          <Button
                            action={() =>
                              dispatch(removeFromCart(item.char_id))
                            }>
                            remove
                          </Button>
                          {/* <button>wishlist</button> */}
                        </div>
                      </div>
                    </section>
                    <section className="details-right">
                      <div className="stock-amount">
                        <p>
                          Available days:
                          <span> {item.stock}</span>{" "}
                        </p>
                        <p>
                          Booked days:
                          <span className="booked-days">{item.amount}</span>
                        </p>
                        <div className="buttons">
                          <Button
                            className={
                              item.amount <= 1 ? "button-unavailable" : null
                            }
                            disabled={item.amount <= 1}
                            action={() => dispatch(decrement(item.char_id))}>
                            &#45;
                          </Button>
                          <Button
                            className={
                              item.stock === item.amount
                                ? "button-unavailable"
                                : null
                            }
                            disabled={item.stock === item.amount}
                            action={() =>
                              dispatch(
                                increment(item.char_id, item.amount, item.stock)
                              )
                            }>
                            &#43;
                          </Button>
                        </div>
                      </div>
                      <div className="subtotal">
                        <span>Subtotal: </span>{" "}
                        <span>{formatPrice(item.total)}€</span>
                      </div>
                    </section>
                  </div>
                  <hr></hr>

                  {/* <section className="quote">Quote</section> */}
                </div>
              );
            })}
          </main>

          {/* RIGHT */}
          {inCart && (
            <div className="container__cart-total">
              <section className="total">
                <h3>Total</h3>
                <p>
                  <span>Subtotal </span>
                  <span>{formatPrice(calculations.total)}€</span>
                </p>
                <p>
                  <span>Travel fees</span>
                  <span>free</span>
                </p>
                <hr></hr>
                <h4>
                  <p>
                    <span>
                      Total <small>(VAT included)</small>
                    </span>
                    <span>{formatPrice(calculations.total)}€</span>
                  </p>
                </h4>
                <Button action={notifyUser}>Checkout</Button>
              </section>
              {/* <section className="voucher">Add a voucher</section> */}
            </div>
          )}
        </section>
      )}
      {/* EXTRAS */}
      {/* <div className="extra-info">Extra Info</div> */}
    </div>
  );
}

export default Cart;
