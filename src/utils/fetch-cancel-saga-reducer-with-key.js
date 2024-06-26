import store from "../configStore/configStore";
import getInjectors from "./reducerInjectors";
import { cancelSaga, runSaga } from "./saga/optionsSaga";

export const injectReducersAndSagas = ({
  keyReducer,
  keySaga,
  reducer,
  saga,
}) => {
  const injectReducerFactory = getInjectors(store);
  console.log("hello");
  injectReducerFactory.injectReducer(keyReducer, reducer);
  runSaga(saga, keySaga);
};

export const ejectReducersAndSagas = ({ keyReducer, keySaga }) => {
  const injectReducerFactory = getInjectors(store);
  injectReducerFactory.ejectReducer(keyReducer);
  cancelSaga(keySaga);
};
