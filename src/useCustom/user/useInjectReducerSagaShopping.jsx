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
import {
  CATEGORY_REDUCER,
  DETAIL_PRODUCT_REDUCER,
} from "../../constants/name-store/user/name-space-reducer";
import {
  CATEGORY_SAGA,
  DETAIL_PRODUCT_SAGA,
} from "../../constants/name-store/user/name-space-saga";
import { reducerCategoryUser } from "../../reducers/reducer-category";
import watcherSagaCategory from "../../sagas/saga-category";

const useInjectReducerSagaShopping = () => {
  const redux = {
    keyReducer: "list-product-reducer",
    keySaga: "list-product-saga",
    reducer: reducerProductList,
    saga: warcherSagaProducrtList,
  };
  useMemo(() => {
    injectReducer(CATEGORY_REDUCER, reducerCategoryUser);
    injectReducer(DETAIL_PRODUCT_REDUCER, reducerDetailProduct);
    injectSaga(CATEGORY_SAGA, watcherSagaCategory);
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
    injectReducer(CATEGORY_REDUCER, reducerCategoryUser);
    injectSaga(DETAIL_PRODUCT_SAGA, watcherSagaProductDetail);
    injectSaga(CATEGORY_SAGA, watcherSagaCategory);
    injectReducer(DETAIL_PRODUCT_REDUCER, reducerDetailProduct);

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
