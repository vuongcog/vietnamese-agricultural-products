import React, { useEffect, useMemo } from "react";
import { reducerProductList } from "../../modules/user/shoping/store/reducer/reducer";
import warcherSagaProducrtList from "../../modules/user/shoping/store/saga/saga";
import {
  ejectReducer,
  ejectReducersAndSagas,
  injectReducer,
  injectReducersAndSagas,
} from "../../utils/fetch-cancel-saga-reducer-with-key";
import { refactorReducerFilter } from "../../modules/user/shoping/store/reducer/reducerFilter";
import { initialFilterState } from "../../modules/user/shoping/store/constants/initialFilterState";

const useInjectReducerSagaShopping = () => {
  const redux = {
    keyReducer: "list-product-reducer",
    keySaga: "list-product-saga",
    reducer: reducerProductList,
    saga: warcherSagaProducrtList,
  };
  useMemo(() => {
    injectReducer(
      "filter",
      refactorReducerFilter({
        ...initialFilterState,
      })
    );
    injectReducersAndSagas(redux);
  }, []);

  useEffect(() => {
    injectReducersAndSagas(redux);
    injectReducer("filter", refactorReducerFilter({ ...initialFilterState }));
    return () => {
      ejectReducersAndSagas(redux);
      ejectReducer("filter");
    };
  }, []);
  return <div></div>;
};

export default useInjectReducerSagaShopping;
