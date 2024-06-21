import { combineSlices } from "@reduxjs/toolkit";

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineSlices({ ...injectedReducers });

  //   const mergeWithRouterState = connectRouter(history);
  //   return mergeWithRouterState(rootReducer);
  return rootReducer;
}
