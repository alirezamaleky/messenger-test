import { combineReducers, createStore } from "redux";
import { themeReducer } from "./theme/reducers";

const reducers = {
  theme: themeReducer,
};

export type ReducersType = {
  [key in keyof typeof reducers]: ReturnType<typeof reducers[key]>;
};

const store = createStore(combineReducers(reducers));

export default store;
