import invariant from "invariant";
import store from "../configStore/configStore";
import _ from "lodash";
export default function checkStore(store) {
  const shape = {
    dispatch: _.isFunction,
    subscribe: _.isFunction,
    getState: _.isFunction,
    replaceReducer: _.isFunction,
    runSaga: _.isFunction,
    injectedReducers: _.isObject,
    injectedSagas: _.isObject,
  };
  invariant(
    _.conformsTo(store, shape),
    "(src/utils...) injectors: Expected a valid redux store"
  );
}
