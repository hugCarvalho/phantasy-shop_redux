import axios from "axios";

//action types
export const FETCH_ITEMS_REQUEST = "FETCH_ITEMS_REQUEST";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";

//actions creator

export const fetchItemsRequest = () => {
  console.log("loading");
  return { type: FETCH_ITEMS_REQUEST };
};

export const fetchItemsSuccess = (items) => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
  };
};

export const fetchItemsFailure = (error) => {
  return {
    type: FETCH_ITEMS_FAILURE,
    payload: error,
  };
};

//async action creator

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(fetchItemsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("fetchItems -> res", res);
        if (res.status === 200) {
          
          setInterval(() => {
            dispatch(fetchItemsSuccess(res.data));
          }, 3000);
        }
      })
      .catch((error) => {
        console.log("fetchItems -> error", error);
        dispatch(fetchItemsFailure(error.message));
      });
  };
};
