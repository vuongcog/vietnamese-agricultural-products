import { combineSlices, configureStore } from "@reduxjs/toolkit";
// import { quotesApiSlice } from "../features/quotes/quotesApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
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
      return [
        sagaMiddleware,
        // quotesApiSlice.middleware,
        ...getDefaultMiddleware(),
      ];
    },
  });
  store.injectedReducers = {};
  store.injectedSagas = {};
  store.runSaga = sagaMiddleware.run;
  //   setupListeners(store.dispatch);
  store.runSaga(watcher);
  return store;
};

const store = makeStore();
export default store;
