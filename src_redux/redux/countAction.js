import { INCREMENT, DECREMENT } from "./constant";
import thunk from "redux-thunk";

export const createIncrementAction = (data) => ({
  type: INCREMENT,
  data: parseInt(data),
});
export const createDecrementAction = (data) => ({
  type: DECREMENT,
  data: parseInt(data),
});

export const createDecrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};
