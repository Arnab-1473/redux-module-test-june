import { applyMiddleware, createStore } from "redux";
import combineReducer from "../Reducers/combineReducer";
import thunk from "redux-thunk";

const store = createStore(combineReducer, applyMiddleware(thunk))

export default store;