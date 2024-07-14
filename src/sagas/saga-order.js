import { call, put, takeLatest } from 'redux-saga/effects';

import HttpUserClient from '../utils/http/httpUserClient';
import {
  ORDER_PRODUCT,
  ORDER_PRODUCT_FAILED,
  ORDER_PRODUCT_SUCCESS,
  ORDERED_PRODUCT,
  ORDERING_PRODUCT,
} from '../actions/action-order';
import { toast } from 'react-toastify';

function* wokerOrder(action) {
  try {
    yield put({ type: ORDERING_PRODUCT });
    const { payload } = action;
    const http = new HttpUserClient('/donhang');
    const option = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    yield call(http.orderProduct, payload, option);
    yield put({ type: ORDER_PRODUCT_SUCCESS });
    toast.success('Thành công, xin vui lòng hãy kiểm tra lại thông báo ở mail');
  } catch (err) {
    yield put({ type: ORDER_PRODUCT_FAILED });
    toast.error('Thất bại');
  } finally {
    yield put({ type: ORDERED_PRODUCT });
  }
}

function* watcherSagaOrder() {
  yield takeLatest(ORDER_PRODUCT, wokerOrder);
}

export default watcherSagaOrder;
