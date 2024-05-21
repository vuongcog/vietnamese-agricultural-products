import { takeEvery } from "redux-saga/effects";
import { increment } from "./reducer";
function* watcher(params) {
  yield takeEvery(increment().type, worker);
}
function* worker() {
  console.log("hllo");
}

export default watcher;
