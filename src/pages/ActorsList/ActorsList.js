import React, { useEffect } from "react";
import "./ActorsList.scss";
import { useSelector, useDispatch } from "react-redux";
import ItemCard from "../../components/ItemCard/ItemCard";
import LoaderSpinner from "../../utils/LoaderSpinner/LoaderSpinner";
// actions
import { fetchItems } from "../../redux/actions/asyncAction";
import { populateDatabase } from "../../redux/actions/itemCartAction";

//TODO: add rating system

function ActorsList() {
  const data = useSelector((state) => state.fetchItems);
  const populatedData = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.items.length === 0) {
      dispatch(fetchItems());
    }
    //adds extra entries for shop logic
    dispatch(populateDatabase(data.items));
  }, [data.items, dispatch]);

  return (
    <main className="ActorsList">
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
          <h4>"No data"</h4>
        )}
      </div>
    </main>
  );
}

export default ActorsList;
