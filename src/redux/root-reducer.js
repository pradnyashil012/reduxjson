import { combineReducers } from "redux";
import businessReducers from "./reducer";

const rootReducer = combineReducers({
  data: businessReducers,
});

export default rootReducer;
