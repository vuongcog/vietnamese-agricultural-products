import React, { useEffect, useMemo } from 'react';
import {
  injectReducer,
  injectSaga,
} from '../../utils/fetch-cancel-saga-reducer-with-key';
import { REDUCER_DATA_USER } from '../../constants/name-store/admin/name-space-reducer';
import { SAGA_DATA_USER } from '../../constants/name-store/admin/name-space-saga';
import { reducerDataUser } from '../../modules/admin/store/reducers/reducer';
import watcherSagaDataUser from '../../modules/admin/store/sagas/saga';
import { useDispatch } from 'react-redux';

const useInjectReducerSagaDataUser = () => {
  useMemo(() => {
    injectReducer(REDUCER_DATA_USER, reducerDataUser);
    injectSaga(SAGA_DATA_USER, watcherSagaDataUser);
  }, []);

  useEffect(() => {
    injectReducer(REDUCER_DATA_USER, reducerDataUser);

    injectSaga(SAGA_DATA_USER, watcherSagaDataUser);

    return () => {};
  }, []);
  return <></>;
};

export default useInjectReducerSagaDataUser;
