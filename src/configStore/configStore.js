/* eslint-disable no-unused-vars */
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import watcher from "../modules/Test/saga";
import createSagaMiddleware from "redux-saga";
import counterReducer, { increment } from "../modules/Test/reducer";
import counterReducer1 from "../modules/Test/reducer1";
import createReducer from "../utils/createReducer";

const rootReducer = {
  counterReducer,
  counterReducer1,
};

export const sagaMiddleware = createSagaMiddleware();
const makeStore = () => {
  const store = configureStore({
    reducer: createReducer(rootReducer),

    middleware: (getDefaultMiddleware) => {
      return [sagaMiddleware, ...getDefaultMiddleware()];
    },
  });
  store.injectedReducers = {};
  store.injectedSagas = {};
  store.runSaga = sagaMiddleware.run;

  store.runSaga(watcher);
  return store;
};

const store = makeStore();
export default store;
