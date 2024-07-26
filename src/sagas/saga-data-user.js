import { call, put, takeLatest } from 'redux-saga/effects';

import HttpUserClient from '../utils/http/httpUserClient';

import { parseObjectJson } from '../utils/parse-json';
import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
  CHANGED_PASSWORD,
  CHANGING_PASSWORD,
  FETCH_DATA_USER,
  FETCH_DATA_USER_FAILED,
  FETCH_DATA_USER_SUCCESS,
  FETCHED_DATA_USER,
  FETCHING_DATA_USER,
  SET_DATA_USER,
} from '../actions/action-infor-user';
import { toast } from 'react-toastify';
import Http from '../utils/http/http';

function* wokerDataUser(action) {
  try {
    yield put({ type: FETCHING_DATA_USER });
    const { payload } = action;
    const http = new HttpUserClient(payload.endpoint);
    const res = yield call(http.getDataUser);
    const parseObject = parseObjectJson(res.data);
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
// đổi mật khẩu
function* handlerChangePassword(action) {
  try {
    yield put({ type: CHANGING_PASSWORD });
    const { payload } = action;
    const http = new Http(payload.endpoint);
    delete payload.endpoint;
    yield call(http.update, payload);
    toast.success('Đổi mật khẩu thành công');
    yield put({ type: CHANGE_PASSWORD_SUCCESS });
  } catch (err) {
    const errors = parseObjectJson(parseObjectJson(err.response.data));

    try {
      if (errors.message) {
        toast.error(errors.message);
      }
      for (let key in errors) {
        if (errors[key].length > 0) {
          errors[key].forEach(errMsg => toast.error(errMsg));
        }
      }
      yield put({ type: CHANGE_PASSWORD_ERROR });
    } catch {}
  } finally {
    yield put({ type: CHANGED_PASSWORD });
  }
}
function* watcherSagaDataUser() {
  yield takeLatest(FETCH_DATA_USER, wokerDataUser);
  yield takeLatest(CHANGE_PASSWORD, handlerChangePassword);
}

export default watcherSagaDataUser;
