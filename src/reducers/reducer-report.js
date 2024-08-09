import {
  FETCHED_REPORT_ORDER,
  FETCHED_REPORT_PRODUCT,
  FETCHED_REPORT_PRODUCT_CATEGORY,
  FETCHED_REPORT_USER,
  FETCHING_REPORT_ORDER,
  FETCHING_REPORT_PRODUCT,
  FETCHING_REPORT_PRODUCT_CATEGORY,
  FETCHING_REPORT_USER,
  HANDLER_SET_REPORT_ORDER,
  HANDLER_SET_REPORT_PRODUCT,
  HANDLER_SET_REPORT_PRODUCT_CATEGORY,
  HANDLER_SET_REPORT_USER,
} from '../actions/action-report';

export const initialState = {
  report_user: {},
  report_product: {},
  report_product_category: {},
  report_order: {},

  isFetchingUser: false,
  isFetchingProduct: false,
  isFetchingProductCategory: false,
  isFetchingOrder: false,
};
const handlerFetchingReportUser = state => ({ ...state, isFetchingUser: true });
const handlerFetchingReportProduct = state => ({
  ...state,
  isFetchingProduct: true,
});
const handlerFetchingReportProductCategory = state => ({
  ...state,
  isFetchingProductCategory: true,
});
const handlerFetchingReportOrder = state => ({
  ...state,
  isFetchingOrder: true,
});

const handlerFetchedReportUser = state => ({ ...state, isFetchingUser: false });
const handlerFetchedReportProduct = state => ({
  ...state,
  isFetchingProduct: false,
});
const handlerFetchedReportProductCategory = state => ({
  ...state,
  isFetchingProductCategory: false,
});
const handlerFetchedReportOrder = state => ({
  ...state,
  isFetchingOrder: false,
});

const handlerSetReportUser = (state, action) => ({
  ...state,
  report_user: action.payload,
});
const handlerSetReportProduct = (state, action) => ({
  ...state,
  report_product: action.payload,
});
const handlerSetReportProductCategory = (state, action) => ({
  ...state,
  report_product_category: action.payload,
});
const handlerSetReportOrder = (state, action) => ({
  ...state,
  report_order: action.payload,
});

const mapperHandle = {
  [FETCHING_REPORT_USER]: handlerFetchingReportUser,
  [FETCHING_REPORT_PRODUCT]: handlerFetchingReportProduct,
  [FETCHING_REPORT_PRODUCT_CATEGORY]: handlerFetchingReportProductCategory,
  [FETCHING_REPORT_ORDER]: handlerFetchingReportOrder,
  [FETCHED_REPORT_USER]: handlerFetchedReportUser,
  [FETCHED_REPORT_PRODUCT]: handlerFetchedReportProduct,
  [FETCHED_REPORT_PRODUCT_CATEGORY]: handlerFetchedReportProductCategory,
  [FETCHED_REPORT_ORDER]: handlerFetchedReportOrder,
  [HANDLER_SET_REPORT_USER]: handlerSetReportUser,
  [HANDLER_SET_REPORT_PRODUCT]: handlerSetReportProduct,
  [HANDLER_SET_REPORT_PRODUCT_CATEGORY]: handlerSetReportProductCategory,
  [HANDLER_SET_REPORT_ORDER]: handlerSetReportOrder,
};
export const reducerReport = (state = initialState, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
