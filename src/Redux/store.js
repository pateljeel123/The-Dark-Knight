import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as matchReducer } from "./Matches/reducer";
import { reducer as watchListReducer } from "./WatchList/reducer";
import { reducer as authReducer } from "./Authentication/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({matchReducer, watchListReducer, authReducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}