import { call, put, takeLatest } from "redux-saga/effects";
import {
  ADDED_DATA,
  ADDING_DATA,
  ADD_DATA,
  ADD_DATA_FAILED,
  ADD_DATA_SUCCESS,
  ADD_RESET_STATUS,
  REFRESH,
  SENDED_EMAIL,
  SENDING_EMAIL,
  SEND_EMAIL,
  SEND_EMAIL_ERROR,
  SEND_EMAIL_SUCCSESS,
  SEND_RESET_EMAIL_STATUS,
  UPDATED_DATA,
  UPDATE_DATA,
  UPDATE_FAILED,
  UPDATE_RESET_STATUS,
  UPDATE_SUCCESS,
  UPDATING_DATA,
} from "./constants";
import Http from "../../../../utils/http/http";
import { parseObjectJson } from "../../../../utils/pareJson";
import { toast } from "react-toastify";

// 111 worker create data
function* handlerAddData(action) {
  try {
    yield put({ type: ADDING_DATA });
    const { payload } = action;
    const http = new Http(payload.endpoint);
    yield call(http.create, payload);
    yield put({ type: ADD_DATA_SUCCESS });
    yield put({ type: REFRESH });
    toast.success("Đã tạo thành công");
  } catch (err) {
    yield put({ type: ADD_DATA_FAILED });
    const parseData = parseObjectJson(err.response.data);
    const errors = _.get(parseData, "error", {});
    for (let key in errors) {
      if (errors[key].length > 0) {
        errors[key].forEach((errMsg) => toast.error(errMsg));
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
    toast.success("Cập nhập thành công");
    yield put({ type: UPDATE_SUCCESS });
    yield put({ type: REFRESH });
  } catch (err) {
    yield put({ type: UPDATE_FAILED });
    const parseData = parseObjectJson(err.response.data);
    const errors = _.get(parseData, "error", {});
    for (let key in errors) {
      if (errors[key].length > 0) {
        errors[key].forEach((errMsg) => toast.error(errMsg));
      }
    }
  } finally {
    yield put({ type: UPDATED_DATA });
    yield put({ type: UPDATE_RESET_STATUS });
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
    toast.success("Gửi mail thành công");
    yield put({ type: SEND_EMAIL_SUCCSESS });
  } catch (err) {
    yield put({ type: SEND_EMAIL_ERROR });
  } finally {
    toast.error("Gửi mail thất bại");
    yield put({ type: SENDED_EMAIL });
    yield put({ type: SEND_RESET_EMAIL_STATUS });
  }
}

function* warcherTest() {
  yield takeLatest(ADD_DATA, handlerAddData);
  yield takeLatest(UPDATE_DATA, handlerUpdate);
  yield takeLatest(SEND_EMAIL, handlerSendMail);
}

export default warcherTest;
