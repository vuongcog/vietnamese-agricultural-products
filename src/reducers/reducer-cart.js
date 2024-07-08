import {
  ADD_CART_CUCCESS,
  ADD_CART_FAILED,
  ADD_CART_RESET_STATUS_ADDING,
  ADDED_CART,
  ADDING_CART,
  FETCH_CART_ERROR,
  FETCH_CART_RESET_STATUS,
  FETCH_CART_SUCCESS,
  FETCHED_CART,
  FETCHING_CART,
  SET_CART,
} from '../actions/action-cart';

export const initialState = {
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
const handlerAddingCart = state => ({ ...state, isAddingCart: true });
const handlerAddedCart = state => ({ ...state, isAddingCart: false });
const handlerAddCartSuccess = state => ({ ...state, isAddCartSuccess: true });
const handlerAddCartError = state => ({ ...state, isAddCardError: true });
const handlerResetStatusAddCart = state => ({
  ...state,
  isAddCartSuccess: false,
  isAddCardError: false,
});

const handlerFetchingCart = state => ({ ...state, isFetchingCart: true });
const handlerFetchedCart = state => ({ ...state, isFetchingCart: false });
const handlerSetCart = (state, action) => ({ ...state, carts: action.payload });
const handlerFetchCartCuccess = state => ({
  ...state,
  isAddCartSuccess: true,
});
const handlerFetchCartFailed = state => ({ ...state, isAddCardError: true });
const handlerResetStatusFetchCart = state => ({
  ...state,
  isAddCartSuccess: false,
  isAddCardError: false,
});

const mapperHandle = {
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
export const reducerCartUser = (state = initialState, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
