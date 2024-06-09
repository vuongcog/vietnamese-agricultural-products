import {
  ACTION_ADD_FILTERS,
  ACTION_CLEAR_FILTERS,
  ACTION_INIT_FILTERS_SUCCESS,
  ACTION_REPLACE_FILTERS,
  ACTION_START_INIT_FILTERS,
} from "./constants";

export const initialState = {
  mainFilters: {},
  // dateRangeFilters: {},
  isInitSuccess: false,
};

const filterProducerReducer = (state = initialState, { type, payload }) => {
  // console.log(type, state);
  switch (type) {
    case ACTION_ADD_FILTERS: {
      return {
        ...state,
        mainFilters: {
          ...state.mainFilters,
          ..._.cloneDeep(payload.filters || {}),
        },
      };
    }
    case ACTION_REPLACE_FILTERS: {
      return {
        ...state,
        mainFilters: {
          ..._.cloneDeep(payload.filters || {}),
        },
      };
    }
    case ACTION_CLEAR_FILTERS: {
      return {
        ...state,
        mainFilters: {},
      };
    }
    case ACTION_START_INIT_FILTERS: {
      return {
        ...state,
        isInitSuccess: false,
      };
    }
    case ACTION_INIT_FILTERS_SUCCESS: {
      return {
        ...state,
        isInitSuccess: true,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default filterProducerReducer;
