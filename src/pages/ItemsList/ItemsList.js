import React from "react";
import { fetchItems } from "../../redux/actions/asyncAction";
import { useSelector, useDispatch } from "react-redux";
import Item from "../../components/ItemCard/Item";
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
    <div>
      <h2>List of Items</h2>
      <section className="items-list">
        {data.loading ? (
          "LOADING..."
        ) : data.error ? (
          <h4>{data.error}</h4>
        ) : populatedData ? (
          populatedData.map((item, i) => (
            <Item
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
      {/* <Button action={() => dispatch(removeFromCart("HI"))}>boom</Button> */}
    </div>
  );
}

export default ItemsList;
