import { createStore, combineReducers } from "redux";
import { mainReducer } from "./reducers/main";

export const rootReducer = combineReducers({
  main: mainReducer
});

export const mainStore = createStore(rootReducer);
