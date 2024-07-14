import { call, put, takeLatest } from 'redux-saga/effects';
import {
  ADDED_DATA,
  ADDING_DATA,
  ADD_DATA,
  ADD_DATA_FAILED,
  ADD_DATA_SUCCESS,
  ADD_RESET_STATUS,
  DELETED_DATA,
  DELETE_DATA,
  DELETE_DATA_FAILED,
  DELETE_DATA_SUCCESS,
  DELETE_RESET_STATUS,
  DELETING_DATA,
  FETCHED_DATA,
  FETCH_DATA,
  FETCH_DATA_WITH_ID,
  REFRESH,
  SENDED_EMAIL,
  SENDING_EMAIL,
  SEND_EMAIL,
  SEND_EMAIL_ERROR,
  SEND_EMAIL_SUCCSESS,
  SEND_RESET_EMAIL_STATUS,
  SET_ITEMS,
  UPDATED_DATA,
  UPDATE_DATA,
  UPDATE_FAILED,
  UPDATE_RESET_STATUS,
  UPDATE_SUCCESS,
  UPDATING_DATA,
} from './constants';
import Http from '../../../../utils/http/http';
import { parseObjectJson } from '../../../../utils/parse-json';
import { toast } from 'react-toastify';

// 111 worker create data
function* handlerAddData(action) {
  try {
    yield put({ type: ADDING_DATA });
    const { payload } = action;
    const http = new Http(payload.endpoint);
    yield call(http.create, payload);
    yield put({ type: ADD_DATA_SUCCESS });
    yield put({ type: REFRESH });
    toast.success('Đã tạo thành công');
  } catch (err) {
    yield put({ type: ADD_DATA_FAILED });
    const parseData = parseObjectJson(err.response.data);
    const errors = _.get(parseData, 'error', {});
    for (let key in errors) {
      if (errors[key].length > 0) {
        errors[key].forEach(errMsg => toast.error(errMsg));
      }
    }
  } finally {
    yield put({ type: ADDED_DATA });
    yield put({ type: ADD_RESET_STATUS });
  }
}

// 222 worker update data
function* handlerUpdate(action) {
  try {
    yield put({ type: UPDATING_DATA });
    const { payload } = action;
    const http = new Http(payload.endpoint);
    delete payload.endpoint;
    yield call(http.update, payload);
    toast.success('Cập nhập thành công');
    yield put({ type: UPDATE_SUCCESS });
    yield put({ type: REFRESH });
  } catch (err) {
    yield put({ type: UPDATE_FAILED });
    const parseData = parseObjectJson(err.response.data);
    const errors = _.get(parseData, 'error', {});
    for (let key in errors) {
      if (errors[key].length > 0) {
        errors[key].forEach(errMsg => toast.error(errMsg));
      }
    }
  } finally {
    yield put({ type: UPDATED_DATA });
    yield put({ type: UPDATE_RESET_STATUS });
  }
}

function* handlerFetchDataWithId(action) {
  try {
    yield put({ type: FETCH_DATA });
    const { payload } = action;
    const http = new Http(payload);
    const res = yield call(http.withId);
    const parseJson = parseObjectJson(res.data);
    if (parseJson.data) {
      yield put({ type: SET_ITEMS, payload: [parseJson.data] });
      toast.success('Tìm thành công', { autoClose: 1000 });
    } else {
      if (parseJson.message)
        toast.error(parseJson.message, { autoClose: 1000 });
      else {
        toast.error('Không tìm thấy', { autoClose: 1000 });
      }
    }
  } catch {
    toast.error('Không tìm thấy', { autoClose: 1000 });
  } finally {
    yield put({ type: FETCHED_DATA });
  }
}

function* handlerDelete(action) {
  try {
    yield put({ type: DELETING_DATA });
    const { payload: endpoint } = action;
    const http = new Http(endpoint);
    const res = yield call(http.delete);
    const parseData = parseObjectJson(res.data);
    const success = _.get(parseData, 'message', {});
    toast.success(success);
    yield put({ type: DELETE_DATA_SUCCESS });
  } catch (err) {
    yield put({ type: DELETE_DATA_FAILED });
    const parseData = parseObjectJson(err.response.data);
    const errors = _.get(parseData, 'error');
    if (errors) {
      toast.error(errors);
    } else {
      toast.error(
        'Đây là một dữ liệu đặc biệt, bạn không được phép xóa tại thời điểm này'
      );
    }
  } finally {
    yield put({ type: DELETED_DATA });
    yield put({ type: DELETE_RESET_STATUS });
  }
}

// 333 worker send mail
function* handlerSendMail(action) {
  try {
    yield put({ type: SENDING_EMAIL });
    const { payload } = action;
    const http = new Http(payload.endpoint);
    delete payload.endpoint;
    yield call(http.update, payload);
    toast.success('Gửi mail thành công');
    yield put({ type: SEND_EMAIL_SUCCSESS });
  } catch (err) {
    yield put({ type: SEND_EMAIL_ERROR });
  } finally {
    toast.error('Gửi mail thất bại');
    yield put({ type: SENDED_EMAIL });
    yield put({ type: SEND_RESET_EMAIL_STATUS });
  }
}

function* warcherTest() {
  yield takeLatest(ADD_DATA, handlerAddData);
  yield takeLatest(UPDATE_DATA, handlerUpdate);
  yield takeLatest(SEND_EMAIL, handlerSendMail);
  yield takeLatest(DELETE_DATA, handlerDelete);
  yield takeLatest(FETCH_DATA_WITH_ID, handlerFetchDataWithId);
}

export default warcherTest;
