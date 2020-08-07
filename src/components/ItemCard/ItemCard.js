import React from "react";
import "./ItemCard.scss";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/itemCartAction";
import Button from "../../Reusable/Button";

function ItemCard({
  name,
  nickname,
  img,
  items,
  id,
  price,
  amount,
  inCart,
  stock,
}) {
  const dispatch = useDispatch();

  const styleNonAvailable = () =>
    !stock ? { opacity: 0.5, cursor: "not-allowed" } : null;

  return (
    <section className="ItemCard" style={styleNonAvailable()}>
      <div className="item-details">
        <h3>{name}</h3>
        <img src={img} alt={name} width="200" height="280" />
        <h4>{nickname}</h4>
        <div className="additional-info">
          <p>Price per day: {price}€</p>
          <p>Days available: {stock}</p>
          <Button
            action={() => dispatch(addToCart(id))}
            disabled={inCart || !stock}>
            add{" "}
          </Button>
          {console.log("name", name, "stock", stock)}
          <Button
            action={() => dispatch(removeFromCart(id))}
            disabled={!inCart}>
            &times;
          </Button>
        </div>
      </div>
    </section>
  );
}
export default ItemCard;
