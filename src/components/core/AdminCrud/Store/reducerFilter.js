export const initialFilterState = {
  search: '',
  perpage: 5,
  pagination: 1,
  totalPage: 0,
  currentPage: 1,
  id: '',
  sort_by: 'created_at',
  sort_direction: 'asc',
};

import {
  CRUD_SET_PAGANATION,
  CRUD_SET_PER_PAGE,
  CRUD_SET_SEARCH,
  CRUD_SET_ID,
  CRUD_SET_TOTAL_PAGE,
  CRUD_SET_CURRENT_PAGE,
  CRUD_SET_INIT_REDUCER_FILTER,
  CRUD_SET_SORT_BY,
  CRUD_SET_SORT_DIRECTION,
} from '../constants/actionFilter.js';
const handlerSetSortBy = (state, action) => ({
  ...state,
  sort_by: action.payload,
});
const handlerSetSortDirection = (state, action) => ({
  ...state,
  sort_direction: action.payload,
});
const handlerSetInitReducerFilter = (state, action) => ({
  ...state,
  ...action.payload,
});
const handlerSetSearch = (state, action) => ({
  ...state,
  search: action.payload,
});
const handlerSetPerPage = (state, action) => ({
  ...state,
  perpage: action.payload,
});
const handlerSetPagination = (state, action) => ({
  ...state,
  pagination: action.payload,
});
const handlerSetID = (state, action) => ({ ...state, id: action.payload });
const handlerSetTotalPage = (state, action) => ({
  ...state,
  totalPage: action.payload,
});
const handlerSetCurrentPage = (state, action) => ({
  ...state,
  currentPage: action.payload,
});
const mapperHandle = {
  [CRUD_SET_INIT_REDUCER_FILTER]: handlerSetInitReducerFilter,
  [CRUD_SET_SEARCH]: handlerSetSearch,
  [CRUD_SET_PER_PAGE]: handlerSetPerPage,
  [CRUD_SET_PAGANATION]: handlerSetPagination,
  [CRUD_SET_TOTAL_PAGE]: handlerSetTotalPage,
  [CRUD_SET_CURRENT_PAGE]: handlerSetCurrentPage,
  [CRUD_SET_ID]: handlerSetID,
  [CRUD_SET_SORT_BY]: handlerSetSortBy,
  [CRUD_SET_SORT_DIRECTION]: handlerSetSortDirection,
};
//

export const reducerFilter = (state = initialFilterState, action) => {
  const handle = mapperHandle[action.type];
  return handle ? handle(state, action) : state;
};
