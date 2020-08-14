import React, { useEffect } from "react";
import "./ItemsList.scss";
import { useSelector, useDispatch } from "react-redux";
import ItemCard from "../../components/ItemCard/ItemCard";
// actions
import { fetchItems } from "../../redux/actions/asyncAction";
import { populateDatabase } from "../../redux/actions/itemCartAction";

function ItemsList() {
  const data = useSelector((state) => state.fetchItems.items);
  const populatedData = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("FETCH");
    if (data.length === 0) dispatch(fetchItems());
    console.log("DATA ON FETCH", data.loading);
  }, [dispatch, data]);

  useEffect(() => {
    console.log("POPULATE DATABASE");
    //adds extra entries for shop logic
    dispatch(populateDatabase(data));
  }, [data, dispatch]);

  return (
    <div className="ItemsList">
      <h2>Actors List</h2>
      <section className="wrapper__items-list">
        {data.loading ? (
          // TODO: spinner
          "LOADING..."
        ) : data.error ? (
          <h4>{data.error}</h4>
        ) : populatedData ? (
          populatedData.map((item, i) => (
            <ItemCard
              key={i}
              id={item.char_id}
              name={item.name}
              img={item.img}
              nickname={item.nickname}
              items={data.items}
              price={item.price}
              amount={item.amount}
              stock={item.stock}
              inCart={item.inCart}
            />
          ))
        ) : (
          "No data"
        )}
      </section>
      {/* <button onClick={() => dispatch(fetchItems())}>Fetch Items</button>*/}
    </div>
  );
}

export default ItemsList;
