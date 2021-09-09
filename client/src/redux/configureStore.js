import { applyMiddleware, combineReducers, createStore } from 'redux';
import { medications } from './features/medications';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default createStore(combineReducers({
  medications
}), composeWithDevTools(applyMiddleware(thunk)))
