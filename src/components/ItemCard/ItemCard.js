import React from "react";
import "./ItemCard.scss";
import { useDispatch } from "react-redux";
import Button from "../../Reusable/Button";
//actions
import { addToCart, removeFromCart } from "../../redux/actions/itemCartAction";

const styleNonAvailable = (stock) =>
  !stock ? { opacity: 0.5, cursor: "not-allowed" } : null;

function ItemCard({ name, nickname, img, items, id, price, amount, inCart, stock }) {
  const dispatch = useDispatch();
  const [inHover, setHover] = React.useState(false);

  {
    /* <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      ></button> */
  }

  // TODO: in cart and ItemCart -> DRY
  const formatPrice = (price) => {
    // console.log("format price");
    const arr = [...String(price)];
    if (arr.length > 3) {
      arr.splice(arr.length - 3, 0, ",");
      return arr.join("");
    }
    return price;
  };

  const showUnavailableMsg = () => {
    setHover(true);
  };

  React.useEffect(() => {
    console.log("inHover", inHover);
  }, [inHover]);

  return (
    <section className="ItemCard" style={styleNonAvailable(stock)}>
      <div
        className="item-details"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        <h3>{name}</h3>
        <div className="container__img">
          <img src={img} alt={name} width="100%" height="100%" />
          <span
            className={[
              !stock && inHover ? "unavailable-show" : "unavailable-hide",
              "",
              "init",
            ].join(" ")}>
            unavailable
          </span>
        </div>
        <h4>{nickname}</h4>
        <div className="additional-info more">
          <p>Price per day: €{formatPrice(price)}</p>
          <p>Days available: {stock}</p>
          <Button
            className={inCart || !stock ? "button-unavailable" : null}
            action={() => dispatch(addToCart(id))}
            disabled={inCart || !stock}>
            add{" "}
          </Button>
          {/* {console.log("name", name, "stock", stock)} */}
          <Button
            className={!inCart || !stock ? "button-unavailable" : null}
            action={() => dispatch(removeFromCart(id))}
            disabled={!inCart}>
            remove
            {/* &times; */}
          </Button>
        </div>
      </div>
    </section>
  );
}
export default ItemCard;
