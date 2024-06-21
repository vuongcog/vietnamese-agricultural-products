import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_DATA, REFRESH, SET_ERROR, UPDATE_DATA } from "./constants";
import Http from "../../../../utils/http/http";
import { parseObjectJson } from "../../../../utils/pareJson";

function* workerTest(action) {
  try {
    const { payload } = action;
    const http = new Http("/user");
    yield http
      .create(payload)
      .then(() => {
        console.log("succsess");
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    yield put({ type: REFRESH });
  } catch (err) {
    console.log(err);
  }
}
function* handlerUpdate(action) {
  try {
    const { payload } = action;
    const http = new Http(payload.endpoint);
    delete payload.endpoint;
    yield call(http.update, payload);
    yield put({ type: REFRESH });
  } catch (err) {
    const parseData = parseObjectJson(err.response.data);
    const errorMessage = _.get(parseData, "error.email[0]");
    if (errorMessage) {
      yield put({ type: SET_ERROR, payload: errorMessage });
    }
  }
}
function* warcherTest() {
  yield takeLatest(ADD_DATA, workerTest);
  yield takeLatest(UPDATE_DATA, handlerUpdate);
}

export default warcherTest;
