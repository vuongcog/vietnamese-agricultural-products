import React from 'react';
import { createContext } from 'react';
import ReportLayout from '../presentational';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  FETCH_REPORT_ORDER,
  FETCH_REPORT_PRODUCT,
  FETCH_REPORT_PRODUCT_CATEGORY,
  FETCH_REPORT_USER,
} from '../../../../actions/action-report';
import {
  injectReducer,
  injectSaga,
} from '../../../../utils/fetch-cancel-saga-reducer-with-key';
import { REDUCER_REPORT } from '../../../../constants/name-store/admin/name-space-reducer';
import { SAGA_REPORT } from '../../../../constants/name-store/admin/name-space-saga';
import { reducerReport } from '../../../../reducers/reducer-report';
import watcherSagaReport from '../../../../sagas/saga-report';
import useProducerReport from '../../../../useCustom/admin/useProducerReport';
import { useState } from 'react';
import Http from '../../../../utils/http/http';
import { parseObjectJson } from '../../../../utils/parse-json';
export const ReportContext = createContext({});

const Report = () => {
  const dispatch = useDispatch();
  const { report_order, report_product, report_product_category, report_user } =
    useProducerReport();

  const [selectedUser, setSelectedUser] = useState('yearly');
  const [selectedProduct, setSelectedProduct] = useState('yearly');

  const [selectedProductCategory, setSeletedProductCategory] =
    useState('yearly');

  const [selectedOrder, setSeletectedOrder] = useState('weekly');
  const [limitProduct, setLimitProduct] = useState(10);
  const [limitProductCategory, setLimitProductCategory] = useState(10);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [categories, setCategories] = useState([]);
  const handlerChangeSelectedUser = e => {
    setSelectedUser(e.target.value);
  };
  const handlerChangeSelectedProduct = (period, limit) => {
    if (period) {
      setSelectedProduct(period);
    }
    if (limit) {
      setLimitProduct(limit);
    }
  };

  useEffect(() => {
    setSelectedCategory();
    if (!_.isEmpty(categories)) {
      setSelectedCategory(categories[0].id);
    }
  }, [categories]);

  const handlerChangeSelectedProductCategoryPeriod = period => {
    setSeletedProductCategory(period);
  };

  const handlerChangeSelectedProductCategoryLimit = limit => {
    setLimitProductCategory(limit);
  };
  const handlerChangeSelectedProductCategory = category => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const http = new Http('/category?sort_by=created_at&sort_direction=desc');
    http
      .list()
      .then(res => {
        setCategories(parseObjectJson(res.data).data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    injectReducer(REDUCER_REPORT, reducerReport);
    injectSaga(SAGA_REPORT, watcherSagaReport);
  }, []);

  useEffect(() => {
    dispatch({
      type: FETCH_REPORT_USER,
      payload: { endpoint: `/report/user-report?period=${selectedUser}` },
    });
  }, [selectedUser]);
  useEffect(() => {
    dispatch({
      type: FETCH_REPORT_PRODUCT,
      payload: {
        endpoint: `/report/product-report?period=${selectedProduct}&limit=${limitProduct}`,
      },
    });
  }, [selectedProduct, limitProduct]);

  useEffect(() => {
    console.log(limitProductCategory);
    dispatch({
      type: FETCH_REPORT_PRODUCT_CATEGORY,
      payload: {
        endpoint: `/report/category-product-report/${selectedCategory}?period=${selectedProductCategory}&limit=${limitProductCategory}`,
      },
    });
  }, [selectedProductCategory, limitProductCategory, selectedCategory]);
  useEffect(() => {
    dispatch({
      type: FETCH_REPORT_ORDER,
      payload: { endpoint: '/report/order-report?period=yearly' },
    });
  }, []);
  const value = {
    categories,
    handlerChangeSelectedUser,
    report_order,
    report_product,
    report_product_category,
    report_user,
    handlerChangeSelectedProduct,
    handlerChangeSelectedProductCategory,
    handlerChangeSelectedProductCategoryPeriod,
    handlerChangeSelectedProductCategoryLimit,
    selectedCategory,
  };
  return (
    <ReportContext.Provider value={value}>
      <ReportLayout></ReportLayout>
    </ReportContext.Provider>
  );
};

export default Report;
