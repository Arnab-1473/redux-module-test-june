import { combineReducers } from "redux";
import postReducer from "./postReducer";
import detailsReducer from "./detailsReducer";

const combineReducer = combineReducers({
    posts : postReducer,
    details : detailsReducer
})

export default combineReducer