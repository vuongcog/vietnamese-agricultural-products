import {
  ORDER_PRODUCT_FAILED,
  ORDER_PRODUCT_SUCCESS,
  ORDERED_PRODUCT,
  ORDERING_PRODUCT,
} from '../actions/action-order';

export const initialState = {
  isOrdering: false,
  isOrderSucess: false,
  isOrderFailed: false,
};
const handlerOrdering = state => ({ ...state, isOrdering: true });
const handlerOrdered = state => ({ ...state, isOrdering: false });
const handlerOrderSuccess = state => ({ ...state, isOrderSucess: true });
const handlerOrderFailed = state => ({ ...state, isOrderFailed: true });

const mapperHandle = {
  // 333 action order
  [ORDERING_PRODUCT]: handlerOrdering,
  [ORDERED_PRODUCT]: handlerOrdered,
  [ORDER_PRODUCT_SUCCESS]: handlerOrderSuccess,
  [ORDER_PRODUCT_FAILED]: handlerOrderFailed,
};

export const reducerOrder = (state = initialState, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
