import React, { useEffect, useMemo } from 'react';
import { reducerProductList } from '../../modules/user/shoping/store/reducer/reducer';
import warcherSagaProducrtList from '../../modules/user/shoping/store/saga/saga';
import {
  ejectReducer,
  ejectReducersAndSagas,
  ejectSaga,
  injectReducer,
  injectReducersAndSagas,
  injectSaga,
} from '../../utils/fetch-cancel-saga-reducer-with-key';
import { refactorReducerFilter } from '../../modules/user/shoping/store/reducer/reducerFilter';
import { initialFilterState } from '../../modules/user/shoping/store/constants/initialFilterState';
import { reducerDetailProduct } from '../../modules/user/detail/store/reducer/reducer';
import watcherSagaProductDetail from '../../modules/user/detail/store/saga/saga';
import {
  BLOG_REDUCER,
  CART_REDUCER,
  CATEGORY_REDUCER,
  DETAIL_PRODUCT_REDUCER,
  ORDER_REDUCER,
} from '../../constants/name-store/user/name-space-reducer';
import {
  BLOG_SAGA,
  CART_SAGA,
  CATEGORY_SAGA,
  DETAIL_PRODUCT_SAGA,
  ORDER_SAGA,
} from '../../constants/name-store/user/name-space-saga';
import { reducerCategoryUser } from '../../reducers/reducer-category';
import watcherSagaCategory from '../../sagas/saga-category';
import { reducerCartUser } from '../../reducers/reducer-cart';
import watcherSagaCart from '../../sagas/saga-cart';
import { reducerBlogsUser } from '../../reducers/reducer-blog';
import watcherSagaBlogs from '../../sagas/saga-blog';
import { reducerOrder } from '../../reducers/reducer-order';
import watcherSagaOrder from '../../sagas/saga-order';

const useInjectReducerSagaShopping = () => {
  const redux = {
    keyReducer: 'list-product-reducer',
    keySaga: 'list-product-saga',
    reducer: reducerProductList,
    saga: warcherSagaProducrtList,
  };
  useMemo(() => {
    injectReducer(ORDER_REDUCER, reducerOrder);
    injectReducer(BLOG_REDUCER, reducerBlogsUser);
    injectReducer(CART_REDUCER, reducerCartUser);
    injectReducer(CATEGORY_REDUCER, reducerCategoryUser);
    injectReducer(DETAIL_PRODUCT_REDUCER, reducerDetailProduct);

    injectSaga(ORDER_SAGA, watcherSagaOrder);
    injectSaga(BLOG_SAGA, watcherSagaBlogs);
    injectSaga(CART_SAGA, watcherSagaCart);
    injectSaga(CATEGORY_SAGA, watcherSagaCategory);
    injectSaga(DETAIL_PRODUCT_SAGA, watcherSagaProductDetail);

    injectReducer(
      'filter',
      refactorReducerFilter({
        ...initialFilterState,
      })
    );
    injectReducersAndSagas(redux);
  }, []);

  useEffect(() => {
    injectReducer(ORDER_REDUCER, reducerOrder);
    injectReducer(BLOG_REDUCER, reducerBlogsUser);
    injectReducer(CART_REDUCER, reducerCartUser);
    injectReducer(CATEGORY_REDUCER, reducerCategoryUser);
    injectReducer(DETAIL_PRODUCT_REDUCER, reducerDetailProduct);

    injectSaga(ORDER_SAGA, watcherSagaOrder);
    injectSaga(BLOG_SAGA, watcherSagaBlogs);
    injectSaga(CART_SAGA, watcherSagaCart);
    injectSaga(CATEGORY_SAGA, watcherSagaCategory);
    injectSaga(DETAIL_PRODUCT_SAGA, watcherSagaProductDetail);

    injectReducer('filter', refactorReducerFilter({ ...initialFilterState }));
    injectReducersAndSagas(redux);
    return () => {
      ejectReducer(CART_REDUCER);
      ejectReducer(DETAIL_PRODUCT_REDUCER);

      ejectSaga(CART_SAGA);
      ejectSaga(DETAIL_PRODUCT_SAGA);

      ejectReducersAndSagas(redux);
      ejectReducer('filter');
    };
  }, []);
  return <></>;
};

export default useInjectReducerSagaShopping;
