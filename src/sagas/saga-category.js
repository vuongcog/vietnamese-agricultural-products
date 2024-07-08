import { call, put, takeLatest } from "redux-saga/effects";

import HttpUserClient from "../utils/http/httpUserClient";
import { parseObjectJson } from "../utils/parse-json";
import {
  FETCH_CATEGORY,
  FETCH_CATEGORY_FAILED,
  FETCH_CATEGORY_SUCCESS,
  FETCHED_CATEGORY,
  FETCHING_CATEGORY,
  RESET_STATUS_FETCH_CATEGORY,
  SET_CATEGORIES,
} from "../actions/action-category";
import { Text } from "@chakra-ui/react";

function* wokerFetchCategory(action) {
  try {
    yield put({ type: FETCHING_CATEGORY });
    const { payload } = action;
    const http = new HttpUserClient("http://127.0.0.1:8000/api/category");
    const res = yield call(http.getItems, payload);
    const parseData = parseObjectJson(res.data);
    yield put({ type: SET_CATEGORIES, payload: parseData.data });
    yield put({ type: FETCH_CATEGORY_SUCCESS });
  } catch (err) {
    yield put({ type: FETCH_CATEGORY_FAILED });
  } finally {
    yield put({ type: FETCHED_CATEGORY });
    yield put({ type: RESET_STATUS_FETCH_CATEGORY });
  }
}

function* watcherSagaCategory() {
  yield takeLatest(FETCH_CATEGORY, wokerFetchCategory);
}
export default watcherSagaCategory;
