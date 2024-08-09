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
export const ReportContext = createContext({});

const Report = () => {
  const dispatch = useDispatch();
  const { report_order, report_product, report_product_category, report_user } =
    useProducerReport();

  const [selectedUser, setSelectedUser] = useState('yearly');
  const [selectedProduct, setSelectedProduct] = useState('yearly');
  const [selectedProductCategory, setSeletedProductCategory] =
    useState('weekly');
  const [selectedOrder, setSeletectedOrder] = useState('weekly');
  const [limitProduct, setLimitProduct] = useState(10);
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
    dispatch({
      type: FETCH_REPORT_PRODUCT_CATEGORY,
      payload: { endpoint: '/report/category-product-report/1?period=yearly' },
    });
  }, []);
  useEffect(() => {
    dispatch({
      type: FETCH_REPORT_ORDER,
      payload: { endpoint: '/report/order-report?period=yearly' },
    });
  }, []);
  const value = {
    handlerChangeSelectedUser,
    report_order,
    report_product,
    report_product_category,
    report_user,
    handlerChangeSelectedProduct,
  };
  return (
    <ReportContext.Provider value={value}>
      <ReportLayout></ReportLayout>
    </ReportContext.Provider>
  );
};

export default Report;
