import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCHED_DATA,
  FETCHING_DATA,
  FETCH_DATA_FAILED,
  FETCH_DATA_SUCCESS,
  FETCH_DATA,
} from '../reducer/constants';
import HttpUserClient from '../../../../../utils/http/httpUserClient';
import { parseObjectJson } from '../../../../../utils/parse-json';

const options = {
  notAuthor: true,
  withCredentials: true,
};

function* wokerFetchData(action) {
  try {
    yield put({ type: FETCHING_DATA });
    const { payload } = action;
    const http = new HttpUserClient('/sanpham');
    const res = yield call(http.getItems, payload);
    const parseData = parseObjectJson(res.data);
    yield put({ type: FETCH_DATA_SUCCESS, payload: parseData.data });
  } catch (err) {
    yield put({ type: FETCH_DATA_FAILED });
  } finally {
    yield put({ type: FETCHED_DATA });
  }
}

function* warcherSagaProducrtList() {
  yield takeLatest(FETCH_DATA, wokerFetchData);
}

export default warcherSagaProducrtList;
