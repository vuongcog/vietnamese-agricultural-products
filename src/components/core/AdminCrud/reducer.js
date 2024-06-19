const FETCH_DATA = "FETCH_DATA";
const ADD_DATA = "ADD_DATA";
const intiState = {
  loading: true,
  isFetching: false,
  data: [],
};

const fetchingData = (state) => ({
  ...state,
  loading: true,
  isFeching: true,
  data: [],
});

const addData = (state) => {
  return {
    ...state,
  };
};

const handlers = {
  [FETCH_DATA]: fetchingData,
  [ADD_DATA]: addData,
};
export const reducerList = (state = intiState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
