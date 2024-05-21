import { combineSlices, configureStore } from "@reduxjs/toolkit";
// import { quotesApiSlice } from "../features/quotes/quotesApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import watcher from "../modules/Test/saga";
import createSagaMiddleware from "redux-saga";
import counterReducer, { increment } from "../modules/Test/reducer";
import counterReducer1 from "../modules/Test/reducer1";
const rootReducer = combineSlices({ counterReducer, counterReducer1 });
const sagaMiddleware = createSagaMiddleware();

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return [
        sagaMiddleware,
        // quotesApiSlice.middleware,
        ...getDefaultMiddleware(),
      ];
    },
  });
  //   setupListeners(store.dispatch);
  sagaMiddleware.run(watcher);
  return store;
};

const store = makeStore();
store.injectedReducers = {}; // Reducer registry
store.injectedSagas = {};
store.runSaga = sagaMiddleware.run;
store.dispatch(increment());
export default store;
