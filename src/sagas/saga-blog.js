import { call, put, takeLatest } from 'redux-saga/effects';

import HttpUserClient from '../utils/http/httpUserClient';
import { parseObjectJson } from '../utils/parse-json';
import {
  FETCH_ALL_BLOG,
  FETCH_ALL_BLOG_FAILED,
  FETCH_ALL_BLOG_SUCCESS,
  FETCH_BLOG,
  FETCH_BLOG_FAILED,
  FETCH_BLOG_SUCCESS,
  FETCH_BLOGS_WITH_CATEGORY,
  FETCH_BLOGS_WITH_CATEGORY_FAILED,
  FETCH_BLOGS_WITH_CATEGORY_SUCCESS,
  FETCHED_ALL_BLOG,
  FETCHED_BLOG,
  FETCHED_BLOGS_WITH_CATEGORY,
  FETCHING_ALL_BLOG,
  FETCHING_BLOG,
  FETCHING_BLOGS_WITH_CATEGORY,
  RESET_ALL_STATUS_FETCH_BLOG,
  RESET_STATUS_FETCH_BLOG,
  RESET_STATUS_FETCH_BLOGS_WITH_CATEGORY,
  SET_ALL_BLOG,
  SET_BLOG,
  SET_BLOGS_WITH_CATEGORY,
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
    const res = yield call(http.getBlog);
    const parseObject = parseObjectJson(res.data);
    yield put({ type: SET_BLOG, payload: parseObject.baiviet });
    yield put({ type: FETCH_BLOG_SUCCESS });
  } catch (err) {
    yield put({ type: FETCH_BLOG_FAILED });
  } finally {
    yield put({ type: FETCHED_BLOG });
    yield put({ type: RESET_STATUS_FETCH_BLOG });
  }
}
function* wokerFetchAllBlogs(action) {
  try {
    yield put({ type: FETCHING_ALL_BLOG });
    const { payload } = action;
    const http = new HttpUserClient(payload.endpoint);
    const res = yield call(http.getAllBlog);
    const parseObject = parseObjectJson(res.data);
    yield put({ type: SET_ALL_BLOG, payload: parseObject.baiviet });
    yield put({ type: FETCH_ALL_BLOG_SUCCESS });
  } catch (err) {
    yield put({ type: FETCH_ALL_BLOG_FAILED });
  } finally {
    yield put({ type: FETCHED_ALL_BLOG });
    yield put({ type: RESET_ALL_STATUS_FETCH_BLOG });
  }
}

function* wokerFetchBlogsWithCategory(action) {
  try {
    yield put({ type: FETCHING_BLOGS_WITH_CATEGORY });
    const { payload } = action;
    const http = new HttpUserClient(payload.endpoint);
    const res = yield call(http.getBlogs);
    const parseObject = parseObjectJson(res.data);
    yield put({
      type: SET_BLOGS_WITH_CATEGORY,
      payload: parseObject.data.data,
    });
    yield put({ type: FETCH_BLOGS_WITH_CATEGORY_SUCCESS });
  } catch (err) {
    yield put({ type: FETCH_BLOGS_WITH_CATEGORY_FAILED });
  } finally {
    yield put({ type: FETCHED_BLOGS_WITH_CATEGORY });
    yield put({ type: RESET_STATUS_FETCH_BLOGS_WITH_CATEGORY });
  }
}
function* watcherSagaBlogs() {
  yield takeLatest(FETCH_BLOG_CATEGORIES, wokerFetchBlogCategories);
  yield takeLatest(FETCH_BLOG, wokerFetchBlog);
  yield takeLatest(FETCH_BLOGS_WITH_CATEGORY, wokerFetchBlogsWithCategory);
  yield takeLatest(FETCH_ALL_BLOG, wokerFetchAllBlogs);
}

export default watcherSagaBlogs;
