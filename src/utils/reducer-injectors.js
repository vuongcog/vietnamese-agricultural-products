import checkStore from "./checkStore";
import invariant from "invariant";
import _ from "lodash";
import createReducer from "./createReducer";
export function injectReducerFactory(store, isValid) {
  return function injectReducer(key, reducer) {
    if (!isValid) checkStore(store);

    invariant(
      _.isString(key) && !_.isEmpty(key) && _.isFunction(reducer),
      "(src/utils...) injectReducer: Expected `reducer` to be a reducer function"
    );
    if (
      Reflect.has(store.injectedReducers, key) &&
      store.injectedReducers[key] === reducer
    )
      return;
    store.injectedReducers[key] = reducer;
    store.replaceReducer(createReducer(store.injectedReducers));
    if (key == "crudFilter") {
      console.log(key, true);
    }
  };
}

export function ejectReducerFactory(store, isValid) {
  return function ejectReducer(key) {
    if (!isValid) checkStore(store);

    invariant(
      _.isString(key) && !_.isEmpty(key),
      "(src/utils...) ejectReducer: Expected `key` to be a non empty string"
    );

    if (!Reflect.has(store.injectedReducers, key)) return;

    delete store.injectedReducers[key];
    store.replaceReducer(createReducer(store.injectedReducers));
    console.log("factory", key);
  };
}

export default function getInjectors(store) {
  checkStore(store);
  return {
    injectReducer: injectReducerFactory(store, true),
    ejectReducer: ejectReducerFactory(store, true),
  };
}
