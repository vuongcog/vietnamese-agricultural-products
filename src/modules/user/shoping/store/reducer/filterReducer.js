import {
  FILTER_SEARCH,
  FILTER_PAGINATION,
  FILTER_LIMIT,
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

const mapperHandle = {
  [FILTER_SEARCH]: handlerSetSearch,
  [FILTER_LIMIT]: handlerSetLimit,
  [FILTER_PAGINATION]: handlerSetPagination,
};
//

export const refactorReducerFilter = (initState) => {
  const reducerFilter = (state = initState, action) => {
    const handle = mapperHandle[action.type];
    return handle ? handle(state, action) : state;
  };
  return reducerFilter;
};
