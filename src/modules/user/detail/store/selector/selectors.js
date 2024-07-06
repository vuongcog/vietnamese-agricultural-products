import { DETAIL_PRODUCT_REDUCER } from "../../../../../constants/name-store/user/name-space-reducer";

export const getDetailProduct = (state) =>
  state[DETAIL_PRODUCT_REDUCER].product;
export const getIsFetchingDetailProduct = (state) =>
  state[DETAIL_PRODUCT_REDUCER].isFetchingDetail;
export const getFetchStatusDetailProductSuccess = (state) =>
  state[DETAIL_PRODUCT_REDUCER].isFetchingDetailSuccsess;
export const getFetchStatusDetailProductFailed = (state) =>
  state[DETAIL_PRODUCT_REDUCER].isFetchingDetailError;
