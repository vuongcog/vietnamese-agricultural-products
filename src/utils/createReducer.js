import { combineSlices } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineSlices({ ...injectedReducers });

  //   const mergeWithRouterState = connectRouter(history);
  //   return mergeWithRouterState(rootReducer);
  return rootReducer;
}
