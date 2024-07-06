import {
  DETAIL_FETCHING_DATA,
  DETAIL_FETCHED_DATA,
  DETAIL_FETCH_DATA_FAILED,
  DETAIL_FETCH_DATA_SUCCESS,
  DETAIL_SET_PRODUCT,
  DETAIL_RESET_STATUS_FETCH_DATA,
} from "../../constants/action";
const initState = {
  isFetchingDetail: false,
  isFetchingDetailSuccsess: false,
  isFetchingDetailError: false,
  product: [],
};
const handlerFetchingDataDetail = (state) => ({
  ...state,
  isFetchingDetail: true,
});
const handlerSetProduct = (state, action) => ({
  ...state,
  product: action.payload,
});
const handlerFetchedDataDetail = (state) => ({
  ...state,
  isFetchingDetail: false,
});
const handlerFetchDataDetailSuccess = (state) => ({
  ...state,
  isFetchingDetailSuccsess: true,
});
const handlerFetchDataDetailFailed = (state) => ({
  ...state,
  isFetchingDetailError: true,
});
const handlerResetStatusFetchData = (state) => ({
  ...state,
  isFetchingDetailSuccsess: false,
  isFetchingDetailError: false,
});
const mapperHandle = {
  [DETAIL_FETCHING_DATA]: handlerFetchingDataDetail,
  [DETAIL_FETCHED_DATA]: handlerFetchedDataDetail,
  [DETAIL_FETCH_DATA_SUCCESS]: handlerFetchDataDetailSuccess,
  [DETAIL_FETCH_DATA_FAILED]: handlerFetchDataDetailFailed,
  [DETAIL_SET_PRODUCT]: handlerSetProduct,
  [DETAIL_RESET_STATUS_FETCH_DATA]: handlerResetStatusFetchData,
};
//

export const reducerDetailProduct = (state = initState, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
