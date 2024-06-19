import { yellow } from "@mui/material/colors";
import { call, put, delay, takeLatest } from "redux-saga/effects";

function fetchUserApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe" });
    }, 1000);
  });
}

function* fetchUser() {
  try {
    console.log("hello");
    yield delay(500);
    const user = yield call(fetchUserApi);
    yield put({ type: "FETCH_USER_SUCCESS", payload: user });
  } catch (e) {
    yield put({ type: "FETCH_USER_FAILURE", message: e.message });
  }
}

function* fetchTest() {
  try {
    console.log("test");
    yield delay(500);
    const user = yield call(fetchUserApi);
    yield put({ type: "FETCH_USER_SUCCESS", payload: user });
  } catch (e) {
    yield put({ type: "FETCH_USER_FAILURE", message: e.message });
  }
}
function* watchFetchUser() {
  yield takeLatest("FETCH_USER_REQUEST", fetchUser);
}
export function* watchFetchTest() {
  yield takeLatest("FETCH_USER_REQUEST", fetchTest);
}
export default watchFetchUser;
