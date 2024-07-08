import {
  CLEAR_PRODUCTS,
  FETCHED_DATA,
  FETCHING_DATA,
  FETCH_DATA_FAILED,
  FETCH_DATA_SUCCESS,
  FETCH_RESET_STATUS_FETCHING,
} from './constants';

export const initialState = {
  // 111 state global
  isFetching: false,
  isFetchingSuccess: null,
  isFetchingFailed: null,
  refresh: false,
  loading: false,
  limit: 10,
  page: 0,
  items: [],
};
const handlerClearProducts = state => ({ ...state, items: [] });
/// 222 handler for fetch data
const handlerFetching = state => ({ ...state, isFetching: true });
const handlerFetched = state => ({ ...state, isFetching: false });
const handlerSuccsess = (state, action) => ({
  ...state,
  items: [...state.items, ...action.payload],
});
const handlerFailed = state => ({ ...state, isFetchingFailed: null });
const handlerResetStatusFetching = state => ({
  ...state,
  isFetchingSuccess: null,
  isFetchingFailed: null,
});

const mapperHandle = {
  [FETCHING_DATA]: handlerFetching,
  [FETCHED_DATA]: handlerFetched,
  [FETCH_DATA_SUCCESS]: handlerSuccsess,
  [FETCH_DATA_FAILED]: handlerFailed,
  [FETCH_RESET_STATUS_FETCHING]: handlerResetStatusFetching,
  [CLEAR_PRODUCTS]: handlerClearProducts,
};
export const reducerProductList = (state = initialState, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
