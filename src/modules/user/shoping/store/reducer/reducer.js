import {
  FETCHED_DATA,
  FETCHING_DATA,
  FETCH_DATA_FAILED,
  FETCH_DATA_SUCCESS,
  FETCH_RESET_STATUS_FETCHING,
} from "./constants";
import {
  FETCHED_CART,
  FETCHING_CART,
  FETCH_CART_ERROR,
  FETCH_CART_SUCCESS,
  SET_CART,
  FETCH_CART_RESET_STATUS,
  ADDING_CART,
  ADDED_CART,
  ADD_CART_CUCCESS,
  ADD_CART_FAILED,
  ADD_CART_RESET_STATUS_ADDING,
} from "../constants/actionCart";
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
  // 222 state cart
  carts: [],
  isFetchingCart: false,
  isFetchCartSuccess: false,
  isFetchCartFailed: false,

  isAddingCart: false,
  isAddCartSuccess: false,
  isAddCardError: false,
};
// 111 handler for cart
const handlerAddingCart = (state) => {
  return { ...state, isAddingCart: true };
};
const handlerAddedCart = (state) => {
  return { ...state, isAddingCart: false };
};
const handlerAddCartSuccess = (state) => {
  return { ...state, isAddCartSuccess: true };
};
const handlerAddCartError = (state) => {
  return { ...state, isAddCardError: true };
};
const handlerResetStatusAddCart = (state) => {
  return { ...state, isAddCartSuccess: false, isAddCardError: false };
};

const handlerFetchingCart = (state) => ({ ...state, isFetchingCart: true });
const handlerFetchedCart = (state) => ({ ...state, isFetchingCart: false });
const handlerSetCart = (state, action) => ({ ...state, carts: action.payload });
const handlerFetchCartCuccess = (state) => ({
  ...state,
  isAddCartSuccess: true,
});
const handlerFetchCartFailed = (state) => ({ ...state, isAddCardError: true });
const handlerResetStatusFetchCart = (state) => ({
  ...state,
  isAddCartSuccess: false,
  isAddCardError: false,
});

/// 222 handler for fetch data
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

  /// 222 action cart
  [FETCHING_CART]: handlerFetchingCart,
  [SET_CART]: handlerSetCart,
  [FETCHED_CART]: handlerFetchedCart,
  [FETCH_CART_SUCCESS]: handlerFetchCartCuccess,
  [FETCH_CART_ERROR]: handlerFetchCartFailed,
  [FETCH_CART_RESET_STATUS]: handlerResetStatusFetchCart,

  [ADDING_CART]: handlerAddingCart,
  [ADDED_CART]: handlerAddedCart,
  [ADD_CART_CUCCESS]: handlerAddCartSuccess,
  [ADD_CART_FAILED]: handlerAddCartError,
  [ADD_CART_RESET_STATUS_ADDING]: handlerResetStatusAddCart,
};
export const reducerProductList = (state = initialState, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
