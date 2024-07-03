/* eslint-disable require-yield */
import { takeEvery } from "redux-saga/effects";
import { increment } from "./reducer";
function* watcher() {
  yield takeEvery(increment().type, worker);
}
function* worker() {
  console.log("hllo");
}

export default watcher;
