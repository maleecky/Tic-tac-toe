import { createStore, combineReducers } from "redux";

import {
  difficultLevelToggle,
  saveToggleReducer,
  themeToggle,
  playerMode,
} from "../reducers/Reducer";
const multipleReducers = combineReducers({
  saveToggleReducer: saveToggleReducer,
  difficultLevelToggle: difficultLevelToggle,
  themeToggle: themeToggle,
  playerMode: playerMode,
});
export const store = createStore(multipleReducers);
