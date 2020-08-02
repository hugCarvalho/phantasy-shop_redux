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
      .get("https://www.breakingbadapi.com/api/characters?limit=10")
      .then((res) => {
        console.log("fetchItems -> res", res);
        if (res.status === 200) {
          
         
            dispatch(fetchItemsSuccess(res.data));
         
        }
      })
      .catch((error) => {
        console.log("fetchItems -> error", error);
        dispatch(fetchItemsFailure(error.message));
      });
  };
};
