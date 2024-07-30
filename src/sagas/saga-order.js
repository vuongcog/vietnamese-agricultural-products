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
    let http;
    if (Cookies.get('accsessToken')) {
      http = new HttpUserClient('/thanhvien/donhang');
    } else {
      http = new HttpUserClient('/khach/donhang');
    }
    const option = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = yield call(http.orderProduct, payload, option);
    const parseObject = parseObjectJson(res.data);
    yield put({ type: ORDER_PRODUCT_SUCCESS });
    console.log(payload.payment);
    if (payload.payment === 'vnpay') {
      const urlRedirect = parseObject[0]?.data;
      window.location.href = urlRedirect;
    }
    if (payload.payment === 'cod') {
      toast.success('Đặt hàng thành công, xin hãy kiểm tra lại email');
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
