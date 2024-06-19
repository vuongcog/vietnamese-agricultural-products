import { put, takeLatest } from "redux-saga/effects";
import { ADD_DATA, REFRESH } from "./constants";

function* workerTest(action) {
  try {
    const http = action.payload;
    yield http();
    yield put({ type: REFRESH });
  } catch (error) {
    console.log(error);
  }
}
function* warcherTest() {
  yield takeLatest(ADD_DATA, workerTest);
}

export default warcherTest;
