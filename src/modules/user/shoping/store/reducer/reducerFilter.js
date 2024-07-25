import {
  FILTER_SEARCH,
  FILTER_PAGINATION,
  FILTER_LIMIT,
  FILTER_PRICE_RANGE,
  FILTER_CATEGORY,
  FILTER_LAST_PAGE,
} from './filterConstants';
const handlerSetLastPage = (state, action) => ({
  ...state,
  lastPage: action.payload,
});
const handlerSetSearch = (state, action) => ({
  ...state,
  search: action.payload,
});
const handlerSetLimit = (state, action) => ({
  ...state,
  limit: action.payload,
});
const handlerSetPagination = (state, action) => ({
  ...state,
  pagination: action.payload,
});
const handlerSetPriceRange = (state, action) => ({
  ...state,
  priceRange: action.payload,
});
const handlerSetCategory = (state, action) => ({
  ...state,
  category: action.payload,
});
const mapperHandle = {
  [FILTER_SEARCH]: handlerSetSearch,
  [FILTER_LIMIT]: handlerSetLimit,
  [FILTER_PAGINATION]: handlerSetPagination,
  [FILTER_PRICE_RANGE]: handlerSetPriceRange,
  [FILTER_CATEGORY]: handlerSetCategory,
  [FILTER_LAST_PAGE]: handlerSetLastPage,
};
//

export const refactorReducerFilter = initState => {
  const reducerFilter = (state = initState, action) => {
    const handle = mapperHandle[action.type];
    return handle ? handle(state, action) : state;
  };
  return reducerFilter;
};
