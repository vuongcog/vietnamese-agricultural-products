import { all, fork, takeLatest } from "redux-saga/effects";

import { ACTION_REPLACE_FILTERS, ACTION_START_INIT_FILTERS } from "./constants";

/**
 * Replace all filter in redux
 *
 * @param action
 * @returns {IterableIterator<*>}
 */

// eslint-disable-next-line require-yield
function* replaceFiltersHandler({ payload }) {
  if (payload.cb) {
    payload.cb();
  }
}

/**
 * Start init filter in redux
 *
 * @param action
 * @returns {IterableIterator<*>}
 */
// eslint-disable-next-line require-yield
function* startInitFilterHandler({ payload }) {
  if (payload.cb) {
    payload.cb();
  }
}

/**
 * Declare watcher for :::replaceFilters
 * @returns {IterableIterator<ForkEffect | *>}
 */
function* watcherReplaceFilters() {
  yield takeLatest(ACTION_REPLACE_FILTERS, replaceFiltersHandler);
}

/**
 * Declare watcher for :::startInitFilter
 * @returns {IterableIterator<ForkEffect | *>}
 */
function* watcherStartInitFilter() {
  yield takeLatest(ACTION_START_INIT_FILTERS, startInitFilterHandler);
}

// Individual exports for testing
export default function* detailPageSaga() {
  yield all([fork(watcherReplaceFilters), fork(watcherStartInitFilter)]);
}
