import { call, put, takeLatest } from 'redux-saga/effects';

import HttpUserClient from '../utils/http/httpUserClient';

import { parseObjectJson } from '../utils/parse-json';
import {
  FETCH_DATA_USER,
  FETCH_DATA_USER_FAILED,
  FETCH_DATA_USER_SUCCESS,
  FETCHED_DATA_USER,
  FETCHING_DATA_USER,
  SET_DATA_USER,
} from '../actions/action-infor-user';

function* wokerDataUser(action) {
  try {
    yield put({ type: FETCHING_DATA_USER });
    const { payload } = action;
    const http = new HttpUserClient(payload.endpoint);
    const res = yield call(http.getDataUser);
    const parseObject = parseObjectJson(res.data);
    console.log(parseObject);
    yield put({
      type: SET_DATA_USER,
      payload: parseObject[`thong-tin-nguoi-dung`],
    });
    yield put({ type: FETCH_DATA_USER_SUCCESS });
  } catch (err) {
    yield put({ type: FETCH_DATA_USER_FAILED });
  } finally {
    yield put({ type: FETCHED_DATA_USER });
  }
}

function* watcherSagaDataUser() {
  yield takeLatest(FETCH_DATA_USER, wokerDataUser);
}

export default watcherSagaDataUser;
