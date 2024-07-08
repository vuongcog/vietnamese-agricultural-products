import { call, put, takeLatest } from 'redux-saga/effects';
import {
  ADD_CART,
  ADD_CART_CUCCESS,
  ADD_CART_FAILED,
  ADDED_CART,
  ADDING_CART,
  FETCH_CART,
  FETCH_CART_ERROR,
  FETCH_CART_SUCCESS,
  FETCHED_CART,
  FETCHING_CART,
  SET_CART,
} from '../actions/action-cart';
import HttpUserClient from '../utils/http/httpUserClient';
import { toast } from 'react-toastify';
import { parseObjectJson } from '../utils/parse-json';

const options = {
  notAuthor: true,
  withCredentials: true,
};

function* wokerAddCart(action) {
  try {
    yield put({ type: ADDING_CART });
    const { payload } = action;
    const http = new HttpUserClient(payload.endpoint);
    yield call(http.addCart, payload.params, options);
    yield put({ type: ADD_CART_CUCCESS });
    toast.success('Thêm giỏ hàng thành công');
  } catch (err) {
    yield put({ type: ADD_CART_FAILED });
    toast.error('Sản phẩm này có lẽ đã hết hoặc không tồn tại');
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
    yield put({ type: FETCHED_CART });
  }
}
function* watcherSagaCart() {
  yield takeLatest(FETCH_CART, wokerFetchCart);
  yield takeLatest(ADD_CART, wokerAddCart);
}

export default watcherSagaCart;
