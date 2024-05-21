import checkStore from "./checkStore";
import store from "../configStore/configStore";
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
    ) {
      store.injectedReducers[key] = reducer; // eslint-disable-line no-param-reassign
      store.replaceReducer(createReducer(store.injectedReducers));
    }
  };
}
export default function getInjectors(store) {
  checkStore(store);
  return {
    injectReducer: injectReducerFactory(store, true),
  };
}
