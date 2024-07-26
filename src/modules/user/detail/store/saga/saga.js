import { call, put, takeLatest } from 'redux-saga/effects';
import {
  DETAIL_FETCH_DATA,
  DETAIL_FETCH_DATA_FAILED,
  DETAIL_FETCH_DATA_SUCCESS,
  DETAIL_FETCH_FEEDBACK,
  DETAIL_FETCH_FEEDBACK_FAILED,
  DETAIL_FETCH_FEEDBACK_SUCCESS,
  DETAIL_FETCHED_DATA,
  DETAIL_FETCHED_FEEDBACK,
  DETAIL_FETCHING_DATA,
  DETAIL_FETCHING_FEEDBACK,
  DETAIL_RESET_STATUS_FETCH_DATA,
  DETAIL_SET_FEEDBACK,
  DETAIL_SET_PRODUCT,
} from '../../constants/action';
import { parseObjectJson } from '../../../../../utils/parse-json';
import HttpUserClient from '../../../../../utils/http/httpUserClient';

function* wokerFetchDataDetail(action) {
  try {
    yield put({ type: DETAIL_FETCHING_DATA });
    const { payload } = action;
    const http = new HttpUserClient(payload);
    const res = yield call(http.getProduct);
    const parseData = parseObjectJson(res.data);
    yield put({ type: DETAIL_SET_PRODUCT, payload: parseData.product });
    yield put({ type: DETAIL_FETCH_DATA_SUCCESS });
  } catch (err) {
    yield put({ type: DETAIL_FETCH_DATA_FAILED });
  } finally {
    yield put({ type: DETAIL_FETCHED_DATA });
    yield put({ type: DETAIL_RESET_STATUS_FETCH_DATA });
  }
}

function* wokerFetchFeedback(action) {
  try {
    yield put({ type: DETAIL_FETCHING_FEEDBACK });
    const { payload } = action;
    const http = new HttpUserClient(payload.endpoint);
    const res = yield call(http.getFeedback);
    const parseData = parseObjectJson(res.data);

    yield put({ type: DETAIL_SET_FEEDBACK, payload: parseData });
    yield put({ type: DETAIL_FETCH_FEEDBACK_SUCCESS });
  } catch (err) {
    yield put({ type: DETAIL_FETCH_FEEDBACK_FAILED });
  } finally {
    yield put({ type: DETAIL_FETCHED_FEEDBACK });
  }
}

function* watcherSagaProductDetail() {
  yield takeLatest(DETAIL_FETCH_DATA, wokerFetchDataDetail);
  yield takeLatest(DETAIL_FETCH_FEEDBACK, wokerFetchFeedback);
}

export default watcherSagaProductDetail;
