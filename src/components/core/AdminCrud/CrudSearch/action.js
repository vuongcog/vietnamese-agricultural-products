/* eslint-disable indent */

import {
  ACTION_ADD_FILTERS,
  ACTION_CLEAR_FILTERS,
  ACTION_INIT_FILTERS_SUCCESS,
  ACTION_REPLACE_FILTERS,
  ACTION_START_INIT_FILTERS,
} from "./constants";

export const addFilters = (filters) => ({
  type: ACTION_ADD_FILTERS,
  payload: { filters: { ...filters } },
});

export const replaceFilters = (filters, cb) => ({
  type: ACTION_REPLACE_FILTERS,
  payload: { filters: { ...filters }, cb },
});
// export const changeDateRangeFilter = (dateRangeComparison) => ({
//   type: ACTION_CHANGE_DATE_RANGE_FILTERS,
//   payload: { dateRangeComparison },
// });

export const clearFilters = () => ({ type: ACTION_CLEAR_FILTERS });

export const startInitFilters = (cb) => ({
  type: ACTION_START_INIT_FILTERS,
  payload: { cb },
});

export const initFiltersSuccess = () => ({ type: ACTION_INIT_FILTERS_SUCCESS });
