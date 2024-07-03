import React, { useEffect, useMemo } from "react";
import {
  ejectReducer,
  injectReducer,
} from "../../utils/fetch-cancel-saga-reducer-with-key";
import {
  initialFilterState,
  reducerFilter,
} from "../../components/core/AdminCrud/Store/reducerFilter";
import { useDispatch } from "react-redux";
import { CRUD_SET_INIT_REDUCER_FILTER } from "../../components/core/AdminCrud/constants/actionFilter";
import {
  ejectReducersAndSagas,
  injectReducersAndSagas,
} from "../../components/core/AdminCrud/utils/inject-reducer-saga";

const useInjectReducerSaga = () => {
  const dispatch = useDispatch();

  useMemo(() => {
    injectReducersAndSagas();
    injectReducer("crudFilter", reducerFilter);
    dispatch({
      type: CRUD_SET_INIT_REDUCER_FILTER,
      payload: initialFilterState,
    });
  }, []);
  useEffect(() => {
    injectReducersAndSagas();
    injectReducer("crudFilter", reducerFilter);
    return () => {
      ejectReducersAndSagas();
      ejectReducer("crudFilter");
    };
  }, []);
  return {};
};

export default useInjectReducerSaga;
