import {
  FETCHED_DATA,
  FETCHING_DATA,
  FETCH_DATA_FAILED,
  FETCH_DATA_SUCCESS,
  FETCH_RESET_STATUS_FETCHING,
} from "./constants";

export const initialState = {
  isFetching: false,
  isFetchingSuccess: null,
  isFetchingFailed: null,

  refresh: false,
  loading: false,
  limit: 10,
  page: 1,

  items: [],
};
const handlerFetching = (state) => {
  return { ...state, isFetching: true };
};
const handlerFetched = (state) => {
  return { ...state, isFetching: false };
};
const handlerSuccsess = (state, action) => {
  return { ...state, items: [...state.items, ...action.payload] };
};
const handlerFailed = (state) => {
  return { ...state, isFetchingFailed: null };
};
const handlerResetStatusFetching = (state) => {
  return {
    ...state,
    isFetchingSuccess: null,
    isFetchingFailed: null,
  };
};

const mapperHandle = {
  [FETCHING_DATA]: handlerFetching,
  [FETCHED_DATA]: handlerFetched,
  [FETCH_DATA_SUCCESS]: handlerSuccsess,
  [FETCH_DATA_FAILED]: handlerFailed,
  [FETCH_RESET_STATUS_FETCHING]: handlerResetStatusFetching,
};
export const reducerProductList = (state = initialState, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
