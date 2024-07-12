import { call, delay, put, takeLatest } from 'redux-saga/effects';
import {
  ADD_CART,
  ADD_CART_CUCCESS,
  ADD_CART_FAILED,
  ADD_CART_RESET_STATUS_ADDING,
  ADDED_CART,
  ADDING_CART,
  DELETE_CART,
  DELETE_CART_FAILED,
  DELETE_CART_SUCCESS,
  DELETED_CART,
  DELETING_CART,
  FETCH_CART,
  FETCH_CART_ERROR,
  FETCH_CART_RESET_STATUS,
  FETCH_CART_SUCCESS,
  FETCHED_CART,
  FETCHING_CART,
  RE_FETCH_CART,
  RESET_STATUS_DELETE_CART,
  RESET_STATUS_UPDATE_CART,
  SET_CART,
  UPDATE_CART,
  UPDATE_CART_FAILED,
  UPDATE_CART_SUCCESS,
  UPDATED_CART,
  UPDATING_CART,
} from '../actions/action-cart';
import HttpUserClient from '../utils/http/httpUserClient';
import { toast } from 'react-toastify';
import { parseObjectJson } from '../utils/parse-json';
import { error } from 'jquery';

const options = {
  notAuthor: true,
  withCredentials: true,
};

function* wokerAddCart(action) {
  try {
    yield put({ type: ADDING_CART });
    const { payload } = action;
    const http = new HttpUserClient(payload.endpoint);
    yield call(http.addCart, payload.params);
    yield put({ type: ADD_CART_CUCCESS });
    toast.success('Thêm giỏ hàng thành công');
  } catch (err) {
    yield put({ type: ADD_CART_FAILED });
    const message = parseObjectJson(err.response.data);
    toast.error(message.message);
  } finally {
    yield put({ type: ADDED_CART });
    yield put({ type: ADD_CART_RESET_STATUS_ADDING });
  }
}

function* wokerDeleteCart(action) {
  try {
    yield put({ type: DELETING_CART });
    const { payload } = action;
    const http = new HttpUserClient(payload);
    yield call(http.deleteCart);
    yield put({ type: DELETE_CART_SUCCESS });
    yield put({ type: RE_FETCH_CART });
    toast.success('Xóa giỏ hàng thành công');
  } catch (err) {
    yield put({ type: DELETE_CART_FAILED });
    toast.error('Xóa giỏ hàng thất bại');
  } finally {
    yield put({ type: DELETED_CART });
    // yield delay(100); // Trì hoãn 2 giây trước khi reset trạng thái
    yield put({ type: RESET_STATUS_DELETE_CART });
  }
}

function* wokerUpdateCart(action) {
  try {
    yield put({ type: UPDATING_CART });
    const { payload } = action;
    const http = new HttpUserClient('/giohang/capnhatgiohang?_method=PUT');
    yield call(http.updateCart, payload);
    yield put({ type: UPDATE_CART_SUCCESS });
    // toast.success('Thêm giỏ hàng thành công');
  } catch (err) {
    yield put({ type: UPDATE_CART_FAILED });
    // const parseObject = parseObjectJson(err.response.data);
    // toast.error(parseObject.message);
  } finally {
    yield put({ type: UPDATED_CART });
    yield put({ type: RESET_STATUS_UPDATE_CART });
  }
}

function* wokerFetchCart(action) {
  try {
    yield put({ type: FETCHING_CART });
    const { payload } = action;
    const http = new HttpUserClient(payload.endpoint);
    const res = yield call(http.getCarts);
    const parseObject = parseObjectJson(res.data);
    yield put({ type: SET_CART, payload: parseObject.giohang });
    yield put({ type: FETCH_CART_SUCCESS });
  } catch (err) {
    yield put({ type: FETCH_CART_ERROR });
  } finally {
    yield put({ type: FETCHED_CART });
    yield put({ type: FETCH_CART_RESET_STATUS });
  }
}
function* watcherSagaCart() {
  yield takeLatest(FETCH_CART, wokerFetchCart);
  yield takeLatest(ADD_CART, wokerAddCart);
  yield takeLatest(DELETE_CART, wokerDeleteCart);
  yield takeLatest(UPDATE_CART, wokerUpdateCart);
}

export default watcherSagaCart;
