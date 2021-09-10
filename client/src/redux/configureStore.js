import { applyMiddleware, combineReducers, createStore } from "redux";
import { medicationsReducer } from "./features/medications";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { categoriesReducer } from "./features/categories";
import { applicationReducer } from './features/application';

export default createStore(
  combineReducers({
    medicationsReducer,
    categoriesReducer,
    applicationReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
