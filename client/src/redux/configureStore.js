import { applyMiddleware, combineReducers, createStore } from "redux";
import { medicationsReducer } from "./features/medications";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { categoriesReducer } from "./features/categories";

export default createStore(
  combineReducers({
    medicationsReducer,
    categoriesReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
