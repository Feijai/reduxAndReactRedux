import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";
import thunk from "redux-thunk";

const allReducer = combineReducers({
  he: countReducer,
  ren: personReducer,
});
export default createStore(allReducer, applyMiddleware(thunk));
