import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCHED_DATA,
  FETCHING_DATA,
  FETCH_DATA_FAILED,
  FETCH_DATA_SUCCESS,
  FETCH_DATA,
} from "../reducer/constants";
import HttpUserClient from "../../../../../utils/http/httpUserClient";
import { parseObjectJson } from "../../../../../utils/parse-json";
import { ADD_CART } from "../constants/actionCart";

const options = {
  notAuthor: true,
  headers: {
    "X-API-KEY": "afcc78057c77c51d7baebcadf1d147dc5a38e9c7",
    "Content-Type": "application/json",
  },
};

function* wokerFetchData(action) {
  try {
    yield put({ type: FETCHING_DATA });
    const { payload } = action;
    const http = new HttpUserClient("http://127.0.0.1:8000/api/product");
    const res = yield call(http.getItems, payload);
    const parseData = parseObjectJson(res.data);
    yield put({ type: FETCH_DATA_SUCCESS, payload: parseData.data });
  } catch (err) {
    yield put({ type: FETCH_DATA_FAILED });
  } finally {
    yield put({ type: FETCHED_DATA });
  }
}

function* wokerAddCart(action) {
  try {
    yield put({ type: FETCHING_DATA });
    const { payload } = action;
    const http = new HttpUserClient("http://localhost:8081/products");
    const res = yield call(http.getItems, payload, options);
    const parseData = parseObjectJson(res.data);
    yield put({ type: FETCH_DATA_SUCCESS, payload: parseData });
  } catch (err) {
    yield put({ type: FETCH_DATA_FAILED });
  } finally {
    yield put({ type: FETCHED_DATA });
  }
}

function* warcherSagaProducrtList() {
  yield takeLatest(FETCH_DATA, wokerFetchData);
  yield takeLatest(ADD_CART, wokerAddCart);
}

export default warcherSagaProducrtList;
