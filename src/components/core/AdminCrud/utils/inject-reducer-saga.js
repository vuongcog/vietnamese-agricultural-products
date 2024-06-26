import { cancelSaga, runSaga } from "../../../../utils/saga/optionsSaga";
import getInjectors from "../../../../utils/reducerInjectors";
import store from "../../../../configStore/configStore";
import filterProducerReducer from "../CrudSearch/reducers";
import warcherTest from "../Store/saga";
import { reducerList } from "../Store/reducer";

export const injectReducersAndSagas = () => {
  const injectReducerFactory = getInjectors(store);
  injectReducerFactory.injectReducer("crudList", reducerList);
  injectReducerFactory.injectReducer("filter", filterProducerReducer);
  runSaga(warcherTest, "sagaTest");
};
export const ejectReducersAndSagas = () => {
  const injectReducerFactory = getInjectors(store);
  injectReducerFactory.ejectReducer("crudList");
  cancelSaga("sagaTest");
};
