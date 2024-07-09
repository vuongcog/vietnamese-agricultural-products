import {
  ADD_CART_CUCCESS,
  ADD_CART_FAILED,
  ADD_CART_RESET_STATUS_ADDING,
  ADDED_CART,
  ADDING_CART,
  DELETE_CART_FAILED,
  DELETE_CART_SUCCESS,
  DELETED_CART,
  DELETING_CART,
  FETCH_CART_ERROR,
  FETCH_CART_RESET_STATUS,
  FETCH_CART_SUCCESS,
  FETCHED_CART,
  FETCHING_CART,
  RESET_STATUS_DELETE_CART,
  RESET_STATUS_UPDATE_CART,
  SET_CART,
  UPDATE_CART_FAILED,
  UPDATE_CART_SUCCESS,
  UPDATED_CART,
  UPDATING_CART,
} from '../actions/action-cart';

export const initialState = {
  // 222 state cart
  carts: [],
  isFetchingCart: false,
  isFetchCartSuccess: false,
  isFetchCartFailed: false,
  // 333 state add cart
  isAddingCart: false,
  isAddCartSuccess: false,
  isAddCardError: false,
  // 444 state delete cart
  isDeletingCart: false,
  isDeleteCartSuccess: false,
  isDeleteCartFailed: false,
  /// 555 state update cart
  isUpdatingCart: false,
  isUpdateCartSuccsess: false,
  isUdpateCartFailed: false,
};

// 111 handler adding for cart
const handlerAddingCart = state => ({ ...state, isAddingCart: true });
const handlerAddedCart = state => ({ ...state, isAddingCart: false });
const handlerAddCartSuccess = state => ({ ...state, isAddCartSuccess: true });
const handlerAddCartError = state => ({ ...state, isAddCardError: true });
const handlerResetStatusAddCart = state => ({
  ...state,
  isAddCartSuccess: false,
  isAddCardError: false,
});
// 222 handler get cart
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
// 333 handler delete cart
const handlerDeletingCart = state => ({ ...state, isDeletingCart: true });
const handlerDeletedCart = state => ({ ...state, isDeletingCart: false });
const handlerDeleteCartSuccess = state => ({
  ...state,
  isDeleteCartSuccess: true,
});
const handlerDeleteCartError = state => ({
  ...state,
  isDeleteCartFailed: true,
});
const handlerResetStatusDeleteCart = state => ({
  ...state,
  isDeleteCartSuccess: false,
  isDeleteCartFailed: false,
});
// 444 handelr update cart
const handlerUpdatingCart = state => ({ ...state, isDeletingCart: true });
const handlerUpdatedCart = state => ({ ...state, isDeletingCart: false });
const handlerUpdateCartSuccess = state => ({
  ...state,
  isDeleteCartSuccess: true,
});
const handlerUpdateCartError = state => ({
  ...state,
  isDeleteCartFailed: true,
});
const handlerResetStatusUpdateCart = state => ({
  ...state,
  isDeleteCartSuccess: false,
  isDeleteCartFailed: false,
});
const mapperHandle = {
  /// 222 action cart
  [FETCHING_CART]: handlerFetchingCart,
  [SET_CART]: handlerSetCart,
  [FETCHED_CART]: handlerFetchedCart,
  [FETCH_CART_SUCCESS]: handlerFetchCartCuccess,
  [FETCH_CART_ERROR]: handlerFetchCartFailed,
  [FETCH_CART_RESET_STATUS]: handlerResetStatusFetchCart,

  // 333 action add cart
  [ADDING_CART]: handlerAddingCart,
  [ADDED_CART]: handlerAddedCart,
  [ADD_CART_CUCCESS]: handlerAddCartSuccess,
  [ADD_CART_FAILED]: handlerAddCartError,
  [ADD_CART_RESET_STATUS_ADDING]: handlerResetStatusAddCart,

  // 444 action delete cart
  [DELETING_CART]: handlerDeletingCart,
  [DELETED_CART]: handlerDeletedCart,
  [DELETE_CART_SUCCESS]: handlerDeleteCartSuccess,
  [DELETE_CART_FAILED]: handlerDeleteCartError,
  [RESET_STATUS_DELETE_CART]: handlerResetStatusDeleteCart,
  // 555 action update cart
  [UPDATING_CART]: handlerUpdatingCart,
  [UPDATED_CART]: handlerUpdatedCart,
  [UPDATE_CART_SUCCESS]: handlerUpdateCartSuccess,
  [UPDATE_CART_FAILED]: handlerUpdateCartError,
  [RESET_STATUS_UPDATE_CART]: handlerResetStatusUpdateCart,
};
export const reducerCartUser = (state = initialState, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
