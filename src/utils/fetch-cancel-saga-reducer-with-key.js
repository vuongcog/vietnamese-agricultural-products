import store from "../configStore/configStore";
import getInjectors from "./reducer-injectors";
import { cancelSaga, runSaga } from "./saga/optionsSaga";

export const injectReducersAndSagas = ({
  keyReducer,
  keySaga,
  reducer,
  saga,
}) => {
  const injectReducerFactory = getInjectors(store);
  injectReducerFactory.injectReducer(keyReducer, reducer);
  runSaga(saga, keySaga);
};

export const ejectReducersAndSagas = ({ keyReducer, keySaga }) => {
  const injectReducerFactory = getInjectors(store);
  injectReducerFactory.ejectReducer(keyReducer);
  cancelSaga(keySaga);
};

// ! define function tạo 1 reducer và saga
export const injectReducer = (key, reducer) => {
  const injectReducerFactory = getInjectors(store);
  injectReducerFactory.injectReducer(key, reducer);
};
export const injectSaga = (key, saga) => {
  runSaga(saga, key);
};

// ! define function cancel reducer và saga

export const ejectReducer = (key) => {
  const injectReducerFactory = getInjectors(store);
  injectReducerFactory.ejectReducer(key);
};
export const ejectSaga = (key) => {
  cancelSaga(key);
};
