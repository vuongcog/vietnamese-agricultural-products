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
import {
  ADD_CART,
  ADD_CART_CUCCESS,
  ADD_CART_FAILED,
  ADDED_CART,
  ADDING_CART,
  FETCH_CART,
  FETCH_CART_ERROR,
  FETCH_CART_SUCCESS,
  FETCHING_CART,
  SET_CART,
} from "../constants/actionCart";
import { toast } from "react-toastify";

const options = {
  notAuthor: true,
  withCredentials: true,
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
    yield put({ type: ADDING_CART });
    const { payload } = action;
    const http = new HttpUserClient(payload.endpoint);
    yield call(http.addCart, payload.params, options);
    yield put({ type: ADD_CART_CUCCESS });
    toast.success("Thêm giỏ hàng thành công");
  } catch (err) {
    yield put({ type: ADD_CART_FAILED });
    toast.error("Sản phẩm này có lẽ đã hết hoặc không tồn tại");
  } finally {
    yield put({ type: ADDED_CART });
  }
}
function* wokerFetchCart(action) {
  try {
    yield put({ type: FETCHING_CART });
    const { payload } = action;
    const http = new HttpUserClient(payload.endpoint);
    const res = yield call(http.getCarts, options);
    const parseObject = parseObjectJson(res.data);
    yield put({ type: SET_CART, payload: parseObject });
    yield put({ type: FETCH_CART_SUCCESS });
  } catch (err) {
    yield put({ type: FETCH_CART_ERROR });
  } finally {
    yield put({ type: FETCHING_CART });
  }
}
function* warcherSagaProducrtList() {
  yield takeLatest(FETCH_DATA, wokerFetchData);
  yield takeLatest(ADD_CART, wokerAddCart);
  yield takeLatest(FETCH_CART, wokerFetchCart);
}

export default warcherSagaProducrtList;
