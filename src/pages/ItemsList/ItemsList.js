import React, { useEffect } from "react";
import "./ItemsList.scss";
import { useSelector, useDispatch } from "react-redux";
import ItemCard from "../../components/ItemCard/ItemCard";
// actions
import { fetchItems } from "../../redux/actions/asyncAction";
import { populateDatabase } from "../../redux/actions/itemCartAction";
import LoaderSpinner from "../../utils/LoaderSpinner/LoaderSpinner";

function ItemsList() {
  const data = useSelector((state) => state.fetchItems);
  const populatedData = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("FETCH");
    if (data.items.length === 0) dispatch(fetchItems());
  }, [dispatch, data.items]);

  useEffect(() => {
    // console.log("POPULATE DATABASE");
    //adds extra entries for shop logic
    dispatch(populateDatabase(data.items));
  }, [data.items, dispatch]);

  return (
    <main className="ItemsList">
      <h1>Actors List</h1>
      <div className="wrapper__items-list">
        {data.loading ? (
          <LoaderSpinner />
        ) : data.error ? (
          <h4>{data.error}</h4>
        ) : populatedData ? (
          populatedData.map((item, i) => {
            return (
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
            );
          })
        ) : (
          "No data"
        )}
      </div>
      {/* <button onClick={() => dispatch(fetchItems())}>Fetch Items</button>*/}
    </main>
  );
}

export default ItemsList;
