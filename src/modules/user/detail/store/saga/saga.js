import { call, put, takeLatest } from 'redux-saga/effects';
import {
  DETAIL_FETCH_DATA,
  DETAIL_FETCH_DATA_FAILED,
  DETAIL_FETCH_DATA_SUCCESS,
  DETAIL_FETCHED_DATA,
  DETAIL_FETCHING_DATA,
  DETAIL_RESET_STATUS_FETCH_DATA,
  DETAIL_SET_PRODUCT,
} from '../../constants/action';
import { parseObjectJson } from '../../../../../utils/parse-json';
import HttpUserClient from '../../../../../utils/http/httpUserClient';

const options = {
  notAuthor: true,
  headers: {
    'X-API-KEY': 'afcc78057c77c51d7baebcadf1d147dc5a38e9c7',
    'Content-Type': 'application/json',
  },
};
function* wokerFetchDataDetail(action) {
  try {
    yield put({ type: DETAIL_FETCHING_DATA });
    const { payload } = action;
    const http = new HttpUserClient(payload);
    const res = yield call(http.getProduct);
    const parseData = parseObjectJson(res.data);
    yield put({ type: DETAIL_SET_PRODUCT, payload: parseData.data });
    yield put({ type: DETAIL_FETCH_DATA_SUCCESS });
  } catch (err) {
    yield put({ type: DETAIL_FETCH_DATA_FAILED });
  } finally {
    yield put({ type: DETAIL_FETCHED_DATA });
    yield put({ type: DETAIL_RESET_STATUS_FETCH_DATA });
  }
}

function* watcherSagaProductDetail() {
  yield takeLatest(DETAIL_FETCH_DATA, wokerFetchDataDetail);
}

export default watcherSagaProductDetail;
