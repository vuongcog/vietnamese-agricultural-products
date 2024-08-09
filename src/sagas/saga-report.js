import { call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import Http from '../utils/http/http';
import {
  FETCH_REPORT_ORDER,
  FETCH_REPORT_ORDER_FAILED,
  FETCH_REPORT_ORDER_SUCCSESS,
  FETCH_REPORT_PRODUCT,
  FETCH_REPORT_PRODUCT_CATEGORY,
  FETCH_REPORT_PRODUCT_CATEGORY_FAILED,
  FETCH_REPORT_PRODUCT_CATEGORY_SUCCSESS,
  FETCH_REPORT_PRODUCT_FAILED,
  FETCH_REPORT_PRODUCT_SUCCSESS,
  FETCH_REPORT_USER,
  FETCH_REPORT_USER_FAILED,
  FETCH_REPORT_USER_SUCCSESS,
  FETCHED_REPORT_ORDER,
  FETCHED_REPORT_PRODUCT,
  FETCHED_REPORT_PRODUCT_CATEGORY,
  FETCHED_REPORT_USER,
  FETCHING_REPORT_ORDER,
  FETCHING_REPORT_PRODUCT,
  FETCHING_REPORT_PRODUCT_CATEGORY,
  FETCHING_REPORT_USER,
  HANDLER_SET_REPORT_ORDER,
  HANDLER_SET_REPORT_PRODUCT,
  HANDLER_SET_REPORT_PRODUCT_CATEGORY,
  HANDLER_SET_REPORT_USER,
} from '../actions/action-report';
import { parseObjectJson } from '../utils/parse-json';

function* handlerFetchReportUser(action) {
  try {
    yield put({ type: FETCHING_REPORT_USER });
    const { payload } = action;
    console.log(payload);
    const http = new Http(payload.endpoint);
    const res = yield call(http.getReport);
    const parseObject = parseObjectJson(res.data);
    yield put({
      type: HANDLER_SET_REPORT_USER,
      payload: parseObject,
    });
    yield put({ type: FETCH_REPORT_USER_SUCCSESS });
  } catch (err) {
    yield put({ type: FETCH_REPORT_USER_FAILED });
  } finally {
    yield put({ type: FETCHED_REPORT_USER });
  }
}
function* handlerFetchReportProduct(action) {
  try {
    yield put({ type: FETCHING_REPORT_PRODUCT });
    const { payload } = action;
    const http = new Http(payload.endpoint);
    const res = yield call(http.getReport);
    const parseObject = parseObjectJson(res.data);
    yield put({
      type: HANDLER_SET_REPORT_PRODUCT,
      payload: parseObject,
    });
    yield put({ type: FETCH_REPORT_PRODUCT_SUCCSESS });
  } catch (err) {
    yield put({ type: FETCH_REPORT_PRODUCT_FAILED });
  } finally {
    yield put({ type: FETCHED_REPORT_PRODUCT });
  }
}
function* handlerFetchReportProductCategory(action) {
  try {
    yield put({ type: FETCHING_REPORT_PRODUCT_CATEGORY });
    const { payload } = action;
    const http = new Http(payload.endpoint);
    const res = yield call(http.getReport);
    const parseObject = parseObjectJson(res.data);
    yield put({
      type: HANDLER_SET_REPORT_PRODUCT_CATEGORY,
      payload: parseObject,
    });
    yield put({ type: FETCH_REPORT_PRODUCT_CATEGORY_SUCCSESS });
  } catch (err) {
    yield put({ type: FETCH_REPORT_PRODUCT_CATEGORY_FAILED });
  } finally {
    yield put({ type: FETCHED_REPORT_PRODUCT_CATEGORY });
  }
}
function* handlerFetchReportOrder(action) {
  try {
    yield put({ type: FETCHING_REPORT_ORDER });
    const { payload } = action;
    const http = new Http(payload.endpoint);
    const res = yield call(http.getReport);
    const parseObject = parseObjectJson(res.data);
    yield put({
      type: HANDLER_SET_REPORT_ORDER,
      payload: parseObject,
    });
    yield put({ type: FETCH_REPORT_ORDER_SUCCSESS });
  } catch (err) {
    yield put({ type: FETCH_REPORT_ORDER_FAILED });
  } finally {
    yield put({ type: FETCHED_REPORT_ORDER });
  }
}
function* watcherSagaReport() {
  yield takeLatest(FETCH_REPORT_USER, handlerFetchReportUser);
  yield takeLatest(FETCH_REPORT_PRODUCT, handlerFetchReportProduct);
  yield takeLatest(
    FETCH_REPORT_PRODUCT_CATEGORY,
    handlerFetchReportProductCategory
  );
  yield takeLatest(FETCH_REPORT_ORDER, handlerFetchReportOrder);
}

export default watcherSagaReport;
