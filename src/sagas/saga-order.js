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
import { parseObjectJson } from '../utils/parse-json';

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
    const res = yield call(http.orderProduct, payload, option);
    const parseObject = parseObjectJson(res.data);
    yield put({ type: ORDER_PRODUCT_SUCCESS });
    if (Array.isArray(parseObject)) {
      toast.success('Đặt hàng thành công ,xin hãy kiểm tra lại email');
    } else {
      const urlRedirect = parseObject.data;
      window.location.href = urlRedirect;
    }
  } catch (err) {
    yield put({ type: ORDER_PRODUCT_FAILED });
    const parseData = parseObjectJson(err.response.data);
    toast.error(parseData.message);
  } finally {
    yield put({ type: ORDERED_PRODUCT });
  }
}

function* watcherSagaOrder() {
  yield takeLatest(ORDER_PRODUCT, wokerOrder);
}

export default watcherSagaOrder;
