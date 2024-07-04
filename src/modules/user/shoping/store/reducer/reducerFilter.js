import {
  FILTER_SEARCH,
  FILTER_PAGINATION,
  FILTER_LIMIT,
  FILTER_PRICE_RANGE,
  FILTER_CATEGORY,
} from "./filterConstants";

const handlerSetSearch = (state, action) => {
  return { ...state, search: action.payload };
};
const handlerSetLimit = (state, action) => {
  return { ...state, limit: action.payload };
};
const handlerSetPagination = (state, action) => {
  return { ...state, pagination: action.payload };
};
const handlerSetPriceRange = (state, action) => {
  return { ...state, priceRange: action.payload };
};
const handlerSetCategory = (state, action) => {
  return { ...state, category: action.payload };
};
const mapperHandle = {
  [FILTER_SEARCH]: handlerSetSearch,
  [FILTER_LIMIT]: handlerSetLimit,
  [FILTER_PAGINATION]: handlerSetPagination,
  [FILTER_PRICE_RANGE]: handlerSetPriceRange,
  [FILTER_CATEGORY]: handlerSetCategory,
};
//

export const refactorReducerFilter = (initState) => {
  const reducerFilter = (state = initState, action) => {
    const handle = mapperHandle[action.type];
    return handle ? handle(state, action) : state;
  };
  return reducerFilter;
};
