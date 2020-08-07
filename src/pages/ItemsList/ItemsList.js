import React from "react";
import { fetchItems } from "../../redux/actions/asyncAction";
import { useSelector, useDispatch } from "react-redux";
import ItemCard from "../../components/ItemCard/ItemCard";
import "./ItemsList.scss";
// actions
import {
  populateDatabase,
  // removeFromCart,
} from "../../redux/actions/itemCartAction";
// import Button from "../../Reusable/Button";

function ItemsList() {
  const data = useSelector((state) => state.fetchItems);
  const populatedData = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  // console.log("POPdata :>> ", populatedData);

  React.useEffect(() => {
    console.log("POPULATE DATABASE");
    dispatch(populateDatabase(data.items));
  }, [data, dispatch]);

  return (
    <div className="ItemsList">
      <h2>Actors List</h2>
      <section className="wrapper__items-list">
        {data.loading ? (
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
      <button onClick={() => dispatch(fetchItems())}>Fetch Items</button>
      <p>
        Will load automatically in the future. The button behaviour is only to
        prevent unnecessary http requests to the API during this stage of
        production{" "}
      </p>
      {/* <Button action={() => dispatch(removeFromCart("HI"))}>boom</Button> */}
    </div>
  );
}

export default ItemsList;
