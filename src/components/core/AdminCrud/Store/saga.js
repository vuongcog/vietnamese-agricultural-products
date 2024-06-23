import { call, put, takeLatest } from "redux-saga/effects";
import {
  ADDED_DATA,
  ADDING_DATA,
  ADD_DATA,
  REFRESH,
  SET_ERROR,
  UPDATE_DATA,
} from "./constants";
import Http from "../../../../utils/http/http";
import { parseObjectJson } from "../../../../utils/pareJson";

function* workerTest(action) {
  try {
    yield put({ type: ADDING_DATA });
    const { payload } = action;
    const http = new Http(payload.endpoint);
    yield call(http.create, payload);
    yield put({ type: ADDED_DATA });
    yield put({ type: REFRESH });
  } catch (err) {
    const parseData = parseObjectJson(err.response.data);
    const errorMessage = _.get(parseData, "error.email[0]");
    yield put({ type: ADDED_DATA });
    if (true) {
      yield put({ type: SET_ERROR, payload: "Lỗi" });
    }
  }
}
function* handlerUpdate(action) {
  try {
    const { payload } = action;
    const http = new Http(payload.endpoint);
    delete payload.endpoint;
    yield call(http.update, payload);

    yield put({ type: ADDED_DATA });
    yield put({ type: REFRESH });
  } catch (err) {
    const parseData = parseObjectJson(err.response.data);
    const errorMessage = _.get(parseData, "error.email[0]");
    if (errorMessage) {
      yield put({ type: ADDED_DATA });
      yield put({ type: SET_ERROR, payload: errorMessage });
    }
  }
}
function* warcherTest() {
  yield takeLatest(ADD_DATA, workerTest);
  yield takeLatest(UPDATE_DATA, handlerUpdate);
}

export default warcherTest;
