import React from "react";
import "./ItemCard.scss";
import { useDispatch } from "react-redux";
import Button from "../../Reusable/Button";
//actions
import { addToCart, removeFromCart } from "../../redux/actions/itemCartAction";

//TODO: in cart and ItemCart -> DRY
//TODO: move fns?

const styleNonAvailable = (stock) =>
  !stock ? { opacity: 0.5, cursor: "not-allowed" } : null;

const formatPrice = (price) => {
  const arr = [...String(price)];
  if (arr.length > 3) {
    arr.splice(arr.length - 3, 0, ",");
    return arr.join("");
  }
  return price;
};

function ItemCard({ name, nickname, img, items, id, price, amount, inCart, stock }) {
  const dispatch = useDispatch();
  const [hover, setHover] = React.useState(false);

  return (
    <section className="ItemCard" style={styleNonAvailable(stock)}>
      <div
        className="item-details"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h3>{name}</h3>

        {/* IMG */}
        <div className="container__img">
          <img src={img} alt={name} width="100%" height="100%" />
          <span
            className={[
              !stock && hover ? "unavailable--show" : "unavailable--hide",
              "",
              "unavailable--init",
            ].join(" ")}
          >
            unavailable
          </span>
        </div>

        {/* INFO */}
        <h4>{nickname}</h4>

        <div className="additional-info more">
          <p>Price per day: €{formatPrice(price)}</p>
          <p>Days available: {stock}</p>

          {/* ADD & REMOVE BUTTONS */}
          <Button
            className={inCart || !stock ? "button-unavailable" : null}
            action={() => dispatch(addToCart(id))}
            disabled={inCart || !stock}
          >
            add{" "}
          </Button>
          <Button
            className={!inCart || !stock ? "button-unavailable" : null}
            action={() => dispatch(removeFromCart(id))}
            disabled={!inCart}
          >
            remove
            {/* &times; */}
          </Button>
        </div>
      </div>
    </section>
  );
}
export default ItemCard;
