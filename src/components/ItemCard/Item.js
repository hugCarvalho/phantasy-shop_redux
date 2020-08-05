import React from "react";
import "./Item.scss";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/itemCartAction";
import Button from "../../Reusable/Button";

function Item({
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

  return (
    <section className="container__item-details">
      <div className="item-details">
        <h4>{name}</h4>
        <img src={img} alt={name} width="200" height="280" />
        <h5>{nickname}</h5>
        <div className="additional-info">
          <p>Price per day: {price}€</p>
          <p>Days available: {stock}</p>
          <Button action={() => dispatch(addToCart(id))} disabled={inCart}>
            add{" "}
          </Button>
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
export default Item;
