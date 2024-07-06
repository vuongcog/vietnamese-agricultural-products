import React, { useEffect, useMemo } from "react";
import { reducerProductList } from "../../modules/user/shoping/store/reducer/reducer";
import warcherSagaProducrtList from "../../modules/user/shoping/store/saga/saga";
import {
  ejectReducer,
  ejectReducersAndSagas,
  ejectSaga,
  injectReducer,
  injectReducersAndSagas,
  injectSaga,
} from "../../utils/fetch-cancel-saga-reducer-with-key";
import { refactorReducerFilter } from "../../modules/user/shoping/store/reducer/reducerFilter";
import { initialFilterState } from "../../modules/user/shoping/store/constants/initialFilterState";
import { reducerDetailProduct } from "../../modules/user/detail/store/reducer/reducer";
import watcherSagaProductDetail from "../../modules/user/detail/store/saga/saga";
import { DETAIL_PRODUCT_REDUCER } from "../../constants/name-store/user/name-space-reducer";
import { DETAIL_PRODUCT_SAGA } from "../../constants/name-store/user/name-space-saga";

const useInjectReducerSagaShopping = () => {
  const redux = {
    keyReducer: "list-product-reducer",
    keySaga: "list-product-saga",
    reducer: reducerProductList,
    saga: warcherSagaProducrtList,
  };
  useMemo(() => {
    injectReducer(DETAIL_PRODUCT_REDUCER, reducerDetailProduct);
    injectSaga(DETAIL_PRODUCT_SAGA, watcherSagaProductDetail);

    injectReducer(
      "filter",
      refactorReducerFilter({
        ...initialFilterState,
      })
    );
    injectReducersAndSagas(redux);
  }, []);

  useEffect(() => {
    injectReducer(DETAIL_PRODUCT_REDUCER, reducerDetailProduct);
    injectSaga(DETAIL_PRODUCT_SAGA, watcherSagaProductDetail);

    injectReducer("filter", refactorReducerFilter({ ...initialFilterState }));
    injectReducersAndSagas(redux);
    return () => {
      ejectReducer(DETAIL_PRODUCT_REDUCER);
      ejectSaga(DETAIL_PRODUCT_SAGA);

      ejectReducersAndSagas(redux);
      ejectReducer("filter");
    };
  }, []);
  return <div></div>;
};

export default useInjectReducerSagaShopping;
