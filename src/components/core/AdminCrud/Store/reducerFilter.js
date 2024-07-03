export const initialFilterState = {
  search: "",
  perpage: 5,
  pagination: 1,
  totalPage: 0,
  currentPage: 1,
};

import {
  CRUD_SET_PAGANATION,
  CRUD_SET_PER_PAGE,
  CRUD_SET_SEARCH,
  CRUD_SET_TOTAL_PAGE,
  CRUD_SET_CURRENT_PAGE,
  CRUD_SET_INIT_REDUCER_FILTER,
} from "../constants/actionFilter.js";
const handlerSetInitReducerFilter = (state, action) => {
  return { ...state, ...action.payload };
};
const handlerSetSearch = (state, action) => {
  return { ...state, search: action.payload };
};
const handlerSetPerPage = (state, action) => {
  return { ...state, perpage: action.payload };
};
const handlerSetPagination = (state, action) => {
  return { ...state, pagination: action.payload };
};
const handlerSetTotalPage = (state, action) => {
  return { ...state, totalPage: action.payload };
};
const handlerSetCurrentPage = (state, action) => {
  return { ...state, currentPage: action.payload };
};
const mapperHandle = {
  [CRUD_SET_INIT_REDUCER_FILTER]: handlerSetInitReducerFilter,
  [CRUD_SET_SEARCH]: handlerSetSearch,
  [CRUD_SET_PER_PAGE]: handlerSetPerPage,
  [CRUD_SET_PAGANATION]: handlerSetPagination,
  [CRUD_SET_TOTAL_PAGE]: handlerSetTotalPage,
  [CRUD_SET_CURRENT_PAGE]: handlerSetCurrentPage,
};
//

export const reducerFilter = (state = initialFilterState, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
