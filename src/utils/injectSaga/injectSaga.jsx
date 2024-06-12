import invariant from "invariant";
import checkStore from "../checkStore";

import { DAEMON, ONCE_TILL_UNMOUNT, RESTART_ON_REMOUNT } from "../constants";
const allowedModes = [RESTART_ON_REMOUNT, DAEMON, ONCE_TILL_UNMOUNT];

const checkKey = (key) =>
  invariant(
    _.isString(key) && !_.isEmpty(key),
    "(app/utils...) injectSaga: Expected `key` to be a non empty string"
  );

const checkDescriptor = (descriptor) => {
  const shape = {
    saga: _.isFunction,
    mode: (mode) => _.isString(mode) && allowedModes.includes(mode),
  };
  invariant(
    _.conformsTo(descriptor, shape),
    "(app/utils...) injectSaga: Expected a valid saga descriptor"
  );
};

export function injectSagaFactory(store, isValid) {
  return function injectSaga(key, descriptor = {}, args) {
    if (!isValid) checkStore(store);

    const newDescriptor = {
      ...descriptor,
      mode: descriptor.mode || DAEMON,
    };
    const { saga, mode } = newDescriptor;

    checkKey(key);
    checkDescriptor(newDescriptor);

    let hasSaga = Reflect.has(store.injectedSagas, key);

    if (process.env.NODE_ENV !== "production") {
      const oldDescriptor = store.injectedSagas[key];
      // enable hot reloading of daemon and once-till-unmount sagas
      if (hasSaga && oldDescriptor.saga !== saga) {
        oldDescriptor.task.cancel();
        hasSaga = false;
      }
    }

    if (
      !hasSaga ||
      (hasSaga && mode !== DAEMON && mode !== ONCE_TILL_UNMOUNT)
    ) {
      store.injectedSagas[key] = {
        ...newDescriptor,
        task: store.runSaga(saga, args),
      };
    }
  };
}
