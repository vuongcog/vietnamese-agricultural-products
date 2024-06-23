import {
  ADDED_DATA,
  ADDING_DATA,
  ADD_DATA,
  FETCHED_DATA,
  FETCH_DATA,
  REFRESH,
  SET_ERROR,
  SET_ITEMS,
  UPDATE_SLICE,
} from "./constants";
const intiState = {
  loading: true,
  isFetching: false,
  items: [],
  refresh: false,
  error: null,
  errorTimestamp: null,
  isAddingData: false,
};

const fetchingData = (state) => {
  return {
    ...state,
    isFetching: true,
  };
};
const fetchedData = (state) => ({
  ...state,
  isFetching: false,
});
const addingData = (state) => ({ ...state, isAddingData: true });
const addedData = (state) => ({ ...state, isAddingData: false });
const setItems = (state, action) => ({ ...state, items: action.payload });
const setError = (state, action) => {
  return { ...state, error: action.payload, errorTimestamp: Date.now() };
};

const addData = (state) => {
  return {
    ...state,
  };
};
const refresh = (state) => {
  console.log("asdasdf");
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
  [FETCHED_DATA]: fetchedData,

  [ADD_DATA]: addData,

  [ADDING_DATA]: addingData,
  [ADDED_DATA]: addedData,

  [SET_ITEMS]: setItems,
  [UPDATE_SLICE]: updateSlice,
  [REFRESH]: refresh,
  [SET_ERROR]: setError,
};
export const reducerList = (state = intiState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
