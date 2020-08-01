import React from "react";
import { fetchItems } from "../redux/actions/itemAction";
import { useSelector, useDispatch } from "react-redux";

function ItemList() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("data :>> ", data);
  return (
    <div>
      <h2>List of Items</h2>
      <section className="items-list">
        {data.loading ? (
          "LOADING..."
        ) : data.error ? (
          <h4>{data.error}</h4>
        ) : data.items.length ? (
          data.items.map((item, i) => <p key={i}> {item.name}</p>)
        ) : (
          "No data"
        )}
      </section>
      <button onClick={() => dispatch(fetchItems())}>Fetch Items</button>
    </div>
  );
}

export default ItemList;
