import { createStore, applyMiddleware } from "redux";
import countReducer from "./countReducer";
import thunk from "redux-thunk";

export default createStore(countReducer, applyMiddleware(thunk));
