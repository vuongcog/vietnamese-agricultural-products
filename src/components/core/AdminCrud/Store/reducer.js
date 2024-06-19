import {
  ADD_DATA,
  FETCHED_DATA,
  FETCH_DATA,
  REFRESH,
  SET_ITEMS,
  UPDATE_SLICE,
} from "./constants";
const intiState = {
  loading: true,
  isFetching: false,
  items: [],
  refresh: false,
};

const fetchingData = (state) => {
  return {
    ...state,
    isFetching: true,
  };
};
const setItems = (state, action) => ({ ...state, items: action.payload });
const fetchedData = (state) => ({
  ...state,
  isFetching: false,
});

const addData = (state) => {
  return {
    ...state,
  };
};
const refresh = (state) => {
  return {
    ...state,
    refresh: !state.refresh,
  };
};
const updateSlice = (state) => {
  return { ...state };
};
const handlers = {
  [FETCH_DATA]: fetchingData,
  [ADD_DATA]: addData,
  [FETCHED_DATA]: fetchedData,
  [SET_ITEMS]: setItems,
  [UPDATE_SLICE]: updateSlice,
  [REFRESH]: refresh,
};
export const reducerList = (state = intiState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
