import React from "react";
import "./Item.scss";

function Item({ name, nickname, img }) {
  return (
    <section className="container__item-details">
      <div className="item-details">
        <h4>{name}</h4>
        <img src={img} alt={name} width="200" height="280" />
        <h5>{nickname}</h5>
        <div className="additional-info">
          <p>Price per day: 100€</p>
          <p>Days available: unavailable</p>
          <p>Days available: 100</p>

          <button>add to cart</button>
        </div>
      </div>
    </section>
  );
}

export default Item;
