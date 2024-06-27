export const getItemsProductList = (state) =>
  state[`list-product-reducer`].items;
export const getFechingStatus = (state) =>
  state[`list-product-reducer`].isFetching;
export const getFetchingSuccess = (state) =>
  state[`list-product-reducer`].isFetchingSuccess;
export const getFetchingFailed = (state) =>
  state[`list-product-reducer`].isFetchingFailed;

// ! selector filter
export const getSearchFilter = (state) => state.filter.search;
export const getPaginationFilter = (state) => state.filter.pagination;
export const getLimitFilter = (state) => state.filter.limit;
