import { call, put, takeLatest } from 'redux-saga/effects';
import Http from '../../../../utils/http/http';
import { parseObjectJson } from '../../../../utils/parse-json';
import {
  FETCH_DATA_USER,
  FETCHED_DATA_USER,
  FETCHING_DATA_USER,
  SET_INFO_USER,
} from '../constants/action';

function* wokerFetchDataUser(action) {
  try {
    yield put({ type: FETCHING_DATA_USER });
    const { payload } = action;
    const http = new Http(payload.endpoint);
    const res = yield call(http.getDataUser);
    const parseObject = parseObjectJson(res.data);
    yield put({
      type: SET_INFO_USER,
      payload: parseObject.thong_tin_nguoi_dung,
    });
    yield put({ type: 'FETCH_DATA_USER_SUCCESS' });
  } catch (err) {
    yield put({ type: 'FETCH_DATA_USER_FAILED' });
  } finally {
    yield put({ type: FETCHED_DATA_USER });
  }
}

function* watcherSagaDataUser() {
  yield takeLatest(FETCH_DATA_USER, wokerFetchDataUser);
}

export default watcherSagaDataUser;
