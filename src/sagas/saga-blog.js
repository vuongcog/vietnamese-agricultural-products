import { call, put, takeLatest } from 'redux-saga/effects';

import HttpUserClient from '../utils/http/httpUserClient';
import { toast } from 'react-toastify';
import { parseObjectJson } from '../utils/parse-json';
import {
  FETCH_BLOG,
  FETCH_BLOG_FAILED,
  FETCH_BLOG_SUCCESS,
  FETCHED_BLOG,
  FETCHING_BLOG,
  RESET_STATUS_FETCH_BLOG,
  SET_BLOG,
} from '../actions/action-blog';
import {
  FETCH_BLOG_CATEGORIES,
  FETCH_BLOG_CATEGORIES_FAILED,
  FETCH_BLOG_CATEGORIES_SUCCESS,
  FETCHED_BLOG_CATEGORIES,
  FETCHING_BLOG_CATEGORIES,
  RESET_STATUS_FETCH_BLOG_CATEGORIES,
  SET_BLOG_CATEGORIES,
} from '../actions/action-blog-categories';

function* wokerFetchBlogCategories(action) {
  try {
    yield put({ type: FETCHING_BLOG_CATEGORIES });
    const { payload } = action;
    const http = new HttpUserClient(payload.endpoint);
    const res = yield call(http.getCarts);
    const parseObject = parseObjectJson(res.data);
    yield put({
      type: SET_BLOG_CATEGORIES,
      payload: parseObject.danhmucbaiviet,
    });
    yield put({ type: FETCH_BLOG_CATEGORIES_SUCCESS });
  } catch (err) {
    yield put({ type: FETCH_BLOG_CATEGORIES_FAILED });
  } finally {
    yield put({ type: FETCHED_BLOG_CATEGORIES });
    yield put({ type: RESET_STATUS_FETCH_BLOG_CATEGORIES });
  }
}

function* wokerFetchBlog(action) {
  try {
    yield put({ type: FETCHING_BLOG });
    const { payload } = action;
    const http = new HttpUserClient(payload.endpoint);
    const res = yield call(http.getCarts);
    const parseObject = parseObjectJson(res.data);
    yield put({ type: SET_BLOG, payload: parseObject.giohang });
    yield put({ type: FETCH_BLOG_SUCCESS });
  } catch (err) {
    yield put({ type: FETCH_BLOG_FAILED });
  } finally {
    yield put({ type: FETCHED_BLOG });
    yield put({ type: RESET_STATUS_FETCH_BLOG });
  }
}
function* watcherSagaBlogs() {
  yield takeLatest(FETCH_BLOG_CATEGORIES, wokerFetchBlogCategories);
  yield takeLatest(FETCH_BLOG, wokerFetchBlog);
}

export default watcherSagaBlogs;
