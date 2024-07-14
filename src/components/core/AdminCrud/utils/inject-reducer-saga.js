import { cancelSaga, runSaga } from '../../../../utils/saga/optionsSaga';
import getInjectors from '../../../../utils/reducer-injectors';
import store from '../../../../configStore/configStore';
import warcherTest from '../Store/saga';
import { reducerList } from '../Store/reducer';

export const injectReducersAndSagas = () => {
  console.log('run saga...');
  const injectReducerFactory = getInjectors(store);
  injectReducerFactory.injectReducer('crudList', reducerList);
  runSaga(warcherTest, 'sagaTest');
};
export const ejectReducersAndSagas = () => {
  const injectReducerFactory = getInjectors(store);
  injectReducerFactory.ejectReducer('crudList');
  cancelSaga('sagaTest');
  console.log('cancel saga');
};
